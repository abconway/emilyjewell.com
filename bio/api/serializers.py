from rest_framework import serializers

from ..models import BioParagraph


class BioParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = BioParagraph
        fields = ('id', 'title', 'description', 'position', 'modified', 'created')
