from django.db import models

# Create your models here.
"""
class postIt
    title - str
    note - str
    date - datetime
"""

class postIt(models.Model):
    title=models.CharField(max_length=255)
    content=models.TextField()
    date=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title