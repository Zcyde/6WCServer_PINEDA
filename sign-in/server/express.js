// PINEDA, Eldrin Josh P.
// WD-302


import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';


mongoose.connect("mongodb://127.0.0.1:27017/schoolDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


const studentSchema = new mongoose.Schema({
    studentID: { type: String, required: true },
    firstName: String,
    lastName: String,
    section: String,
});


const Student = mongoose.model("Student", studentSchema);


const adminSchema = new mongoose.Schema({
    adminID: { type: String, required: true },
    firstName: String,
    lastName: String,
    department: String,
});


const Admin = mongoose.model("Admin", adminSchema);


const app = express();
app.use(cors());
app.use(express.json());


// Save student
app.post('/addStudent', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        console.log("Student saved:", newStudent);
        res.json({ message: "Student saved", student: newStudent });
    } catch (err) {
        console.error("Error saving student:", err);
        res.status(500).json({ error: err.message });
    }
});


// Fetch all students
app.get('/getStudents', async (req, res) => {
    try {
        const students = await Student.find();
        console.log("All students in DB:", students);
        res.json(students);
    } catch (err) {
        console.error("Error fetching students:", err);
        res.status(500).json({ error: err.message });
    }
});


// --- Delete student by ID ---
app.delete('/deleteStudent/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted", student: deletedStudent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Save admin
app.post('/addAdmin', async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        console.log("Admin saved:", newAdmin);
        res.json({ message: "Admin saved", admin: newAdmin });
    } catch (err) {
        console.error("Error saving admin:", err);
        res.status(500).json({ error: err.message });
    }
});


// Fetch all admins
app.get('/getAdmins', async (req, res) => {
    try {
        const admins = await Admin.find();
        console.log("All admins in DB:", admins);
        res.json(admins);
    } catch (err) {
        console.error("Error fetching admins:", err);
        res.status(500).json({ error: err.message });
    }
});


// --- Delete student by ID ---
app.delete('/deleteAdmin/:id', async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Admin deleted", admin: deletedAdmin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
