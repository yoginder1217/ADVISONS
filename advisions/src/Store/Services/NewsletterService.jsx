export async function addNewsletterAPI(data){
    var response = await fetch("/api/newsletter",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getNewsletterAPI(data){
    var response = await fetch("/api/newsletter",{
        method:"get",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function deleteNewsletterAPI(data){
    var response = await fetch("/api/newsletter/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
