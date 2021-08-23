from django.contrib import admin
from django.urls import path, include
from posts.views import PostViewSet as PostView
from users.views import UserViewSet, UserView
from users.views import RegisterView, LoginView, LogoutView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'api/v1/users', UserViewSet)
router.register(r'api/v1/posts', PostView)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view())

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
