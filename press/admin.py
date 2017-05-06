from django.contrib import admin

from .models import Show, Quote


@admin.register(Show)
class ShowAdmin(admin.ModelAdmin):
    pass


@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    pass
