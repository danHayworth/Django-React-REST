from django.http.response import Http404
from backend.authentication import Auth
from posts.models import Post
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from backend.serializers import PostSerializer
from rest_framework.parsers import MultiPartParser, FormParser, FileUploadParser

class PostListView(APIView):
    authentication_classes = [Auth]
    parser_classes = [FormParser, MultiPartParser]
    def get(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def pre_save(self, obj):
        obj.user = self.request.user

class PostDetailView(APIView):
    authentication_classes = [Auth]
    parser_classes = [MultiPartParser, FormParser, FileUploadParser]
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def pre_save(self, obj):
        obj.user = self.request.user
