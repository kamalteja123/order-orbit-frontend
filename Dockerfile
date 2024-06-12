FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build"]
