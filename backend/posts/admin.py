from django.contrib import admin
from .models import Post, ExtraImages

class PostImage(admin.StackedInline):
    model = ExtraImages
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImage]
    fields = ['title', 'content', 'user', 'image']

admin.site.register(Post, PostAdmin)


