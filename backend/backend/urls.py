from django.contrib import admin
from django.urls import path, include
from posts.views import PostViewSet as PostView
from users.views import UserViewSet as UserView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/users', UserView)
router.register(r'api/posts', PostView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
