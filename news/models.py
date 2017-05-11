from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel


class NewsItem(TitleSlugDescriptionModel, TimeStampedModel):
    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return 'News: {}'.format(self.title)
