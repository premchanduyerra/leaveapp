# Use the official Maven image to build the application
FROM maven:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project's POM file
COPY pom.xml .

# Download the Maven dependencies
RUN mvn dependency:go-offline

# Copy the application source code
COPY src ./src

# Build the application
RUN mvn clean package

# Use the official Tomcat base image for deployment
FROM tomcat:latest

# Remove the default Tomcat webapps directory
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the WAR file from the Maven build stage to the Tomcat webapps directory
COPY --from=build /app/target/leaveapp.war /usr/local/tomcat/webapps/leaveapp.war

# Expose the default Tomcat port
EXPOSE 8080

# Start Tomcat when the Docker container starts
CMD ["catalina.sh", "run"]
