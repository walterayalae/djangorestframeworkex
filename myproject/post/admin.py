from django.contrib import admin
from post.models import Post
# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_field = ['title']

admin.site.register(Post, PostAdmin)
