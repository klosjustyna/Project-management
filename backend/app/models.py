from django.db import models

# Create your models here.

class Project(models.Model):
    id_project = models.AutoField(primary_key=True)
    name = models.CharField( max_length=20)
    deadline = models.DateTimeField()
    sallary = models.IntegerField()
    is_finish = models.BooleanField()
    id_client = models.IntegerField()
    id_worker = models.IntegerField()

    # def show_all_projects(self):
    #     return Project.objects.all().values('name')
    
    

# name', 'deadline', 'idClient', 'sallary', 'idWorker']