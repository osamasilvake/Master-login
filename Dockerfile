# Use Node.js 22 Alpine image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json /app
RUN yarn install --silent

# Copy all files from the current directory into the container
COPY . .

# Build the React app for production
RUN yarn build

# Expose the port on which the app will run
EXPOSE 5173

# Run the build version of the app
CMD ["yarn", "build"]
