from rest_framework import routers

from .viewsets import NewsItemViewSet


router = routers.SimpleRouter()
router.register(r'news-items', NewsItemViewSet, base_name='news-items')

urlpatterns = router.urls
