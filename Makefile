# Using for deploy purpose
run_all_service:
	docker-compose up --build
stop_all_service:
	docker-compose down

# Using for debugging purpose
run_recipe_service:
	cd recipe-service && docker-compose up --build
run_chef_service:
	cd chef-service && docker-compose up --build
run_review_service:
	cd review-service && docker-compose up --build

stop_recipe_service:
	cd recipe-service && docker-compose down
stop_chef_service:
	cd chef-service && docker-compose down
stop_review_service:
	cd review-serviec && docker-compose down