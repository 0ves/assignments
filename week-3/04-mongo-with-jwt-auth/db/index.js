const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ovesnadaf:C9YQ42tffc3Fh6Ow@cluster0.2w2njts.mongodb.net/JWTcourses');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        red:"Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description: String,
    imageLink : String,
    price : Number

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}