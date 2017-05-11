from rest_framework import routers

from .viewsets import BioParagraphViewSet


router = routers.SimpleRouter()
router.register(r'bio-paragraphs', BioParagraphViewSet, base_name='bio-paragraphs')

urlpatterns = router.urls
