const express = require('express');
const app = express();
const connectDB = require('./firebase/firebase');



//connecting to db
connectDB();

//Middleware 
app.use(express.json({extended:false}));


app.get('/',(req,res) => res.send('API Running'))



//define Route 
app.use('/api/students',require('./routes/api/students')); 
app.use('/api/auth',require('./routes/api/auth')); 
app.use('/api/adminauth',require('./routes/api/adminauth')); 
app.use('/api/inauth',require('./routes/api/instructorauth'));
app.use('/api/profile',require('./routes/api/profile')); 
app.use('/api/instructorprofile',require('./routes/api/instructorprofile')); 
app.use('/api/adminprofile',require('./routes/api/adminprofile')); 
app.use('/api/instructor',require('./routes/api/instructor')); 
app.use('/api/admin',require('./routes/api/admin')); 
app.use('/api/post',require('./routes/api/post'));
app.use('/api/course',require('./routes/api/course'));
app.use('/api/assignment',require('./routes/api/assignment'))
app.use('/api/lecture',require('./routes/api/lectureRoute'))


//if port is taken changes to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server Started ${PORT}`));
