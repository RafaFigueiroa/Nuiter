import React from "react";

function Card(props){
    return(
        <div className="py-4 px-6 bg-white rounded border-2 border-gray-200">
            <div className="mb-7 text-lg">
                <p>{props.text}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-blue-500 hover:underline">{props.email}</p>
                <p className="text-sm">21/02/2024, 13:31</p>
            </div>
        </div>
    );
}

export default Card;