import FlowerWall1 from "../images/rentalPictures/roshi_rental_flowerwall_1.jpg";
import FlowerWall2 from "../images/rentalPictures/roshi_rental_flowerwall_2.jpg";

import Poster1 from "../images/rentalPictures/posters/DSC_5524.jpg";
import Poster2 from "../images/rentalPictures/posters/DSC_5528.jpg";
import Poster3 from "../images/rentalPictures/posters/DSC_5531.jpg";

import ElephantStatue from "../images/rentalPictures/statues/DSC_5517.jpg";
import GanpatiStatue from "../images/rentalPictures/statues/DSC_5639.jpg";

import DecorPiece from "../images/rentalPictures/miscellaneous/DSC_5538.jpg";
import Hats from "../images/rentalPictures/miscellaneous/DSC_5561.jpg";
import MoneyBox from "../images/rentalPictures/miscellaneous/DSC_5572.jpg";
import MiniDrums from "../images/rentalPictures/miscellaneous/DSC_5615.jpg";

import { captureOwnerStack, useEffect, useState } from "react";


export default function RentalPage()
{
    var flowerWalls = [{img: FlowerWall1, caption: "White Flower Wall"},
        {img: FlowerWall2, caption: "Multi-Colored Wall with Flower Design"}
    ];
    var [customFlowerIndex, set_flower_index] = useState(0);

    function nextFlowerWallImage()
    {
        customFlowerIndex >= flowerWalls.length-1 ? set_flower_index(0) : set_flower_index(customFlowerIndex+1);
    }

    var posters = [{img: Poster1, caption: "Garba Night Poster"}, {img: Poster2, caption: "Bangle and Bindi Poster"},
        {img: Poster3, caption: "Haldi Ceremony Poster"}
    ];
    var [posterIndex, set_poster_index] = useState(0);

    function nextPosterImage()
    {
        posterIndex >= posters.length - 1 ? set_poster_index(0) : set_poster_index(posterIndex+1);
    }

    var statues = [{img: ElephantStatue, caption: "Gold Elephant Statue"},
        {img: GanpatiStatue, caption: "Gold Ganpati Statue"}
    ];

    var [statueIndex, set_statue_index] = useState(0);

    function nextStatueImage()
    {
        statueIndex >= statues.length - 1 ? set_statue_index(0) : set_statue_index(statueIndex+1);
    }

    var miscDecor = [{img: DecorPiece, caption: "Tiered Decoration Piece"},
        {img: Hats, caption: "Colored Hats for festivities"},
        {img: MoneyBox, caption: "Money Box"},
        {img: MiniDrums, caption: "Mini Dhols (drums)"}
    ];

    var [miscDecorIndex, set_misc_index] = useState(0);

    function nextMiscImage()
    {
        miscDecorIndex >= miscDecor.length - 1 ? set_misc_index(0) : set_misc_index(miscDecorIndex+1);
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
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Posters</h2>
                <div>
                    <img src={posters[posterIndex].img} className="rental_images"/>
                    <p>{posters[posterIndex].caption}</p>
                    <p>{posterIndex+1} of {posters.length}</p>
                    <button className="rental_next_button" onClick={() => {nextPosterImage();}}>Next Poster</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Statues</h2>
                <div>
                    <img src={statues[statueIndex].img} className="rental_images"/>
                    <p>{statues[statueIndex].caption}</p>
                    <p>{statueIndex+1} of {statues.length}</p>
                    <button className="rental_next_button" onClick={() => {nextStatueImage();}}>Next Statue</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Decor and More</h2>
                <div>
                    <img src={miscDecor[miscDecorIndex].img} className="rental_images"/>
                    <p>{miscDecor[miscDecorIndex].caption}</p>
                    <p>{miscDecorIndex+1} of {miscDecor.length}</p>
                    <button className="rental_next_button" onClick={() => {nextMiscImage();}}>Next Decor Piece</button>
                </div>
            </div>
        </div>
    );
}