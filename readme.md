### A basic API created using NodeJS, Express, Mongoose and MongoDB.
### API is based on RESTful Architecture, and supports CRUD Operation using Different HTTP Verbs.
### RESTFul Routing

**GET**: http://localhost:3000/api/employee - For Listing Employees (Sorted in ascending order using firstName.)

**GET**: https://localhost:3000/api/employee/:id - show an employee with a particular ID.

**POST**: http://localhost:3000/api/employee - For Creating new employee.

**PATCH**: http://localhost:3000/api/employee/:id - for updating an employee.

**DELETE**: http://localhost:3000/api/employee/:id - for deleting employee document using ID.

### MongoDB Document Structure
So there will be collection in MongoDb :-  employees
And structure for every employee
{
    “_id” : “1”
    “firstName” :  “Abc”,
    “lastName” :  “Singh”,
    “dob” : ”2000/01/01”,
    “department”:”Marketing”,
    “basicSalary”: 50000,
    “designation” : “Marketing manager”
}

### API RESPONSES
#### 1. Add/Create employee API response
```
HTTP Code: 200
{
    "responseCode": 1,
    "responseMessage": "Employee created successfully",
    "responseData": {
        "_id": "62b447e1a67e3e7d15ebb5db",
        “firstName” :  “Abc”,
        “lastName” :  “Singh”,
        “dob” : ”2000/01/01”,
        “department”:”Marketing”,
        “basicSalary”: 50000,
        “designation” : “Marketing manager”
    }
}
```

#### 2. Edit/Update employee API response
```
HTTP Code: 200
{
    "responseCode": 1,
    "responseMessage": "Employee updated successfully",
    "responseData": {
        "_id": "62b447e1a67e3e7d15ebb5db",
        “firstName” :  “Abc”,
        “lastName” :  “Singh”,
        “dob” : ”2000/01/01”,
        “department”:”Marketing”,
        “basicSalary”: 50000,
        “designation” : “Marketing manager”
    }
}
```

#### 3. Delete employee API response
```	
HTTP Code: 200
{
    "responseCode": 1,
    "responseMessage": "Employee deleted successfully",
    "responseData": {}
}
```

#### 4. Employee list API response

Data sort by: firstName (ascending)
```
HTTP Code: 200
{
    "responseCode": 1,
    "responseMessage": "Department list retrieved",
    "responseData": {
        "total": 3,
        "employees": [
            {
        "_id": "62b447e1a67e3e7d15ebb5db",
        “firstName” :  “Abc”,
        “lastName” :  “Singh”,
        “dob” : ”2000/01/01”,
        “department”:”Marketing”,
        “basicSalary”: 50000,
        “designation” : “Marketing manager”
      },
      {
        "_id": "62b447e1a67e3e7d15ebb5fg",
        “firstName” :  “CDE”,
        “lastName” :  “Singh”,
        “dob” : ”2000/01/01”,
        “department”:”Project Management”,
        “basicSalary”: 50000,
        “designation” : “Project manager”
      },
      {
        "_id": "62b447e1a67e3e7d15eb5ff",
        “firstName” :  “DGH”,
        “lastName” :  “Singh”,
        “dob” : ”2000/01/01”,
        “department”:”Marketing”,
        “basicSalary”: 50000,
        “designation” : “Marketing manager”
      }
    ]
    }
}
```
### GET request for 'List All Employees' shows all the employees in the database in a sorted order which is based on firstName. That's why i've also created Indexes for firstName.

### Never thought it'll get attention, but as I am new to creating APIs, any suggestion for better error handling or ideas for new features or better way of writing the code will be appreciated.
