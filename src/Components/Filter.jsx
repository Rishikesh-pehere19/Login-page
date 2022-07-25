import React from 'react';

import './Filter.css';




const Filter = (props) => {

    
        


const yearSelect = (e) =>{

    const selectedyear = e.target.value;
    console.log(selectedyear);
     props.filterdyear(selectedyear);
}

   
    return (

        <div>
       <select onClick={yearSelect} className="Yearbtn">

           <option value="2018">2018</option>

           <option value="All">All</option>
           <option value="2019">2019</option>
           <option value="2020">2020</option>
           <option value="2021">2021</option>
           <option value="2022">2022</option>
           <option value="2023">2023</option>




       </select>

        </div>
    )


}

export default Filter;