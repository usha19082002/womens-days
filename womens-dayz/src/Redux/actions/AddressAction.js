export const ADDRESS = "ADDADDRESS";
export const DELETEADD ="REMOVEADDRESS"


export const AddToaddress = (data) => ({
    type: ADDRESS,
    key:data
    
  });

export const RemoveAddress =(id) =>({
  type:DELETEADD,
  index:id
})

 