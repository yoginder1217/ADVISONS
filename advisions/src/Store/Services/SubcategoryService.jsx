export async function addSubcategoryAPI(data){
    var response = await fetch("/api/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getSubcategoryAPI(data){
    var response = await fetch("/api/subcategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteSubcategoryAPI(data){
    var response = await fetch("/api/subcategory/"+data._id,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function updateSubcategoryAPI(data){
    var response = await fetch("/api/subcategory/"+data._id,{
        method:"put",
        headers:{
            "content-type":"application/json",
            "authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}