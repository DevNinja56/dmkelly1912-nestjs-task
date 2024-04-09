#!/bin/bash

# This script is used to stop Docker containers and remove volumes associated with a backend service.

# Stop and remove backend containers and associated volumes
docker-compose down -v

# Display a message indicating that all services have been stopped and volumes have been removed.
echo "All services stopped and volumes removed."
