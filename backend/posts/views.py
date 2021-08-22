from backend.serializers import PostSerializer
from rest_framework import viewsets
from posts.models import Post


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
  
