import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';

//styles
import './Sidebar.css';

 function Sidebar()  {
    const [{playlists}, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>
            
            {playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.id} title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar
