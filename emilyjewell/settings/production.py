import dj_database_url

from .base import *


DEBUG = False

SECRET_KEY = os.environ['SECRET_KEY']

ALLOWED_HOSTS = os.environ['ALLOWED_HOSTS'].split(',')

# Change 'default' database configuration with $DATABASE_URL (for Heroku).
DATABASES['default'] = dj_database_url.config(conn_max_age=500)

INSTALLED_APPS += [
    'storages',
]

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = os.environ['AWS_STORAGE_BUCKET_NAME']
