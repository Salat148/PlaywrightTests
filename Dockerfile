# Use an official Node.js runtime as the base image
FROM mcr.microsoft.com/playwright:v1.39.0-jammy

# Set the working directory in the container
WORKDIR /app

# Install Git
RUN apt-get update && apt-get install -y git

# Clone the repository
RUN git clone https://github.com/Salat148/PlaywrightTests .

# Replace values in the .env file
ARG URL
ARG PASSW
ARG USERNAME
RUN sed -i "s#URL=.*#URL=$URL#g" .env
RUN sed -i "s#PASSW=.*#PASSW=$PASSW#g" .env
RUN sed -i "s#USERNAME=.*#USERNAME=$USERNAME#g" .env

# Install project dependencies
RUN npm install

# Run your Playwright tests and generate a report
CMD ["npx", "playwright", "test", "--reporter=html"]
