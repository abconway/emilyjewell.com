from django.contrib import admin

from .models import BioParagraph


@admin.register(BioParagraph)
class BioParagraphAdmin(admin.ModelAdmin):
    pass
