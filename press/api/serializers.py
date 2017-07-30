from rest_framework import serializers
from image_cropping.utils import get_backend

from ..models import Show, Quote


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'


class ShowSerializer(serializers.ModelSerializer):
    quotes = QuoteSerializer(many=True)
    image = serializers.SerializerMethodField()

    def get_image(self, instance):
        return get_backend().get_thumbnail_url(
            instance.image,
            {
                'size': (540, 450),
                'box': instance.cropping,
                'crop': True,
                'detail': True,
            },
        )

    class Meta:
        model = Show
        fields = ('id', 'name', 'position', 'modified', 'created', 'image', 'quotes')
