# Use a base image that includes Node.js
FROM node:18-alpine

# Update packages in the Alpine Linux
RUN apk update

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY dist /app

# Copy the package.json into the container at /app
COPY package*.json /app

# Copy the environment file into the container at /app
COPY .env /app

# Install the dependencies
RUN npm install --omit=dev

# Define the command to run the app using PM2
CMD ["node", "src/main.js"]

# Make port 3001 available to the world outside this container
EXPOSE 3001