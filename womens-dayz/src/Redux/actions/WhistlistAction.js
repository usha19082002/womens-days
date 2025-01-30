export const ADDTOWISHT = "ATW";
export const REMOVEFROMWISHT = "RFW";


export const addWhistlist = (unqid,status) =>({
    type: ADDTOWISHT,
    id:unqid,
    status:status


  })

  export const removeWhistlist = (unqid,status) =>({
    type: REMOVEFROMWISHT,
    id:unqid,
    status:status
  })