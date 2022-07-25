import React, { useState } from 'react';
import './Expenseform.css';





const Expenseform = (props) => {

    const [title, setTitle] = useState("");

    const [Amount, setAmount] = useState();
    const [date, setDate] = useState(new Date());


    const SubmitHandler = (e) => {
        e.preventDefault();
        const dataobj = {
            item: title,
            date: new Date(),
            price: Amount,
            id: Math.ceil(Math.random(5) * 10000)
         
     
        }
       
        console.log(dataobj)

        setTitle("");
        setAmount("");
        setDate("");

        props.formData(dataobj);
        

    }


    // console.log(title, Amount, date);





    //console.log(title);


    // const Updatetitle = (e) =>{

    //     console.log(e.target.value);
    //     setTitle(e.target.value);


    // }

    // const Updatetitle = e => setTitle(e.target.value);






    //setFName("abc");

    // console.log(fname);

    return (

        <div className='form'>
            <form onSubmit={SubmitHandler}>
                <div className='Title'>
                    <label >Title</label>
                    <input type="text" className='Tietle'  onChange={e => setTitle(e.target.value)} value={title} required />
                </div>
                <div className='Amount'>

                    <label>Amount</label>
                    <input type="number" className='Amoun' onChange={e => setAmount(e.target.value)} value={Amount}required />
                
                </div>
                    
                <div className='date'>
                    <label>Date</label>
                    <input type="date" className='data' onChange={e => setDate(e.target.value)} value={date}required />
                </div>
                <button type="submit" className='Button' >Add Expense</button>
            </form>
        </div>
    );


}
export default Expenseform;