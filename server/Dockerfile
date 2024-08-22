# Define the Node.js version as an argument
ARG NODE_VERSION=22

# Use a single FROM instruction for both stages
FROM node:${NODE_VERSION}-alpine

# Install nodemon globally in the base image
RUN npm i -g nodemon

# Set the working directory
WORKDIR /app

# Copy only the package files
COPY package*.json ./

# Install dependencies with caching
RUN --mount=type=cache,target=/app/.npm \
    npm ci --omit=dev

# Copy the rest of the code
COPY . .

# Use the node user for better security
USER node

# Expose the port
EXPOSE 5005

# Run the command to start the application
CMD ["npm", "run", "start"]
