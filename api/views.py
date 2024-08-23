from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpResponseRedirect
from django.urls import reverse

from .models import TaskItem
import datetime

# Create your views here.
def task_list_view(request):
    # tasks = TaskItem.objects.all()
    
    sample_tasks = { 
        "Tasks" : [
            {
                "title": "Buy groceries", 
                "description": "Milk, Bread, Eggs", 
                #"completed_at": None
            },
            {
                "title": "Finish project report", 
                "description": "Complete the final draft and submit it", 
                #"completed_at": datetime.datetime.now() - datetime.timedelta(days=2)
            },
            {
                "title": "Call plumber", 
                "description": "Fix the leaking sink", 
                #"completed_at": None
            },
            {
                "title": "Book flight tickets", 
                "description": "Round trip to New York", 
                #"completed_at": datetime.datetime.now() - datetime.timedelta(days=1)
            },
            {
                "title": "Read a book", 
                "description": "Read 'Django for Beginners'", 
                #"completed_at": datetime.datetime.now() - datetime.timedelta(days=3)
            },
        ]
    }
    
    sample_tasks = { "Tasks" : []}
    
    return JsonResponse(sample_tasks)


def create_task_view(request):
    title = request.GET.get('title')
    description = request.GET.get('description')
    print(title, description)
    task = TaskItem.objects.create(title=title, description=description)
    response_data = {
        'message': 'Task created successfully',
        'task': {
            'id': task.id,
            'title': task.title,
            'description': task.description,
            'created_at': task.created_at,
            #'completed_at': task.completed_at
        }
    }
    return JsonResponse(response_data, status=200)


def delete_task_view(request):
    task = get_object_or_404(TaskItem, id=id)
    task.delete()
    response_data = {
            'message': 'Task deleted',
    }
    return JsonResponse(response_data, status=200)


def project_tasks_list_view(request):
    
    tasks = {
        "Project" : [
            {
                "title" : "Create Backend for assessment",
                "description" : "Create a backend server using Python Django with at least two api endpoints",
                "created_at" : datetime.date.today(),
                #"completed_at" : None
            },            
            {
                "title" : "Create Frontend for assessment",
                "description" : "Create a frontend server using React.js that displays components",
                "created_at" : datetime.date.today(),
                #"completed_at" : None
            },
            {
                "title" : "Refresh Django",
                "description" : "Review Django and learn how to setup backend app",
                "created_at" : datetime.date.today(),
                #"completed_at" : None
            },            
            {
                "title" : "Add proxy to backend server",
                "description" : "",
                "created_at" : datetime.date.today(),
                #"completed_at" : None
            },            
            {
                "title" : "Create Model to store tasks",
                "description" : "Using Django, setup a model of TaskItem that has the properties such as Title, description, date created, and date completed",
                "created_at" : datetime.date.today(),
                #"completed_at" : None
            },
        ]
    }
    
    return JsonResponse(tasks)