export const ADDTOS = "ADDTOSINGLE";
export const SQTY = "SINGLEQTY"

export const addtoSingle = (unqid,Qty) =>({
    type: ADDTOS,
    id:unqid,
    qty:Qty
  })
  export const single_update_qty = ( id, newQuantity ) => ({
    type: SQTY,
    id:  id, 
    qty: newQuantity ,
    
  });
  