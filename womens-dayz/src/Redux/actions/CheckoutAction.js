export const ADDTOC = "ADDTOCHECKOUT";

export const addtoCheckout = (unqid,Qty) =>({
    type: ADDTOC,
    id:unqid,
    qty:Qty
  })
  