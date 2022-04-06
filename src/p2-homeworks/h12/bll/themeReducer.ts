const initState = {
 theme:"default"
};
type InitialStateType=typeof initState

export const themeReducer = (state = initState, action: ChangeThemeAT): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};
export type ChangeThemeAT = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme:string) => {
    return {
        type:"CHANGE-THEME",
        theme
    } as const
}; // fix any