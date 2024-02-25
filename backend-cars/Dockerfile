# Use the official Node.js 14 image as a parent image
FROM node:21

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3001 for the server
EXPOSE 3001

# Command to run the server
CMD [ "node", "server.js" ]