import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <div>
            <h2>Admin Layout Here</h2>
            <Outlet />
        </div>
    );
};

export default AdminLayout;