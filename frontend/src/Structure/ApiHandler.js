const { BACKEND_URL } = require("@/config");


export async function addCar(data){
console.log(data)
const response = await fetch(`${BACKEND_URL}/cars`, {
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if(response.status === 200){

    return result;

  } else {
    return {}
  }

}

export async function deleteCar(id){
  const response = await fetch(`${BACKEND_URL}/cars/${id}`, {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
    },
    
    

  });
  const result = await response.json();
  console.log(result)
  return result
}