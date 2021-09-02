from django.contrib import admin
from .models import CustomUser


class UserAdmin(admin.ModelAdmin):

    fields = []
    class Media:
        css = {
            'all': ('backend/media/css/admin.css',)
        }


admin.site.register(CustomUser, UserAdmin)
