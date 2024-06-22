# Stage 1: Build the Angular application
FROM node:18.13.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine

# Copy the built Angular application from the previous stage
COPY --from=build /app/dist/reservation-client/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
