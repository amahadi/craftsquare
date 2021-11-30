import React from "react";

export default function Home(props){
    return (
        <div>
            <h1>
                {props.greeting}
            </h1>
        </div>
    )
}