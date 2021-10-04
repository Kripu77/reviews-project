import React, {useState} from 'react';
import data from "./data.js";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {

    const[index, setIndex] = useState(1);
   const {name, job, image, text } = data[index]
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
    <button className="prev-btn" onClick={()=>{setIndex(index-1)}}><FaChevronLeft/> </button>
      <button className="prev-btn" onClick={()=>{setIndex(index+1)}}><FaChevronRight/> </button>
</div>
<button className="fnl-btn"> Surprise Me</button>

 
</div>

</article>



    </main>
    </>
    
}

export default Review
