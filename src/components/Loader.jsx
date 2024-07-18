import { useState } from "react";
import { SyncLoader } from "react-spinners";


const Loader = ({ size }) => {
    return (
        <div className="h-[50vh] flex justify-center items-center">
            <SyncLoader color={"#ffae42"} size={size} />
        </div>
    )
}

export default Loader
