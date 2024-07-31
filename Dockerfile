# Dockerfile
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./ package-lock.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start the Vite dev server
CMD ["npm", "run", "dev"]