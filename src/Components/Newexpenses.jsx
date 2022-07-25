import React, { useState } from "react";
import './Newexpenses';
import Expenseform from '../Components/Expensform';






const Newexpenses = (props) => {
    


    // const [userData, setUserData] = useState();

    // const formData = (dataobj) => {
    //     console.log("data from Newexpenses = ", dataobj);
    //     setUserData(dataobj);
    
       const formData = (dataobj) =>{
           console.log(dataobj);

      props.getformData(dataobj);


     

       }
         return (

            <div>
             <Expenseform formData={formData}/>

            </div>

        
               

            
        );
        //    props.formData(dataobj);

    
    }

    export default Newexpenses;