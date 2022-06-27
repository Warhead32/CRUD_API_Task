### A basic API created using NodeJS, Express, Mongoose and MongoDB.
### API is based on RESTful Architecture, and supports CRUD Operation using Different HTTP Verbs.
### RESTFul Routing

**GET**: http://localhost:3000/api/employee - For Listing Employees (Sorted in ascending order using firstName.)

**GET**: https://localhost:3000/api/employee/:id - show an employee with a particular ID.

**POST**: http://localhost:3000/api/employee - For Creating new employee.

**PATCH**: http://localhost:3000/api/employee/:id - for updating an employee.

**DELETE**: http://localhost:3000/api/employee/:id - for deleting employee document using ID.

### GET request for 'List All Employees' shows all the employees in the database in a sorted order which is based on firstName. That's why i've also created Indexes for firstName.

### Never thought it'll get attention, but as I am new to creating APIs, any suggestion for better error handling or ideas for new features or better way of writing the code will be appreciated.
