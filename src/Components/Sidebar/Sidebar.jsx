import React from 'react';
import SidebarIcon from './SidebarIcons/SidebarIcon';
import { sideBarData } from './SidebarData';
import "./styles.css"
function Sidebar() {
    return ( 
        <div className="sidebar">
        {sideBarData.map((data, index) => {
            return <SidebarIcon id={index} key={index} stepInfo={data}/>
        })}
        </div>
     );
}

export default Sidebar;