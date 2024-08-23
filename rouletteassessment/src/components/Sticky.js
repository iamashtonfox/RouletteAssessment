import React from "react";



const Sticky =({title,content, onclick})=>{
    return(
        <div className="sticky">
            <div className="sticky-header">
                <div>
                    <p className="sticky-title">{title}</p>
                </div>
                <div>
                    <a href="#" onClick={onclick} className="close">X</a>
                </div>
            </div>
            <div className="sticky-content">
                <p>{content}</p>
            </div>
        </div>

    )
}

export {Sticky}