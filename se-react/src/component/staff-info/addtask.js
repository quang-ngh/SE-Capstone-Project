import './addtask.css'
import './info.css'
import StaffList from "./staffList";
import {
    MdOutlineMap,
    MdChatBubbleOutline,
    MdAddCircleOutline,
    MdNotifications,
    MdInfo,
    MdOutlineAddLocation,
} from "react-icons/md";

import {
    RiUser6Fill,
    RiLoader2Fill,
    RiTimeLine,
    RiCheckboxCircleFill,
    RiUserLine,
    RiUserLocationLine,
    RiTruckLine,
} from "react-icons/ri";

import {
    FaUserCircle,
    FaPlus,
    FaFontAwesomeFlag,
} from "react-icons/fa";
import { useState } from 'react';
/*-----------------------*/

const SideBarItem = ({ Item, page, href }) => {
    return (
        <a className="in4-sidebar_link" href={href}>
            <div className="in4-sidebar_item">
                {<Item className="in4-sidebar_img" />}
                <h3>
                    {page}
                </h3>
            </div>
        </a>
    );
};
const Logo = () => {
    return (
        <div className="in4-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" />
        </div>
    );
};

function Task() {
    const [staffID, setStaffID] = useState('')
    const [body, setBody] = useState('')
    return (
        <div className="in4-container">
            <div className="in4-sidebar">
                <div className="task-opt">
                    <a href="/dashboard"><div style={{ display: "flex", alignItems: "center", marginBottom: "0em" }}>
                        <Logo />
                        <div className="db-Logoname">
                            <h4>UWC 2.0</h4>
                            <p>BO interface</p>
                        </div>
                    </div></a>
                    <SideBarItem
                        Item={MdOutlineMap}
                        page="Map"
                        href="/map"
                    />
                    <SideBarItem
                        Item={MdChatBubbleOutline}
                        page="Inbox"
                        href="https://www.messenger.com"
                    />
                    <SideBarItem
                        Item={RiUserLine}
                        page="Collector"
                        href="/collector-info"
                    />
                    <SideBarItem
                        Item={RiUserLocationLine}
                        page="Janitor"
                        href="/janitor-info"
                    />
                    <SideBarItem
                        Item={RiTruckLine}
                        page="Vehicle"
                        href="/"
                    />
                    <SideBarItem
                        Item={MdOutlineAddLocation}
                        page="MCP"
                        href="/"
                    />

                </div>
                <hr></hr>
                <div className="in4-overview">
                    <div style={{ display: 'flex', margin: '0em 1.5em' }}>
                        <h4 style={{ marginRight: '9em' }}>Overview</h4>
                        <MdAddCircleOutline style={{ marginTop: '.9em', fontSize: '25px', color: '#454545' }} />
                    </div>
                    <div style={{ marginLeft: '1.3em' }}>
                        <div className="in4-taskovr">
                            <RiUser6Fill style={{ margin: '.8em 1em 0em 1em', fontSize: '25px', color: '#454545' }} />
                            <p>Available collector</p>
                            <h2 style={{ marginLeft: '-3.3em' }}>69/122</h2>
                        </div>
                        <div className="in4-taskovr">
                            <RiUser6Fill style={{ margin: '.8em 1em 0em 1em', fontSize: '25px', color: '#454545' }} />
                            <p>Available janitor</p>
                            <h2 style={{ marginLeft: '-3.8em' }}>121/232</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='in4-content'>
                <div className="in4-header">
                    <div style={{ float: 'left' }}>
                        <p>TASK MANAGEMENT</p>
                    </div>
                    <div style={{ float: 'right' }}>
                        <div className="in4-headerstuff">
                            <button className="in4-addtaskbtn">
                                <FaPlus style={{ fontSize: '15px', color: 'white', float: 'left' }} />
                                <p style={{ fontSize: '15px', color: 'white', float: 'left', marginTop: '0em' }}>Add task</p>
                            </button>
                            <MdInfo style={{ margin: '.25em .25em', fontSize: '25px', color: '#454545' }} />
                            <MdNotifications style={{ margin: '.25em .25em', fontSize: '25px', color: '#454545' }} />
                            <FaUserCircle style={{ margin: '.1em .25em', fontSize: '30px', color: '#acacac' }} />
                        </div>
                    </div>
                </div>
                <div className='task-add'>
                    <div className='in4-holder'>
                        <div className='in4-holder-left'>
                            <form method='' action="" name="info" onSubmit={() => {}}>
                                <h5><FaFontAwesomeFlag /> General information</h5>
                                <div className='Staffname'>
                                    <p><b>Staff ID</b></p>
                                    <input type="text" placeholder="Staff1" name="assigned_to" value={staffID} onChange={(e) => setStaffID(() => e.target.value)}/>
                                </div>
                                <div>
                                    <p><b>Description</b></p>
                                    <input type="text" placeholder="Collect MCP 2" name="Body" style={{ height: '5em' }} value={body} onChange={(e) => setBody(() => e.target.value)}/>
                                </div>
                                <button className='submit-task' type="button">Add Task</button>


                            </form>
                        </div>
                        <div className='in4-holder-right'>
                            <StaffList />
                        </div>
                    </div>


                </div>
            </div>
        </div>


    );
}
export default Task;