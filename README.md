# My React App

## Description
This is a React application containerized using Docker. Follow the steps below to build and run the application locally using Docker.

## Prerequisites
Make sure you have the following installed on your system and running:
- [Docker](https://www.docker.com/)

## Commands to Run

### Step 1: Build the Docker Image
Run the following command to build the Docker image for the application:
```bash
docker build -t my-react-app .
```

### Step 2: Run the Docker Container
Use the following command to start the application in a Docker container:
```bash
docker run -p 3000:3000 my-react-app
```

### Step 3: Access the Application
Once the container is running, open your browser and navigate to:
```
http://localhost:3000
```

## Notes
- Ensure port 3000 is not being used by another application on your system.
- You can stop the container by pressing `Ctrl+C` in the terminal where the container is running or by using the `docker stop` command followed by the container ID.


