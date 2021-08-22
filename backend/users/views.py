from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from backend.serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

