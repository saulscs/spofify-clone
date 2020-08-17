export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const API_KEY = process.env.REACT_APP_API_KEY

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => { // Access key
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${API_KEY}&redirect_uri=${redirectUri}&scope=${
    scopes.join("%20")
}&response_type=token&show_dialog=true`;
