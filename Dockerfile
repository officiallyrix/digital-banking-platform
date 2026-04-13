# Dockerfile for Node.js Banking Backend Application

# Use official Node.js LTS (Long Term Support) version as a base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the application port (replace 3000 with your application port if different)
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]