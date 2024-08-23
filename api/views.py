from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import TaskItem


# Create your views here.
def task_list_view(request):
    if request.method == "GET":
        try:
            tasks = TaskItem.objects.all()
            
            data = []
            for task in tasks:
                item  = {
                    'id': task.id,
                    'title': task.title,
                    'description': task.description,
                    'created_at': task.created_at.isoformat(),
                }
                data.append(item)
            
            return JsonResponse({"Tasks" : data}, safe=False)

        except Exception as e:
            return JsonResponse({'Error': str(e)}, status=500)
    else:
        return JsonResponse({'Error': 'Invalid Request'}, status=405)


@csrf_exempt
def create_task_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body) 
            
            title = data.get('title')
            description = data.get('description', '')  # Provide a default empty string for description

            # Create and save the TaskItem object
            task = TaskItem(title=title, description=description)
            task.save()

            response_data = {
                'message': 'Task created successfully!',
                'task_id': task.id,
                'title': task.title,
                'description': task.description,
                'created_at': task.created_at,
            }

            return JsonResponse(response_data, status=201)

        except Exception as e:
            return JsonResponse({'Error': str(e)}, status=500)
    else:
        return JsonResponse({'Error': 'Invalid Request'}, status=405)


@csrf_exempt
def delete_task_view(request, id):
    if request.method == "DELETE":
        try:
            print("ID", id)
            task = get_object_or_404(TaskItem, id=id)
            task.delete()
            response_data = {
                    'message': 'Task deleted',
            }
            return JsonResponse(response_data, status=200)

        except Exception as e:
            return JsonResponse({'Error': str(e)}, status=500)
    else:
        return JsonResponse({'Error': 'Invalid Request'}, status=405)


def project_tasks_list_view(request):
    
    # Hardcoded tasks of what I needed to do for this assessment
    tasks = {
        "Project" : [
            {
                "title" : "Create Backend for assessment",
                "description" : "Create a backend server using Python Django with at least two api endpoints",
                "created_at" : "2024-08-22"
            },            
            {
                "title" : "Create Frontend for assessment",
                "description" : "Create a frontend server using React.js that displays components",
                "created_at" : "2024-08-22"
            },
            {
                "title" : "Refresh Django",
                "description" : "Review Django and learn how to setup backend app",
                "created_at" : "2024-08-22"
            },            
            {
                "title" : "Add proxy to backend server",
                "description" : "",
                "created_at" : "2024-08-22"
            },            
            {
                "title" : "Create Model to store tasks",
                "description" : "Using Django, setup a model of TaskItem that has the properties such as Title, description, date created, and date completed",
                "created_at" : "2024-08-22"
            },
        ]
    }
    
    return JsonResponse(tasks)