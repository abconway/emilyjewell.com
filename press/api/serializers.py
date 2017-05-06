from rest_framework import serializers

from ..models import Show, Quote


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'


class ShowSerializer(serializers.ModelSerializer):
    quotes = QuoteSerializer(many=True)

    class Meta:
        model = Show
        fields = '__all__'
