from django.db import models

from image_cropping import ImageRatioField
from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel


class NewsItem(TitleSlugDescriptionModel, TimeStampedModel):
    image = models.ImageField(blank=True, upload_to='images')
    cropping = ImageRatioField('image', '430x360')

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return 'News: {}'.format(self.title)
