import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    render() {
        const relatives=[
            {
                id:1,
                name:"Amit"
            },
            {
                id:2,
                name:"Amarjeet"
            },
            {
                id:3,
                name:"Unknown"
            }
        ]
        return(
            <div id="main">
                <ol key={"relativeList"}>
                {relatives.map((relative)=>{
                    console.log("relativeListItem"+relative.id)
                return <li key={"relativeListItem"+relative.id}>{relative.name}</li>
               })}
                </ol>
            </div>
        )
    }
}


export default App;
