import db from "../config/DB.js"

export const getAllGrupos= async ()=>{
    const [rows]= await db.query("SELECT * FROM grupos WHERE activo = 1")
    return rows;
}

export const getGroupById=async ()=>{
    const[rows]=await db.query("SELECT * FROM grupos WHERE activos=1 AND id_grupo=?",[id])
    return rows[0]
}

export const createGrupo = async ({ nombre_grupo, descripcion}) => {
  const [result] = await db.query(
    'INSERT INTO grupos (nombre_grupo, descripcion, activo) VALUES (?,?,?)',
    [nombre_grupo,descripcion||null,activo]
  );
  return { id: result.insertId, nombre_grupo };
};