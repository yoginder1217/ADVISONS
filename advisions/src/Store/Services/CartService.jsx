export async function addCartAPI(data){
    console.log("service called");
    var response = await fetch("/api/cart",{
        method:"post",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getCartAPI(data){
    var response = await fetch("/api/cart/"+localStorage.getItem("userid"),{
        method:"get",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function deleteCartAPI(data){
    var response = await fetch("/api/cart/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateCartAPI(data){
    var response = await fetch("/api/cart/"+data._id,{
        method:"put",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}