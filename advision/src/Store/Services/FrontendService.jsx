export async function addFrontendAPI(data){
    var response = await fetch("/frontend",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getFrontendAPI(data){
    var response = await fetch("/frontend",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteFrontendAPI(data){
    var response = await fetch("/frontend/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateFrontendAPI(data){
    var response = await fetch("/frontend/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}