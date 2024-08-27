import React from 'react';
import { useSelector } from 'react-redux';

function SidebarIcon(props) {
    const formNumber = useSelector(state=>state.steps.stepNumber);
    const currentPage = props.id+1;
    return ( <div className="sidebar-icon">
        <p className={"sidebar__stepnumber" + (currentPage === formNumber ? ' active_icon_number' : '')}>{props.stepInfo.stepNumber}</p>
        <h1 className={"sidebar__stepname" + (currentPage === formNumber ? ' active_icon_name' : '')}>{props.stepInfo.stepName}</h1>
    </div> );
}

export default SidebarIcon;