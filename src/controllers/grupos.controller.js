import * as grupoM from"../models/grupo.model.js"

export const getAllGrupos= async (req,res)=>{
    try {
        
        const grupos=await grupoM.getAllGrupos()
        res.status(200).json(grupos)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getGrupoById=async (req,res)=>{
    try {
        
        const grupo= await grupoM.getGroupById(req.params.id)
        if (!grupo) {
            res.status(404).json({message:"Grupo no encontrado"})
        }
        res.status(200).json(grupo) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const insertGrupo=async (req,res)=>{
    try {

        if(!req.body.nombre_grupo)
            res.status(400).json({message:"El campo nombre es requerido"})
        const nuevo=await grupoM.createGrupo(req.body)
        req.status(201).json(nuevo)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}