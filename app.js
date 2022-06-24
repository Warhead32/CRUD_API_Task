const express = require("express");
const mongoose = require("mongoose");

const app = express();

////////////////////////
// MiddleWares
app.use(express.json());

//////////////////////////////////
// Connection to database.
const mongoPort = 27017;
const url = `mongodb://127.0.0.1:${mongoPort}/AlienDB`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database.`))
  .catch((err) => console.error(err));

/////////////////////////
// Schema and Model.
const empSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

// Creating Indexes
empSchema.index({ firstName: 1 });

// Model
const Employee = mongoose.model("Employee", empSchema);

//////////////////////
// Routing
// Root Route for getting All Employees
app.get("/api/employee", async (req, res) => {
  try {
    const data = await Employee.find({}).sort({
      firstName: 1,
    });
    res.status(200).json({
      responseCode: 1,
      responseMessage: "Department List Received.",
      responseData: {
        total: data.length,
        employees: data,
      },
    });
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

// Post for creating new Employee
app.post("/api/employee", async (req, res) => {
  try {
    const employee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: req.body.dob,
      department: req.body.department,
      basicSalary: req.body.basicSalary,
      designation: req.body.designation,
    });

    // Save also returns the data which is being saved, so lets show the user that data.
    const data = await employee.save();
    res.status(200).json({
      responseCode: 1,
      responseMessage: "Employee Created Successfully.",
      responseData: data,
    });
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

// Get a particular Employee
app.get("/api/employee/:id", async (req, res) => {
  try {
    const data = await Employee.findById(req.params.id);
    if (data) res.status(200).json(data);
  } catch (err) {
    res.send(`Error: ${err}`);
  }
});

// Update employee details using ID
app.patch("/api/employee/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      responseCode: 1,
      responseMessage: "Employee Updated Successfully.",
      responseData: updatedEmployee,
    });
  } catch (err) {
    console.error(err);
  }
});

app.delete("/api/employee/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      responseCode: 1,
      responseMessage: "Employee Deleted Successfully.",
      responseData: deletedEmployee,
    });
  } catch (err) {
    console.error(err);
  }
});

// For invalid routes
app.get("*", (req, res) => {
  res.status(404).send("404! This is an invalid URL.");
});

// Starting the server
app.listen(3000, () => console.log("Server started at Port 3000."));
