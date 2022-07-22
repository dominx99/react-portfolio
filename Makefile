up:
	@docker-compose up -d --build

down:
	@docker-compose down

restart: down up

build:
	@docker-compose build

run:
	@docker-compose exec nodejs npm run start
