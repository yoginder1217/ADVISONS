export async function addContactAPI(data){
    var response = await fetch("/api/contact",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getContactAPI(data){
    var response = await fetch("/api/contact",{
        method:"get",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function deleteContactAPI(data){
    var response = await fetch("/api/contact/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateContactAPI(data){
    var response = await fetch("/api/contact/"+data._id,{
        method:"put",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}