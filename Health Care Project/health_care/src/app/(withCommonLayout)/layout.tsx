import Navbar from "@/shared/Navbar/navbar";
import { ReactNode } from "react";

const layout = ({children} : {children : ReactNode}) => {
    return (
        <div>
            <Navbar /> 
            {children}
        </div>
    );
};

export default layout;