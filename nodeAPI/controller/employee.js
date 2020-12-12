const dbConnection = require('../connector/mysqlConnection')

exports.getEmployee = (req,res)=>{
    dbConnection.execute('select * from employee').then(([row,field])=>{
        res.send(row);
    }).catch(err =>{
        console.log(err);
    });
};