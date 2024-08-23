from django.urls import path
from .views import task_list_view, project_tasks_list_view, create_task_view, delete_task_view

urlpatterns = [
    path('tasks/', task_list_view, name='tasks'),
    path('tasks/create/', create_task_view, name='task-create'),
    path('tasks/delete/<int:id>/', delete_task_view, name='task-delete'),
    path('project-tasks/', project_tasks_list_view, name="project-tasks")
]
