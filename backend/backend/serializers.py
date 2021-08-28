from users.models import CustomUser
from posts.models import Post
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



class PostSerializer(serializers.ModelSerializer):
    image_1 = serializers.ImageField(required=False, use_url=True)
    image_2 = serializers.ImageField(required=False)
    image_3 = serializers.ImageField(required=False)
    image_4 = serializers.ImageField(required=False)
    image_5 = serializers.ImageField(required=False)
    class Meta:
        model = Post
        fields = '__all__'




