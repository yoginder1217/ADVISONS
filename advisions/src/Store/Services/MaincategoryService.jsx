export async function addMaincategoryAPI(data){
    var response = await fetch("/api/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getMaincategoryAPI(data){
    var response = await fetch("/api/maincategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteMaincategoryAPI(data){
    var response = await fetch("/api/maincategory/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateMaincategoryAPI(data){
    var response = await fetch("/api/maincategory/"+data._id,{
        method:"put",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}