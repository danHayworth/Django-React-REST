from django.db import models
from django.conf import settings


class Post(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(max_length=500)
    image = models.ImageField(upload_to='images/')
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.title


class PostImages(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, default=None, related_name='images')
    images = models.FileField(upload_to='images/')

    def __str__(self):
        return self.post.title
