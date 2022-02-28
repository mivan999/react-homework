const initState = {
isLoading:false
}


export const loadingReducer = (state = initState, action: loadingActionType):typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state,isLoading:action.isLoading }
        }
        default: return state
    }
}
type loadingActionType={
    type:'CHANGE_LOADING',
    isLoading:boolean
}
export const loadingAC = (isLoading:boolean) => ({
    type:'CHANGE_LOADING',
    isLoading
}) // fix any