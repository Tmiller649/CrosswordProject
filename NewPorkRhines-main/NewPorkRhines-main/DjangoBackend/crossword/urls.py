
from django.urls import path
from .views import word_list

urlpatterns = [
    path('difficulty/', word_list)

]