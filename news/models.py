from django.db import models
from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel


class NewsItem(TitleSlugDescriptionModel, TimeStampedModel):
    class Meta:
        ordering = ('-created',)
