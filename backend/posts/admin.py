from django.contrib import admin
from .models import Post, PostImages

class PostImage(admin.StackedInline):
    model = PostImages
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImage]
    fields = ['title', 'content', 'user', 'image']

admin.site.register(Post, PostAdmin)


