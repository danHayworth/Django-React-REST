from django.db import models
from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(max_length=500)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    image_1 = models.FileField(upload_to='images/', blank=True)
    image_2 = models.FileField(upload_to='images/', blank=True)
    image_3 = models.FileField(upload_to='images/', blank=True)
    image_4 = models.FileField(upload_to='images/', blank=True)
    image_5 = models.FileField(upload_to='images/', blank=True)

    def __str__(self):
        return self.title


