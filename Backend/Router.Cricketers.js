const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Cricketer = require('./CricketerModel');

const router = express.Router();

const userName = process.env.DBUSER;
const userPass = process.env.DBPASSWORD;

const connectionString = `mongodb+srv://${userName}:${userPass}@cluster0.zkpmd.mongodb.net/Cricketers_Info`;

mongoose.connect(connectionString).then(()=>{

    console.log("Connected with Database...");

    router.use(bodyParser.urlencoded({extended: false}));
    router.use(express.json());
    router.use(cors());

    //getAll
    router.get('/cricketers', async(req,res)=>{
        const cricketer = await Cricketer.find();
        res.send(cricketer);
    });

    //getByID
    router.get('/cricketers/:_id', async(req,res)=>{
        const cricketer = await Cricketer.findOne({_id : req.params._id});
        res.send(cricketer);
    });

    //insert or create
    router.post('/cricketers', async(req,res)=>{
        cricketer = new Cricketer({...req.body});
        const ans = await cricketer.save();
        res.send(ans);
    });

    //update
    router.patch('/cricketers/:_id', async (req, res) => {
        cricketer = await Cricketer.findOne({ _id: req.params._id });
        cricketer.name = req.body.name;
        cricketer.country = req.body.country;
        cricketer.age = req.body.age;
        cricketer.role = req.body.role;
        const ans = await cricketer.save();
        res.send(ans);
    });

    //delete
    router.delete('/cricketers/:_id', async(req,res)=>{
        const cricketer = await Cricketer.deleteOne({_id : req.params._id});
        res.send(cricketer);
    });
});

module.exports = router;