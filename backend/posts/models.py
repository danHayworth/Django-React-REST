from django.db import models
from django.conf import settings


class Post(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(max_length=500)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    image_1 = models.ImageField(upload_to='images/')
    image_2 = models.ImageField(upload_to='images/')
    image_3 = models.ImageField(upload_to='images/')
    image_4 = models.ImageField(upload_to='images/')
    image_5 = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title


