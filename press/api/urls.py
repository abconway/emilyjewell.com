from rest_framework import routers

from .viewsets import ShowViewSet, QuoteViewSet


router = routers.SimpleRouter()
router.register(r'shows', ShowViewSet, base_name='shows')
router.register(r'quotes', QuoteViewSet, base_name='quotes')

urlpatterns = router.urls
