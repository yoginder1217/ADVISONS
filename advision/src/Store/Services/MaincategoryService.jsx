export async function addMaincategoryAPI(data){
    var response = await fetch("/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
export async function getMaincategoryAPI(data){
    var response = await fetch("/maincategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function deleteMaincategoryAPI(data){
    var response = await fetch("/maincategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function updateMaincategoryAPI(data){
    var response = await fetch("/maincategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}