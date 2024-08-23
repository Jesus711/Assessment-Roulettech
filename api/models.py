from django.db import models

# Create your models here.
class TaskItem(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    #completed_at = models.DateTimeField(null=True, blank=True)
    
    
    def __str__(self):
        return self.title + "\n" + self.description