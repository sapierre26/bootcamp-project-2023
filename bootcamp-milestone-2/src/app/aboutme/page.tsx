import React from "react";
import style from "./navbar.module.css";

export default function Page() {
  return (
    <div className="aboutme">
        <h1>Contact</h1>
        <div>
            <form>
                <label>Name: </label>
                <input type="text" id="name">
    
                <label>Email: </label>
                <input type="text" id="email">
    
                <label>Message: </label>
                <textarea id="message"></textarea>

    
                <div><input type="submit" value="SUBMIT" /></div>
            </form>
        </div>

        <p id="p">Use this information to contact me!</p>
    </div>
  );
}
