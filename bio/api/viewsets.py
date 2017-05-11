from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from ..models import BioParagraph
from .serializers import BioParagraphSerializer


class BioParagraphViewSet(ListModelMixin, GenericViewSet):
    queryset = BioParagraph.objects.all()
    serializer_class = BioParagraphSerializer
