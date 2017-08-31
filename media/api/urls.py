from rest_framework import routers

from .viewsets import MediaItemViewSet


router = routers.SimpleRouter()
router.register(r'media-items', MediaItemViewSet, base_name='media-items')

urlpatterns = router.urls
