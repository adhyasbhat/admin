// import {Outlet,Link} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar'
import '../Admin/Admin.css'
function AdminPage(){
    return <>
    <div className="row">
    <div className="col-2 sidebarr"><Sidebar/></div>
    <div className="col-10 heading ">
        WELCOME TO ADMIN PANNEL
    </div>
    </div>
    </>
}
export default AdminPage;