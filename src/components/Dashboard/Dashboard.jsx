import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Comanda from "./Commander";
import React, { useState } from "react";
import Header from "./Header";
import Item from "./Item";

export default function Dashboard() {
    const [menu, setMenu] = useState("breakfast");
    const addProduct= () => {};
return(
   <div>
       <section htmlID="Header" > <Header setMenu={setMenu}/>
       </section>     
       <section htmlId="Menú">
           {menu  === 'breakfast' ? <Breakfast addProduct={addProduct}/> : null} 
           {console.log({Item}, 'que pasa aca')}
        </section> 
    
        <section htmlId="Lunch">
            {menu === "lunch" ? <Lunch /> : null}
       </section>
       <section htmlId="Comanda"><Comanda /></section>
   </div> 
    )
}