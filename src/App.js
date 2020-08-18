import React, {useEffect} from 'react';
import Login from './Login';
import Player from './Player'
import SpotifyWebApi from "spotify-web-api-js"
import {getTokenFromUrl} from './spotify';
import {useDataLayerValue} from './DataLayer'


/*Import styles */
import './App.css';

const spotify = new SpotifyWebApi();

function App() {

    const [{user,token}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const token = hash.access_token;
        if (token) {
            dispatch({
                type: "SET_TOKEN", 
                token: token
            });

            spotify.setAccessToken(token);

            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER', 
                    user: user
                });
            });

            spotify.getUserPlaylists().then((playlists) =>{
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });

            spotify.getPlaylist('37i9dQZEVXcEechGQewMQH').then((response) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                });
            });
        };
    }, [token, dispatch]);
    
    return (
        <div className="app">
            {
            token ? <Player spotify={spotify}/> : <Login/>
        } </div>
    );
}

export default App;
