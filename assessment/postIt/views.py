from django.shortcuts import render
from .models import postIt
from rest_framework import viewsets
from .serializers import postItSerializer
# Create your views here.

class postItViewset(viewsets.ModelViewSet):
    serializer_class=postItSerializer
    queryset=postIt.objects.all()