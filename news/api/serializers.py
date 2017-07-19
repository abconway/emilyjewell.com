from rest_framework import serializers
from image_cropping.utils import get_backend

from ..models import NewsItem


class NewsItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, instance):
        return get_backend().get_thumbnail_url(
            instance.image,
            {
                'size': (120, 100),
                'box': instance.cropping,
                'crop': True,
                'detail': True,
            },
        )

    class Meta:
        model = NewsItem
        fields = ('id', 'title', 'description', 'modified', 'created', 'image')
