from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from ..models import MediaItem
from .serializers import MediaItemSerializer


class MediaItemViewSet(ListModelMixin, GenericViewSet):
    queryset = MediaItem.objects.all()
    serializer_class = MediaItemSerializer
