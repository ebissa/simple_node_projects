const mongoose=require('mongoose')
// const connectionString='mongodb+srv://ebissa:1234@cluster0.bmcklz0.mongodb.net/Task_manager?retryWrites=true&w=majority'
const connectDB=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    
}
module.exports=connectDB

