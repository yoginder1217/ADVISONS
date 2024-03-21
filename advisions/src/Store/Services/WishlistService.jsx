export async function addWishlistAPI(data) {
    var response = await fetch("/api/wishlist", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "authorization":localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export async function getWishlistAPI(data) {
    var response = await fetch("/api/wishlist/"+localStorage.getItem("userid"), {
        method: "get",
        headers: {
            "content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
export async function deleteWishlistAPI(data) {
    var response = await fetch("/api/wishlist/" + data._id, {
        method: "delete",
        headers: {
            "content-type": "application/json",
            "authorization":localStorage.getItem("token")
        }
    })
    return await response.json()
}
