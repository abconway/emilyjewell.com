from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel
from versatileimagefield.fields import VersatileImageField, PPOIField


class NewsItem(TitleSlugDescriptionModel, TimeStampedModel):
    image = VersatileImageField(
        'Image',
        blank=True,
        upload_to='images',
        ppoi_field='ppoi',
    )
    ppoi = PPOIField('Image PPOI')

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return 'News: {}'.format(self.title)
