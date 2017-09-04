from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import GenericViewSet

from ..models import Resume
from .serializers import ResumeSerializer


class ResumeViewSet(ListModelMixin, GenericViewSet):
    queryset = Resume.objects.filter(active=True)
    serializer_class = ResumeSerializer
