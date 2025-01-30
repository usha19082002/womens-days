export const ADD = "ADD";
export const DFC = "DELETEFROMCART";
export const COUNT = "COUNT";
export const QTY ="QTY"


export const add = (unqid) => ({
  type: ADD,
  id:unqid
  
});

export const cart_remove = (index) => ({
  type: DFC,
  key: index
});

export const cart_count = (count) =>({
    type: COUNT,
    key:count
})

export const update_qty = ( id, newQuantity ) => ({
  type: QTY,
  id:  id, 
  qty: newQuantity ,
  
});


