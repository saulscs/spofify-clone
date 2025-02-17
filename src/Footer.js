import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import StopIcon from '@material-ui/icons/Stop';
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                    className="footer__albumLogo" 
                    src="https://upload.wikimedia.org/wikipedia/en/2/28/Usher_-_U_Remind_Me_-_CD_cover.jpg" 
                    alt="usher"
                    />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon  className="footer__icon"/>
                 <RepeatIcon className="footer__green"/>
            </div>
            <div className="footer__right">
              
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlayIcon/>
                        </Grid>
                        <Grid item>
                            <VolumeDownIcon/>
                        </Grid>
                        <Grid item xs>
                            <Slider aria-labelledby="continuous-slider" />
                        </Grid>
                    </Grid>
               
            </div>
        </div>
    )
}

export default Footer
