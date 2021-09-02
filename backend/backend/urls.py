from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from posts.views import PostListView, PostDetailView
from users.views import user_list, UserView, user_detail
from users.views import RegisterView, LoginView, LogoutView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


API_TITLE = 'Posts & Users API'
API_DESCRIPTION = 'A Web API for creating and viewing posts and users'
schema_view = get_schema_view(title=API_TITLE)

admin.site.site_header = 'Django & React API'
admin.site.site_title = 'Admin Portal'
admin.site.site_url = 'http://localhost:3000/'
admin.site.index_title = 'Administration'
admin.empty_value_display = '**Empty**'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', user_list),
    path('users/<int:pk>', user_detail),
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>', PostDetailView.as_view()),
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view()),
    url('docs/', include_docs_urls(title=API_TITLE, description=API_DESCRIPTION))

]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


