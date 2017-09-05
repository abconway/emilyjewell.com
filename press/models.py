from django.db import models

from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel
from versatileimagefield.fields import VersatileImageField, PPOIField


class Show(TimeStampedModel):
    name = models.CharField(max_length=256)
    position = models.IntegerField()
    image = VersatileImageField(
        'Image',
        blank=True,
        upload_to='images',
        ppoi_field='ppoi',
    )
    ppoi = PPOIField('Image PPOI')

    class Meta:
        ordering = ('position',)

    def __str__(self):
        return 'Show (Position: {}): {}'.format(self.position, self.name)


class Quote(TimeStampedModel):
    show = models.ForeignKey(Show, on_delete=models.CASCADE, related_name='quotes')
    author = models.CharField(max_length=256)
    publication = models.CharField(max_length=512)
    body = models.TextField()
    url = models.URLField()
    position = models.IntegerField()

    class Meta:
        ordering = ('position',)

    def __str__(self):
        return 'Quote (Show: {} | Position: {}): {}'.format(
            self.show.name,
            self.position,
            self.author,
        )
