#!/bin/bash

# Stop Docker containers and remove volumes
# Stop and remove backend containers and associated volumes
docker-compose down -v

echo "All services stopped and volumes removed."
