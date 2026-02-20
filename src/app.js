//IMPORTAMOS LA LIBRERIA DE EXPRESS
import express from "express";
//CREAMOS EL OBJETO DE EXPRESS
const app=express();
//DEFINIMOS EL PUERTO
const PORT=3000;
//DEFINIMOS PETICION AL SERVIDOR
app.get("/",(req,res)=>{
    res.send("MI PRIMER API EN EXPRESS")
})
app.listen(PORT,()=>{
    console.log(`aplicaion corriendo en el puerto: ${PORT}`)
})