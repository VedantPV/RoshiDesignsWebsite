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

import GarlandPillars from "../images/rentalPictures/displayPieces/DSC_5546.jpg";
import BouquetPillars from "../images/rentalPictures/displayPieces/DSC_5549.jpg";
import Candle from "../images/rentalPictures/displayPieces/DSC_5557.jpg";
import HangingDecor from "../images/rentalPictures/displayPieces/DSC_5576.jpg";
import BangleCeremonyDecor from "../images/rentalPictures/displayPieces/DSC_5583.jpg";
import FlowerBangleArch from "../images/rentalPictures/displayPieces/DSC_5595.jpg";
import FlowerRing from "../images/rentalPictures/displayPieces/DSC_5607.jpg";
import GanpatiSign from "../images/rentalPictures/displayPieces/DSC_5617.jpg";


import { useState } from "react";


export default function RentalPage()
{
    var flowerWalls = [{img: FlowerWall1, caption: "White Flower Wall"},
        {img: FlowerWall2, caption: "Multi-Colored Wall with Lotus Flower Design"}
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

    var statues = [{img: ElephantStatue, caption: "Elephant Statue"},
        {img: GanpatiStatue, caption: "Ganpati Statue"}
    ];

    var [statueIndex, set_statue_index] = useState(0);

    function nextStatueImage()
    {
        statueIndex >= statues.length - 1 ? set_statue_index(0) : set_statue_index(statueIndex+1);
    }

    var miscDecor = [{img: DecorPiece, caption: "Jagoo/Jago"},
        {img: Hats, caption: "Rental Pagdi"},
        {img: MoneyBox, caption: "Money Holder"},
        {img: MiniDrums, caption: "Mini Dhols (drums)"}
    ];

    var [miscDecorIndex, set_misc_index] = useState(0);

    function nextMiscImage()
    {
        miscDecorIndex >= miscDecor.length - 1 ? set_misc_index(0) : set_misc_index(miscDecorIndex+1);
    }

    var displayPieces = [{img: GarlandPillars, caption: "Stage Decoration, Comes in 3 sizes!"},
        {img: BouquetPillars, caption: "Stage Decoration (Bouquet), Comes in 3 sizes as well!"},
        {img: Candle, caption: "Big Lamp with Candle inside"},
        {img: HangingDecor, caption: "Mogra Flower Hangings"},
        {img: BangleCeremonyDecor, caption: "Bangle Cermemony Decor"},
        {img: FlowerBangleArch, caption: "Mehndi Platter"},
        {img: FlowerRing, caption: "Engagment Platter"},
        {img: GanpatiSign, caption: "Ganapati Sign"}
    ];

    var [displayPieceIndex, set_DP_index] = useState(0);

    function nextDisplayPieceImage()
    {
        displayPieceIndex >= displayPieces.length - 1 ? set_DP_index(0) : set_DP_index(displayPieceIndex+1);
    }

    return (
        <div className="rentals_page">
            <title>Rental Products</title>
            <div className="rentals_details">
                <h1 style={{textDecoration: "underline"}}>Only For Current Residents in New York!</h1>
                <h1>Call our number to learn more: +1 516-724-5920</h1>
                <h2>Rent some of our finest decorations and statues for your special celebrations!</h2>
                <a href="https://linktr.ee/roshidesigns99" target="blank"><button className="linktree_button">
                    For new rental products and images, click here to view them on my social medias</button></a>
                <h2>Scroll Through Our Gallery and Click on the Image for a Enlarged View (enlarging recommended for mobile users)</h2>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>&#9880; Flower Walls &#9880;</h2>
                <div>
                    <a target="blank" href={flowerWalls[customFlowerIndex].img}>
                        <img src={flowerWalls[customFlowerIndex].img} alt="Couldn't Load" className="rental_images"></img>
                    </a>
                    <p>{flowerWalls[customFlowerIndex].caption}</p>
                    <p>{customFlowerIndex+1} of {flowerWalls.length}</p>
                    <button className="rental_next_button" onClick={() => {nextFlowerWallImage();}}>Next Flower Wall</button>
                    
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Posters</h2>
                <div>
                    <a target="blank" href={posters[posterIndex].img}>
                        <img src={posters[posterIndex].img} alt="Couldn't Load" className="rental_images"/>
                    </a>
                    <p>{posters[posterIndex].caption}</p>
                    <p>{posterIndex+1} of {posters.length}</p>
                    <button className="rental_next_button" onClick={() => {nextPosterImage();}}>Next Poster</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Statues</h2>
                <div>
                    <a target="blank" href={statues[statueIndex].img}>
                        <img src={statues[statueIndex].img} alt="Couldn't Load" className="rental_images"/>
                    </a>
                    <p>{statues[statueIndex].caption}</p>
                    <p>{statueIndex+1} of {statues.length}</p>
                    <button className="rental_next_button" onClick={() => {nextStatueImage();}}>Next Statue</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Decor and More</h2>
                <div>
                    <a target="blank" href={miscDecor[miscDecorIndex].img}>
                        <img src={miscDecor[miscDecorIndex].img} alt="Couldn't Load" className="rental_images"/>
                    </a>
                    <p>{miscDecor[miscDecorIndex].caption}</p>
                    <p>{miscDecorIndex+1} of {miscDecor.length}</p>
                    <button className="rental_next_button" onClick={() => {nextMiscImage();}}>Next Decor Piece</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Stage Decorations</h2>
                <div>
                    <a target="blank" href={displayPieces[displayPieceIndex].img}>
                        <img src={displayPieces[displayPieceIndex].img} alt="Couldn't Load" className="rental_images"/>
                        </a>
                    <p>{displayPieces[displayPieceIndex].caption}</p>
                    <p>{displayPieceIndex+1} of {displayPieces.length}</p>
                    <button className="rental_next_button" onClick={() => {nextDisplayPieceImage();}}>Next Display Piece</button>
                </div>
                <br/>
            </div>
        </div>
    );
}