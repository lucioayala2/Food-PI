import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
            {/* SEARCH */}
            <div>
                <input
                    onChange={handleInputChangue}
                    type="text"
                    placeholder="What are you looking for?"
                />
            </div>
            {/* SEARCH */}
        </nav>
    )
}