from django.db import models

from django_extensions.db.models import TimeStampedModel, TitleSlugDescriptionModel


class Resume(TitleSlugDescriptionModel, TimeStampedModel):
    pdf = models.FileField(blank=True, upload_to='uploaded_files')
    active = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.active:
            queryset = type(self).objects.filter(active=True)
            if self.pk:
                queryset = queryset.exclude(pk=self.pk)
            queryset.update(active=False)

        super(Resume, self).save(*args, **kwargs)

    def __str__(self):
        return 'Resume: {}'.format(self.title)
