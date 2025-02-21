#!/bin/bash

# Ensure the script exits on any error
set -e

# Run the build command
pnpm run build

# Get the current repository URL
REPO_URL=$(git config --get remote.origin.url)

# Create a temporary directory
TEMP_DIR=$(mktemp -d)

# Copy the dist folder to the temporary directory
cp -r dist/* "$TEMP_DIR"

# Navigate to the temporary directory
cd "$TEMP_DIR"

# Initialize a new Git repository
git init

# Add the remote repository
git remote add origin "$REPO_URL"

# Checkout to the deploy branch
git checkout -b deploy

# Add all files
git add .

# Commit the changes
git commit -m "Deploying dist folder"

# Force push to the deploy branch
git push -f origin deploy

# Clean up the temporary directory
rm -rf "$TEMP_DIR"

echo "Deployment to the deploy branch completed successfully."
