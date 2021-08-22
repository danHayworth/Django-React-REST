from django.contrib import admin
from django.urls import path, include
from posts.views import PostViewSet as PostView
from users.views import UserViewSet as UserView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)



router = routers.DefaultRouter()
router.register(r'api/v1/users', UserView)
router.register(r'api/v1/posts', PostView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
