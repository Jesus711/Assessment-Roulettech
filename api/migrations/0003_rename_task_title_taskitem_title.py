# Generated by Django 4.2.15 on 2024-08-23 02:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_taskitem_completed_at'),
    ]

    operations = [
        migrations.RenameField(
            model_name='taskitem',
            old_name='task_title',
            new_name='title',
        ),
    ]
