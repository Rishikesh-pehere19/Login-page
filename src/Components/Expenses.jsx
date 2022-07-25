import React, { useState } from "react";
 import Expenseitem from "./Expenseitem";
 import Filter from "./Filter";
 
 

const Expenses = ({expenseData, month}) =>{


   const [nullvalue, setNullValue] = useState();

   const[updateFilterYear, setUpdateFilterYear] = useState(2018);

   
   const filterdyear = (selectedyear) =>{

      console.log(selectedyear);

      setUpdateFilterYear(selectedyear);

   setNullValue("2018");
       
      console.log(filterRecord);

      

       
      
   }

   let filterRecord = expenseData.filter((exp) =>{

      if(updateFilterYear === 'All'){
      return exp
  }

   else if(updateFilterYear === "2018"){
      return( console.log('data not found')
      )
     
   }
   
   else{

      return(
         (exp.date.getFullYear().toString() === updateFilterYear.toString())

     )
   }

  })

   console.log(filterRecord);

   return(

    <div className="expenses">

       <Filter filterdyear={filterdyear}></Filter>
        {
            

            filterRecord.map((row,index) =>{
                 
                return(

                    
                 <Expenseitem expenseData={row}  key={row.id}/>

                    


                );


             })

            
        }


    </div>


    //  <Expenseitem expenseData={expenseData[0]} month={month}/>
    //  <Expenseitem expenseData={expenseData[1]} month={month}/> 
    //  <Expenseitem expenseData={expenseData[2]} month={month}/>
    //  <Expenseitem expenseData={expenseData[3]} month={month}/>


  
   );


}
export default Expenses;