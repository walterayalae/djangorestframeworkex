from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255,unique=True)
    date = models.DateTimeField(auto_now_add=True)
    tags = models.TextField(max_length=1000,blank=True)
    article = models.TextField(max_length=1500,blank=True)
    author = models.ForeignKey(User,null=True,blank=True)
