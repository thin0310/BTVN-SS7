import React from "react";
import {FaArrowCircleUp} from "react-icons/fa";
import './App.css';
import { useEffect,useState } from "react";
const Bai1 = () =>{
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const BackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        });
    };
  
       
    return (
       
        <div className="container">
       
        <h1>Lorem Ipsum</h1>
  
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae ratione sunt nulla doloremque commodi vero accusamus nemo voluptatibus error, quod ea consectetur voluptatem debitis vel. Culpa mollitia temporibus sed.</p>
     
        {showTopBtn && (
  <button id='backTop' onClick={BackToTop}>
   <FaArrowCircleUp></FaArrowCircleUp>
  </button>

       )}


 
  </div>



    )
}

export default Bai1