# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-09-04 16:30
from __future__ import unicode_literals

from django.db import migrations
import image_cropping.fields


class Migration(migrations.Migration):

    dependencies = [
        ('press', '0003_auto_20170730_2040'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='cropping',
            field=image_cropping.fields.ImageRatioField(b'image', '550x330', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping'),
        ),
    ]
