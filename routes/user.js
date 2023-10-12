const connection = require("./../connection");

const SignUp = (req,res)=>{
    const userObject = req.body;
    const getUsers = "SELECT COUNT(*) AS row_count FROM user"
    const insertUserQuery = 'INSERT INTO user (id, name, contactNumber, email, password, status, role, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(insertUserQuery, [userObject.id, userObject.name,userObject.contactNumber, userObject.email,userObject.password,userObject.status, userObject.role, userObject.createdAt], (err, results) => {
        if (err) {
          console.error('Error inserting a user: ' + err);
          return;
        }
        console.log('User added to the database with ID: ' + results.insertId);
      });
    res.json("User Registered successfully");
}