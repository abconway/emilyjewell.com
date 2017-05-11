from django.db import models
from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel


class BioParagraph(TitleSlugDescriptionModel, TimeStampedModel):
    position = models.IntegerField()

    class Meta:
        ordering = ('position',)

    def __str__(self):
        return 'Bio Paragraph (Position: {}): {}'.format(self.position, self.title)
