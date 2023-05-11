const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();


const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://devkyle4:AEJNgwt5vr9OpyM2@cluster0.jjng3eb.mongodb.net/?retryWrites=true&w=majority")
        .then(()=> console.log('Database Connected'))
        .catch(err => console.log(err))

app.post('/signup', async (req, res)=>{
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res)=>{
        const {username, password} = req.body;
        const userDoc = await User.findOne({username});
        const passOk = bcrypt.compareSync(password, userDoc.password);

        if(passOk){
            jwt.sign({username,id:userDoc._id}, secret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json('ok');
            })
        }else{
            res.status(400).json('wrong credentials');
        }
});



app.listen(4000); 
 