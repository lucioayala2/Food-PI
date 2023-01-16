import React from "react";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo2 from '../NavBar/logo2.png'
import './NavBar.css';


export default function NavBar(){
    const dispatch = useDispatch();
    function handleInputChangue(e) {
        e.preventDefault();
        // setName(e.target.value);
        //dispatch(paginado(1));
        //dispatch(getNamerecipes(e.target.value));
      }

    return(
        <nav>
            <div className="logo">
                <img src={logo2} alt="logo img" />
            </div>
            {/* SEARCH */}
            <div>
                <input
                    onChange={handleInputChangue}
                    type="text"
                    placeholder="What are you looking for?"
                />
            </div>
            {/* SEARCH */}

            <div>
                <button>New Recipe</button>
            </div>
        </nav>
    )
}