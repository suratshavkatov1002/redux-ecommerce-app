const initialState = {
    products: []
}

export const ProductReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "ADD_PRODUCT":
            
            const itemIndex  =  state.products.findIndex((item) => item.id === payload.id ) 

            if (itemIndex >= 0 ) {
                state.products[itemIndex].qty += 1
               
            }else{
                const temp = {...payload, qty: 1}
               
                return{
                 ...state,
                    products: [...state.products, temp]
                }
                
            
            }
    
        case "DELETE_PRODUCT":
            const filterData = state.products.filter((item) => item.id != payload )

            return{
                ...state,
                products:  filterData
            }

        case "REMOVE_ITEM": 
        const elIndex  =  state.products.findIndex((item) => item.id === payload.id ) 

        if (state.products[elIndex].qty >= 1 )  {
           state.products[elIndex].qty -= 1;
            return{
                ...state,
                products: [...state.products]
            }
        // } else if (state.products[elIndex].qty == 1) {
        //     const data = state.products.filter((item) => item.index !==  payload.id)
        //     return{
        //         ...state,
        //         products: data
        //     }
        } 

        default: return state
            
    }
}