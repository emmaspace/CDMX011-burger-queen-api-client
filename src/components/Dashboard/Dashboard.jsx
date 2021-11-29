import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch"
import React, { useState } from "react"

export default function Dashboard({menu}) {
   
return(
   <div>
       <section htmlId="Menú">
           {menu  === 'breakfast' ? <Breakfast /> : null} 
        </section> 
    
        <section htmlId="Lunch">
            {menu === "lunch" ? <Lunch /> : null}
       </section>
       <section htmlId="Comanda"></section>
   </div> 
    )
}