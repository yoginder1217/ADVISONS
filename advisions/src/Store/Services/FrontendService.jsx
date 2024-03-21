export async function addFrontendAPI(data){
    var response = await fetch("/api/frontend",{
        method:"post",
        headers:{
            "authorization":localStorage.getItem("token")
        },
        body:data
    })
    return await response.json()
}
export async function getFrontendAPI(data){
    var response = await fetch("/api/frontend",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteFrontendAPI(data){
    var response = await fetch("/api/frontend/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateFrontendAPI(actionData){
    var response = await fetch("/api/frontend/"+actionData._id,{
        method:"put",
        headers:{
            "authorization":localStorage.getItem("token")
        },
        body:actionData.data
    })
    return await response.json()
}