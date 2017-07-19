from django.contrib import admin

from image_cropping import ImageCroppingMixin

from .models import NewsItem


@admin.register(NewsItem)
class NewsItemAdmin(ImageCroppingMixin, admin.ModelAdmin):
    pass
