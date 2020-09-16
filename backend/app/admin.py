from django.contrib import admin
from .models import Project

# Register your models here.

admin.site.register(Project)

# class Project(admin.ModelAdmin):
#     fields = [is_finish]

# admin.site.register(Project,Project)