# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g serve

# Copy the rest of the application code
COPY . .

RUN npm install
# Build the React application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build"]
