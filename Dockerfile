# STAGE 1
FROM node:18.17.1 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the project
RUN npm run build

# STAGE 2
FROM node:18.17.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies using npm
RUN npm install --production

# Copy the built application from the builder stage to the working directory
COPY --from=builder /app/dist ./dist

# Expose port 3001 for the application
EXPOSE 3001

# Start the application using the built files
CMD [ "node", "dist/src/main.js" ]
