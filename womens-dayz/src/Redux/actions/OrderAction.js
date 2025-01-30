export const ADDTO = "ADD TO ORDER";

export const addToOrder = (data,price) => ({
    type: ADDTO,
    key:data,
    price:price
    
  });