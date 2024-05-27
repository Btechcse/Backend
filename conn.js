const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/UsersLogin", {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log('Connection successful ');
    }).catch((err)=>{
        console.log('no connection');
})
