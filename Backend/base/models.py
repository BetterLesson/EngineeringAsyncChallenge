from django.db import models


class Reservation(models.Model):
    user = models.CharField(max_length=55)
    event = models.CharField(max_length=200)
    startTime = models.DateTimeField()
    endTime = models.DateTimeField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} Reservation for {self.event}'
