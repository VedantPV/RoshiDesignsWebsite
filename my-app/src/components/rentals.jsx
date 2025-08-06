import FlowerWall1 from "../images/rentalPictures/roshi_rental_flowerwall_1.jpg";
import FlowerWall2 from "../images/rentalPictures/roshi_rental_flowerwall_2.jpg";

import { useEffect, useState } from "react";

export default function RentalPage()
{
    var flowerWalls = [{img: FlowerWall1, caption: "White Flower Wall"},
        {img: FlowerWall2, caption: "Multi-Colored Wall with Flower Design"}
    ]

    var [customFlowerIndex, set_flower_index] = useState(0);
    
        function nextFlowerWallImage()
        {
            if(customFlowerIndex >= flowerWalls.length-1)
            {
                set_flower_index(0);
            }
            else
            {
                let index = customFlowerIndex;
                set_flower_index(customFlowerIndex+1);
            }
        }

    return (
        <div className="rentals_page">
            <div className="rentals_details">
                <h1 style={{textDecoration: "underline"}}>Only For Current Residents in New York</h1>
                <h1>Call our number to learn more: _______</h1>
                <p>Rent some of our finest decorations and statues for your special celebrations!</p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>&#9880; Flower Walls &#9880;</h2>
                <div>
                    <img src={flowerWalls[customFlowerIndex].img} className="rental_images"></img>
                    <p>{flowerWalls[customFlowerIndex].caption}</p>
                    <p>{customFlowerIndex+1} of {flowerWalls.length}</p>
                    <button className="rental_next_button" onClick={() => {nextFlowerWallImage();}}>Next Flower Wall</button>
                    
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>More Rentals...</h2>
            </div>
        </div>
    );
}