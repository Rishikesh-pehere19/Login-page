import React from "react";
import './Expenseitem.css';

import Expensedata from "./Expensedata";



const Expenseitem = (props) =>{

    const month = props.expenseData.date.toLocaleString("en-us", {month:"long"});
     const year = props.expenseData.date.getFullYear();
    const date = props.expenseData.date.getDate();

  return(
    <div className="container">
        <div className="expense-item">
      <Expensedata  month={ month}  year={year} date={date}/>
      
     < div className="item">{props.expenseData.item}</div>
      < div className="price"> ${props.expenseData.price} </div><div className="CT">Change Title</div>
      

        </div>
        </div>


  );


}
export default Expenseitem;