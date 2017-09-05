all: build

admin:
	DJANGO_SETTINGS_MODULE=emilyjewell.settings.development ./venv/bin/python manage.py createsuperuser

build: venv install compile-assets migrate run

collect-static:
	DJANGO_SETTINGS_MODULE=emilyjewell.settings.development ./venv/bin/python manage.py collectstatic --no-input

collect-static-uat:
	DJANGO_SETTINGS_MODULE=emilyjewell.settings.uat SECRET_KEY=none ALLOWED_HOSTS='[*]' ./venv/bin/python manage.py collectstatic --no-input

collect-static-production:
	DJANGO_SETTINGS_MODULE=emilyjewell.settings.production SECRET_KEY=none ALLOWED_HOSTS='[*]' ./venv/bin/python manage.py collectstatic --no-input

compile-assets:
	./node_modules/.bin/webpack --config webpack.config.js

compile-assets-uat:
	NODE_ENV=uat ./node_modules/.bin/webpack --config webpack.config.js

compile-assets-production:
	NODE_ENV=production ./node_modules/.bin/webpack --config webpack.config.js

drop-db:
	rm db.sqlite3

install:
	npm install
	./venv/bin/pip install -U -r requirements.txt

migrate:
	DJANGO_SETTINGS_MODULE=emilyjewell.settings.development ./venv/bin/python manage.py migrate

recreate-db: drop-db migrate

run:
	DJANGO_SETTINGS_MODULE=emilyjewell.settings.development heroku local web

venv:
	/usr/local/bin/virtualenv venv
