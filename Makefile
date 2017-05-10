all: build

activate:
	. ./venv/bin/activate

build: activate install migrate run

collect-static:
  ./manage.py collectstatic --no-input

compile-assets:
	./node_modules/.bin/webpack --config webpack.bundle.config.js

deploy: activate install migrate collect-static compile-assets

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
