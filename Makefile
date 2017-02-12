all: build

build: install migrate run

compile-assets:
	./node_modules/.bin/webpack --config webpack.config.bundle.js

drop-db:
	rm db.sqlite3

install:
	npm install
	pip install -U -r requirements.txt

migrate:
	./manage.py migrate

recreate-db: drop-db migrate

run:
	honcho start -f Procfile.dev
