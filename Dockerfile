# Pull from the official Docker image for Node.js
FROM node:18

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Update npm to the latest version
RUN npm install -g npm@latest

COPY . .

# Install dependencies
RUN npm install

CMD ["npm", "run", "dev"]
#CMD ["bash", "-c", "while true; do echo Docker is running...; sleep 100; done"]