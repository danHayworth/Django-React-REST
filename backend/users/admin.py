from django.contrib import admin
from .models import CustomUser


class UserAdmin(admin.ModelAdmin):

    fields = []

admin.site.register(CustomUser, UserAdmin)


