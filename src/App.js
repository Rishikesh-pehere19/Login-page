import React, { useState } from "react";
import './App.css';
// import Expenseitem from "./Components/Expenseitem";
import Expenses from "./Components/Expenses";
import Expenseform from "./Components/Expensform";

// import Expenseform from "./Components/Expensform";

import Newexpenses from "./Components/Newexpenses";



 


function App() {

 

  

  
     

 // const month =["null", "Jan", "Feb", "Mar", "Apri", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

 
  
  const dummyData =[

    {
      id:"exp1",
      item:"Washing machin",
      date:new Date(2020, 7, 13),
      price:756


    },
    {
      id:"exp2",
      item:"Mobile",
      date:new Date(2021, 4, 12),
      price:656


    },
    {
      id:"exp3",
      item:"Car Insurence",
      date:new Date(2022, 3, 27),
      price:997


    },
    {
      id:"exp4",
      item:"Car",
      date:new Date(2022, 2, 21),
      price:898


    },

    {
      id:"exp5",
      item:"New Tv",
      date:new Date(2022, 5, 10),
      price: 489


    },

    // {
    //   item:"data not found!",
    //   date:new Date(2018, 6, 8 )


    // }


    


  ];


  const [expenseData , setExpenseData] = useState(dummyData);

  const getformData = (dataobj) =>{

    console.log("This Data from App.js" ,dataobj);

    // setExpenseData([dataobj, ...expenseData]);

     // to add expensedata into the last just change the postions

     setExpenseData([...expenseData, dataobj]);




  


 
  // expenseData.push( {
  //   id:"exp4",
  //     item:"New Tv",
  //     date:new Date(2022, 5, 21),
  //     price: 489
  // },)
  // console.log(expenseData)
  

 // console.log(expenseData[0]);

  // const formData = (dataobj) =>{
  //   console.log("data from App =", dataobj)


    
    

 
  
    }
   

  return (

    <div>


      
    <Newexpenses getformData={getformData}/>

     {/* <Expenseform formData={formData} />  */}
    
     <Expenses expenseData={expenseData} /> 

    </div>
  
  );
      
  }
  
  

export default App;
