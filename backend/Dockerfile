FROM node:22.14-alpine

# Set working directory
WORKDIR /

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port
EXPOSE 5001 

# Start servera
CMD ["npm", "start"]