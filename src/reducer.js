export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
    item: null,
    //token: 'BQAWc8egB53MpPSJa8Q1UGH9bxL9Gn8K03CFBCfjj3X1iq5g7Hn3SS24Ip8HffKV_ZQslLCoh-vTPt94vWNgNWO-9rooz8PCr1OPg5inhWIEtJcNugAC6RxgW59Xv9SzPOY7vlhaXwv7i_8mTodjK5Fy',
    
}


const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user 
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;
