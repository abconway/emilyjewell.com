from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

from ..models import NewsItem


class NewsItemSerializer(serializers.ModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('crop', 'crop__120x100'),
        ]
    )

    class Meta:
        model = NewsItem
        fields = '__all__'
