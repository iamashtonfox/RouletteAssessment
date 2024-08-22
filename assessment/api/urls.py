from django.contrib import admin
from django.urls import path,include
from postIt.views import postItViewset
from rest_framework.routers import DefaultRouter

router=DefaultRouter()

router.register('posts',postItViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
