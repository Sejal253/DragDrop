import React from "react";

function Board (props) {
    const drop = e => {
        e.preventDefault();
        const cardID = e.dataTransfer.getData('cardID');

        const card = document.getElementById(cardID);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div
            id = {props.d}
            className = {props.className}
            onDrop = {drop}
            onDragOver = {dragOver}
        >
            {props.children}    
        </div>
    )
}

export default Board