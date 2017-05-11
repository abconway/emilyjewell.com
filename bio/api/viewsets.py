from rest_framework.viewsets import ModelViewSet

from ..models import BioParagraph
from .serializers import BioParagraphSerializer


class BioParagraphViewSet(ModelViewSet):
    queryset = BioParagraph.objects.all()
    serializer_class = BioParagraphSerializer
