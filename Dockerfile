# Use the official Node.js image as the base image
FROM node:22-slim AS base

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to use pnpm
RUN corepack enable

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies using pnpm
RUN pnpm install

# Set the command to run the application
CMD ["npm", "start"]