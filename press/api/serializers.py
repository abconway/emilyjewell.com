from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

from ..models import Show, Quote


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'


class ShowSerializer(serializers.ModelSerializer):
    quotes = QuoteSerializer(many=True)
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('crop', 'crop__550x330'),
        ]
    )

    class Meta:
        model = Show
        fields = '__all__'
