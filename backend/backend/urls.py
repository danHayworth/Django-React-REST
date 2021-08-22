from django.contrib import admin
from django.urls import path, include
from posts.views import PostViewSet as PostView
from users.views import UserViewSet as UserView
from rest_framework import routers
from rest_framework_swagger.views import get_swagger_view
from django.conf import settings
from django.conf.urls.static import static

schema_view = get_swagger_view(title="News Contents API")

router = routers.DefaultRouter()
router.register(r'api/v1/users', UserView)
router.register(r'api/v1/posts', PostView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
