from rest_framework.viewsets import ModelViewSet

from ..models import Show, Quote
from .serializers import ShowSerializer, QuoteSerializer


class QuoteViewSet(ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer


class ShowViewSet(ModelViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowSerializer
