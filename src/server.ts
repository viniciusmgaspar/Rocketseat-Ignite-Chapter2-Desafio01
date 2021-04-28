import { app } from ".";
import {Response, Request, NextFunction} from "express"

import AppError from "./errors/AppError"

app.use((err: Error, request:Request, response:Response, next:NextFunction) =>{
    if (err instanceof AppError){
        return response.status(err.statusCode).json({
           status: 'error',
           message: err.message,
        })

       return response.status(500).json({
           status:'error',
           message:'Internal server error'
       })
    }
});
app.listen(3333, () => console.log("Server is running!"));