import React, {useState} from 'react';
import data from "./data.js";
import {FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
    //as we only want one item at a time there's no need to map or loop through the data
    //using state hook we can simply set the desired index and display as the user clicks the button
    
    const [index, setIndex] = useState(0);
    const{name,job, image, text} = data[index];
//to check the status of index
const checkIn = (index)=>{
    if(index>data.length-1){
        return 0;
    }
    if(index<0){
return data.length-1;
    }
    return index;
}

//suprise me function which will trigger random index, we make use of math function

const randomF = ()=>{
    let newIndex = Math.floor(Math.random()*data.length);
 if(newIndex==index){
     newIndex += 1 //this is to avoid the repetion which occurs on someclick
 
 
    }

    setIndex(newIndex);
}
    return <main>
    <article className="container">
        <img src={image} alt={name}/>
        <section className="">
<h3 className="name">{name}</h3>
<h4 className="Job"> {job}</h4>
<p> {text}</p>
        </section>
<div className="btn-container">
<button className="prev-btn" onClick={()=>{ setIndex(()=>checkIn(index-1))


}}><FaChevronLeft/></button>
<button className="prev-btn2" onClick={()=>{setIndex(()=>checkIn(index+1))}}><FaChevronRight/></button>

</div>
<button className="fnl-btn" onClick= {()=>randomF()}> Surprise Me</button>
    </article>
    
    </main>
}

export default Review
