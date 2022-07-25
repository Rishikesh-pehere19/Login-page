import React from "react";
import './Expensedata';


 const Expensedata = (props) =>{

    return(
        <div className="Calender">
        <div className="mahina" >{props.month}</div>
        <div className="varsh">{props.year}</div>
        <div className="tarikh">{props.date}</div>
        </div>

    )
}
export default Expensedata;