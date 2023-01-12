import React from "react";
import {Link} from 'react-router-dom';
import './main.css';

export default function Main(){
        return(
            <div className="background">
                <h1>Shokugeki</h1>
                <Link to='/home'>
                    <button className="button" >
                        <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">Enter</span>
                        </span>
                    </button>
                </Link>
            </div>
        )
    }
