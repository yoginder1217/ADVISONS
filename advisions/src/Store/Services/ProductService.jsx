export async function addProductAPI(data){
    var response = await fetch("/api/product",{
        method:"post",
        headers:{
            "authorization":localStorage.getItem("token")
        },
        body:data
    })
    return await response.json()
}
export async function getProductAPI(data){
    var response = await fetch("/api/product",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteProductAPI(data){
    var response = await fetch("/api/product/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateProductAPI(actionData){
    var response = await fetch("/api/product/"+actionData._id,{
        method:"put",
        headers:{
            "authorization":localStorage.getItem("token")
        },
        body:actionData.data
    })
    return await response.json()
}