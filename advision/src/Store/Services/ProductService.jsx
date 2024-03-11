export async function addProductAPI(data){
    var response = await fetch("/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getProductAPI(data){
    var response = await fetch("/product",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteProductAPI(data){
    var response = await fetch("/product/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateProductAPI(data){
    var response = await fetch("/product/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}