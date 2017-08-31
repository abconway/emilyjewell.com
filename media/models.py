from django.db import models

from django_extensions.db.models import TimeStampedModel


class MediaItem(TimeStampedModel):
    description = models.TextField()
    video_url = models.URLField()
    position = models.IntegerField()

    class Meta:
        ordering = ('position',)

    def __str__(self):
        return 'Media (Position: {}): {}'.format(self.position, self.description)
