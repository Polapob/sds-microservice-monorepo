run_recipe_service:
	cd recipe-service && docker-compose up --build
stop_recipe_service:
	cd recipe-service && docker-compose down

run_chef_service:
	cd chef-service && docker-compose up --build
stop_chef_service:
	cd chef-service && docker-compose down