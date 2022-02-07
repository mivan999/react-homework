import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType[], action: any): UserType[] => { // need to fix any

    switch (action.type) {
        case 'sort': {
            let newState = {...state}
            if (action.payload === 'up') {
                newState = state.sort((a: UserType, b: UserType) =>
                    a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                newState = state.sort((a: UserType, b: UserType) =>
                    a.name < b.name ? 1 : -1)
            }

            return newState.map((el) => el)
        }
        case 'check': {
            return [...state.filter(f => f.age > action.payload)]
        }

        default:
            return state
    }
}
// type ActionType

