import React, {useState} from 'react';
import data from "./data.js";
import {FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight} from 'react-icons/fa';

const Review = () => {

    const[index, setIndex] = useState(1);
   const {name, job, image, text } = data[index];
   //function to check the index

   const checkIndex = (index)=>{
       if(index> data.length-1){
          return 0;
       }
       if(index < 0){
           return data.length-1;
       }
       return index;
   }
//    for random
const random = ()=>{
   let number = Math.floor( Math.random() * data.length);
   return number;

}
    return <>
    <main className="container"> 
<article>
<div className='img-container'>
<img src={image} alt={name}/>
<span className="quote-icon">
<FaQuoteRight/>

</span>
<section>
<h2 className="name"> {name}</h2>
<h3 className="Job"> {job}</h3>
<p>{text}</p>
</section>

<div className="btn-container">
    <button className="prev-btn" onClick={()=>{setIndex( (index)=>{
let newIndex = index +1;
return checkIndex( newIndex);
    } )}}><FaChevronLeft/> </button>
      <button className="prev-btn" onClick={()=>{setIndex((index)=>{
let newIndex = index-1;
return checkIndex(newIndex);
      })}}><FaChevronRight/> </button>
</div>
<button className="fnl-btn" onClick={()=>setIndex(random())}> Surprise Me</button>

 
</div>

</article>



    </main>
    </>
    
}

export default Review
