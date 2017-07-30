from django.db import models

from image_cropping import ImageRatioField
from django_extensions.db.models import TimeStampedModel


class Show(TimeStampedModel):
    name = models.CharField(max_length=256)
    position = models.IntegerField()
    image = models.ImageField(blank=True, upload_to='uploaded_images')
    cropping = ImageRatioField('image', '540x450')

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
