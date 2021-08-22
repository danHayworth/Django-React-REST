from django.contrib import admin
from django.urls import path, include
from posts.views import PostViewSet as PostView
from users.views import UserViewSet as UserView
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register(r'api/v1/users', UserView)
router.register(r'api/v1/posts', PostView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_View()),
    path('api/token/refresh', TokenRefreshView.as_View()),
]
