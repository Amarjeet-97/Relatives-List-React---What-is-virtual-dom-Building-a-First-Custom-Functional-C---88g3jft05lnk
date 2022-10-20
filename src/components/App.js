import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    
    render() {
        let relatives=["Ankit","Punitha", "Jyoti","Nikhil","Rohit","Jubin"]
        return(
            

               <ol key="relativeList">
                    {
                        relatives.map((relative, index)=>(
                           <li key={`relativeList${index+1}`}>{relative}</li> 
                        ))
                    }

               </ol>
        
        )
    }
}


export default App;
