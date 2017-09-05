import dj_database_url

from .base import *


DEBUG = False

SECRET_KEY = os.environ['SECRET_KEY']

ALLOWED_HOSTS = os.environ['ALLOWED_HOSTS']

# Change 'default' database configuration with $DATABASE_URL (for Heroku).
DATABASES['default'] = dj_database_url.config(conn_max_age=500)
