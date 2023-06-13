const {CustomApiError}=require('../errors/custom-error')
const errorHandlerMiddleware=(err,req,res,next)=>{

    console.log(err)
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({mes:err.message})
    }
    return res.status(500).json({msg:'something went wrong'})
}
module.exports=errorHandlerMiddleware