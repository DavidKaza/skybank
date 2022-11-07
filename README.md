# Skynet

## Project 2 - Skybank

This online banking application allows you to perform features associated with online banking from opening accounts to sending and tracking money between accounts.

### Back-end: Java

The Maven Java project is located in the project2 file with all required dependencies found within the pom.xml file within the folder

* To connect to your databse using the JDBC implemention
  * Set your databse url, username, and password to your local database
  
* Starting implementation of the Spring framework can be found within the project2data folder
  * In the application.yml file set the datasources
    * url
    * username
    * password
    * driver
  * Hibernate
    * SQL dialect

### Back-end: PostgreSQL Database

Postgres database was utilized for this project with the script containing all that is required for the set up of the database in the file project2sql.

### Front-end: React TS

The front end consists of a React TypeScript application and is found in src folder of the project.

Run ```npm install``` first to get all the neccessary libraries and modules

Then to run the React application use ```npm start```

