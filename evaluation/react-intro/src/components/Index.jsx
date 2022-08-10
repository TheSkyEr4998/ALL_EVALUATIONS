import React from "react";
import Header from "./Header";
import Manufacturers from "./Manufacturers";
import MobileOs from "./MobileOs";

function Index(){
    return(
        <div>
            <Header title="Mobile Operating System" />
            <MobileOs />
            <Header title="Mobile Manufacturers" />
            <Manufacturers />
        </div>
    )
}
export default Index;