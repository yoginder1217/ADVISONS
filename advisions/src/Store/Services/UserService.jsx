//services for User
export async function addUserAPI(data) {
    var response = await fetch("/api/user", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getUserAPI() {
    var response = await fetch("/api/user", {
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}
export async function updateUserAPI(data) {
    var response = await fetch("/api/user/" + data.id, {
        method: "put",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function deleteUserAPI(data) {
    var response = await fetch("/api/user/" + data.id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    })
    return await response.json()
}
