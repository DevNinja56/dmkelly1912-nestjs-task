#!/bin/bash

# Deploy the Backend Application
# Build and run the backend Docker container
docker-compose up -d

# Pause for services to start (adjust the sleep duration as needed)
sleep 5

# Display service access information
echo "Backend Application Deployed Successfully!"
echo "------------------------------------------"
echo "Backend is running at http://localhost:3001/api"
