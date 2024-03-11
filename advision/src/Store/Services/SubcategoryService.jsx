export async function addSubcategoryAPI(data){
    var response = await fetch("/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getSubcategoryAPI(data){
    var response = await fetch("/subcategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteSubcategoryAPI(data){
    var response = await fetch("/subcategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateSubcategoryAPI(data){
    var response = await fetch("/subcategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}