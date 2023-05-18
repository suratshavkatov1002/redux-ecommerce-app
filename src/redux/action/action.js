export  const addProduct = (product) => {
    return{
        type: "ADD_PRODUCT",
        payload: product
    }
}

export  const daleteProduct = (id) => {
    return{
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export  const removeInt = (item) => {
    return{
        type: "REMOVE_ITEM",
        payload: item
    }
}