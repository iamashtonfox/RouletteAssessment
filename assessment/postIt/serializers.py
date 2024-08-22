from .models import postIt
from rest_framework import serializers

class postItSerializer(serializers.ModelSerializer):
    class Meta:
        model=postIt
        fields='__all__' 