from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from posts.views import PostViewSet as PostView
from users.views import user_list, UserView, user_detail
from users.views import RegisterView, LoginView, LogoutView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls


API_TITLE = 'Posts & Users API'
API_DESCRIPTION = 'A Web API for creating and viewing posts and users'
schema_view = get_schema_view(title=API_TITLE)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/users', user_list),
    path('api/v1/users/<int:pk>', user_detail),
    path('api/v1/posts', PostView),
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    url('docs/', include_docs_urls(title=API_TITLE, description=API_DESCRIPTION))

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
