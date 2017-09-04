from rest_framework import routers

from .viewsets import ResumeViewSet


router = routers.SimpleRouter()
router.register(r'resumes', ResumeViewSet, base_name='resumes')

urlpatterns = router.urls
