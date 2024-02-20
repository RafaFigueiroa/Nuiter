import React from "react";

function Public({children}){
    return(
        <div className="flex justify-center items-center w-screen h-screen">{children}</div>
    );
}

export default Public;