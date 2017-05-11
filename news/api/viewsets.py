from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from ..models import NewsItem
from .serializers import NewsItemSerializer


class NewsItemViewSet(ListModelMixin, GenericViewSet):
    queryset = NewsItem.objects.all()
    serializer_class = NewsItemSerializer
