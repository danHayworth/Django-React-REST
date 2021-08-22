from django.db import models
from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField(max_length=500)
    image = models.ImageField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE
    )
