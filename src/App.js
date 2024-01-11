import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";








const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )  
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)



//Config driven UI
//THE UI we are viewing is based on the data we are receiving from backend.


//Always use key in list as it affects the performance.If you dont use keys then react will give warning in the console
// and also it will render all the components as it is not  able to distinguish between the components.
// You can also use index as keys but that is not advisable.



//Hooks are simply javascript utility functions which are provided by react to us.They have some super powers in them.

//React uses something called  as Reconciliation algorithm which is also known as React Fiber or diffing algorithm.
// Real DOM is the HTML elements we actually get in the index.html file.Virtual DOM is the representation of the actual DOM in form of objects.
// React maintains two virtual dom,whenever the UI changes a new virtual dom is created and the difference between the new virtual dom and the previous
// virtual dom is calculated and then the real dom is updated .



//React is fast because of its ability to manipulate DOM faster.




