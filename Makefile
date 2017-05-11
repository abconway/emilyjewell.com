all: build

build: venv install migrate run

collect-static:
	./venv/bin/python manage.py collectstatic --no-input

compile-assets:
	./node_modules/.bin/webpack --config webpack.bundle.config.js

deploy: venv install migrate collect-static compile-assets

drop-db:
	rm db.sqlite3

install:
	npm install
	./venv/bin/pip install -U -r requirements.txt

migrate:
	./venv/bin/python manage.py migrate

recreate-db: drop-db migrate

run:
	./venv/bin/honcho start -f Procfile.dev

venv:
	/usr/local/bin/virtualenv venv

PRODUCTION:
	export DJANGO_SETTINGS_MODULE=emilyjewell.settings.PRODUCTION

DEVELOPMENT:
	export DJANGO_SETTINGS_MODULE=emilyjewell.settings.DEVELOPMENT

TESTING:
	export DJANGO_SETTINGS_MODULE=emilyjewell.settings.TESTING
