import React from "react";
import Chatbot from "./chatbot";
import PrimarySearchAppBar from "./nav";

const App =()=>{
    return(
        <div>
        <PrimarySearchAppBar/>
        <Chatbot/>
        </div>
    );
};


export default App;