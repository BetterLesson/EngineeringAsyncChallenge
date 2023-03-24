from django.urls import path
from . import views

urlpatterns = [
    path('', views.getTestData),
    path('reservation/', views.addReservation),
    path('reservation/<str:username>', views.getReservations),
]
