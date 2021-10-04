import React, {useState} from 'react';
import data from "./data.js";
import {FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight} from 'react-icons/fa';

const Review = () => {

    const[index, setIndex] = useState(0);
   const {name, job, image, text } = data[index];
   //function to check the index
const checkFn =(index)=>{
    if(index>data.length-1){
        return 0;
    }
    if(index<0){
        return data.length-1;
    }
    return index;
}

//generate random quotes

const randomBtn = ()=>{
    let newIndex = Math.floor(Math.random()*data.length);
    console.log(newIndex+1)

return newIndex}

    return <>
    <main className="container"> 
<article>
<div className='img-container'>
<img src={image} alt={name}/>
<span className="quote-icon">
<FaQuoteRight/>


</span>
</div>
<section>
<h2 className="name"> {name}</h2>
<h3 className="Job"> {job}</h3>
<p>{text}</p>
</section>

<div className="btn-container">
  <button className='prev-btn' onClick={
      ()=>setIndex(checkFn(index+1))
  }> <FaChevronLeft/> </button>
  <button className='prev-btn2'onClick={()=>setIndex(checkFn(index-1))}> <FaChevronRight/></button>
 
</div>
<button className="fnl-btn" onClick={
  ()=>setIndex(randomBtn)
}> Surprise Me</button>

</article>



    </main>
    </>
    
}

export default Review
