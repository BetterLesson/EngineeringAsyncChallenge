from django.shortcuts import get_object_or_404
from django.utils import timezone

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.models import Reservation
from .serializers import ReservationSerializer


@api_view(['GET'])
def getTestData(request):
    items = {
        "user": "myusername",
        "event": "Global Hack-a-thon",
        "startTime": "2023-03-22T15:00:00Z",
        "endTime": "2023-03-30T00:00:00Z"
    }
    # {
    #     "user": "mytestname",
    #     "event": "Globatestk-a-thon",
    #     "startTime": "2023-03-23T15:00:00Z",
    #     "endTime": "2023-03-25T00:00:00Z"
    # }
    return Response(items, status=status.HTTP_200_OK)


@api_view(['GET'])
def getReservations(request, username):
    """ Get events reserved based on username """
    items = get_object_or_404(Reservation, user=username)
    data = ReservationSerializer(items, context={'request': request}).data
    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def addReservation(request):
    """ Add event reservation """
    cannot_reserve = False
    serializer = ReservationSerializer(data=request.data)

    if serializer.is_valid():
        current_time = timezone.now()
        wanted_start = serializer.validated_data['startTime']
        wanted_end = serializer.validated_data['endTime']

        all_reservations = Reservation.objects.all()

        for reser in all_reservations:
            # determine if the dates selected from user are available
            if reser.startTime <= wanted_start <= reser.endTime or reser.startTime <= wanted_end <= reser.endTime:
                cannot_reserve = True
            elif wanted_start < current_time or wanted_end < current_time:
                cannot_reserve = True
            if cannot_reserve:
                break

        if cannot_reserve:
            return Response({"error_msg": "Reservation dates are not available."}, status=status.HTTP_200_OK)
        else:
            serializer.save()
    else:
        return Response({"error_msg": "Error adding"}, status=status.HTTP_200_OK)

    return Response(serializer.data, status=status.HTTP_200_OK)
