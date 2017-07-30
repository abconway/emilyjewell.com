from django.contrib import admin

from image_cropping import ImageCroppingMixin

from .models import Show, Quote


@admin.register(Show)
class ShowAdmin(ImageCroppingMixin, admin.ModelAdmin):
    pass


@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    pass
