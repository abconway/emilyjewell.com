from rest_framework.viewsets import ModelViewSet

from ..models import NewsItem
from .serializers import NewsItemSerializer


class NewsItemViewSet(ModelViewSet):
    queryset = NewsItem.objects.all()
    serializer_class = NewsItemSerializer
