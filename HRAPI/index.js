const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app= express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('wellcome to hr api');
    }catch(err){
res.status(500).json({Error: err.message})
}
});

app.get('/emp',async(req,res)=>{
    try {
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({Error: err.message});
    }
});
    
app.get('/empcount' ,async(req,res)=>{
    try {
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
        
    } catch (error) {
        res.status(500).json({Error: err.message});
    }
});

app.get('/totallCountry' ,async(req,res)=>{
    try {
        const result = await pool.query('select count(country_name) from countries');
        res.json(result.rows);
        
    } catch (error) {
        res.status(500).json({Error: err.message});
    }
});

app.get('/Totallregions' ,async(req,res)=>{
    try {
        const result = await pool.query('select count(region_id) from regions');
        res.json(result.rows);
        
    } catch (error) {
        res.status(500).json({Error: err.message});
    }
});

app.get('/totallDepartment' ,async(req,res)=>{
    try {
        const result = await pool.query('select count(department_name) from departments');
        res.json(result.rows);
        
    } catch (error) {
        res.status(500).json({Error: err.message});
    }
});


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`CONNECT SUCCESSFULLY ON .. PORT ${PORT}`);
});