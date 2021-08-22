from users.models import CustomUser
from posts.models import Post
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields =['id', 'username', 'email']

class PostSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Post
        fields =['id', 'title', 'content', 'image', 'user']
