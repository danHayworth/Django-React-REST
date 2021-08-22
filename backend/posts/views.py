from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from backend.serializers import PostSerializer, UserSerializer
from posts.models import Post
from users.models import CustomUser

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

