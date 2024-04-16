import React from "react";
import "../TabView/PregnancyWheelStyle.css";

import Sidebar from '../../Global/Sidebar';
import Navbar from '../../Global/Navbar_Main';
import PregnancyWheelTAB from './PregnancyWheelTAB.jsx';

// Grandparent (Highest in the hierarchy)
// This is the PregnancyWheel found in the routing..
// Hierachy: three children (components), 1 parent, & 1  grandparent 

function PregnancyWheel() {

    return (
        <>
        <Navbar/>
        <Sidebar/>
        <PregnancyWheelTAB/>
    </>
    )
}

export default PregnancyWheel;
