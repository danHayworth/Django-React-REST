from users.models import CustomUser
from posts.models import Post, PostImages
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'name', 'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class PostImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = PostImages
        fields = ['images']


class PostSerializer(serializers.ModelSerializer):
    images = serializers.PrimaryKeyRelatedField(queryset=PostImages.objects.all(), many=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'image', 'user', 'images']

    def create(self, validated_data):
        images_data = validated_data.pop('images')
        post = Post.objects.create(**validated_data)
        for image_data in images_data:
            PostImages.objects.create(post=post, **image_data)
        return post


