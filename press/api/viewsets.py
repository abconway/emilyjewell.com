from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from ..models import Show, Quote
from .serializers import ShowSerializer, QuoteSerializer


class QuoteViewSet(ListModelMixin, GenericViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class ShowViewSet(ListModelMixin, GenericViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowSerializer
