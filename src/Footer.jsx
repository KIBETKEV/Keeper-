import React from "react";


const Year = new Date().getFullYear();
function Footer (){
    return (
    <footer>
        <p className="footer">Copyright {Year}</p>
    </footer>
    )
};

export default Footer