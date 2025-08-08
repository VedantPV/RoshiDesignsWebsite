import BabyBlueBasket from "../images/customBaskets/BabyBlueBasket.jpg"
import BasketWithSweets from "../images/customBaskets/BasketWithSweets.jpg"
import BlueBasket from "../images/customBaskets/BlueBasket.jpg"
import BridalBasket from "../images/customBaskets/BridalBasket.jpg"
import CandyBasket from "../images/customBaskets/CandyBasket.jpg"
import CraisinsBasket from "../images/customBaskets/CraisinsBasket.jpg"
import FruitBasket1 from "../images/customBaskets/FruitBasket1.jpg"
import FruitBasket2 from "../images/customBaskets/FruitBasket2.jpg"
import FruitBasket3 from "../images/customBaskets/FruitBasket3.jpg"
import NutsBasket from "../images/customBaskets/NutsBasket.jpg"
import RedBasket from "../images/customBaskets/RedBasket.jpg"

import FlowerMat1 from "../images/rentalPictures/flowerMats/DSC_5619.jpg";
import FlowerMat2 from "../images/rentalPictures/flowerMats/DSC_5623.jpg";
import FlowerMat3 from "../images/rentalPictures/flowerMats/DSC_5624.jpg";
import FlowerMat4 from "../images/rentalPictures/flowerMats/DSC_5630.jpg";
import FlowerMat5 from "../images/rentalPictures/flowerMats/DSC_5633.jpg";

import BookStand from "../images/otherCustomProducts/bookstand.jpg";
import GiftPackage1 from "../images/otherCustomProducts/giftpackaging1.jpg";
import GiftPackage2 from "../images/otherCustomProducts/giftpackaging2.jpg";
import GoldNutContainer from "../images/otherCustomProducts/GoldNutContainer.jpg";
import PoojaStand1 from "../images/otherCustomProducts/poojastand1.jpg";
import PoojaStand2 from "../images/otherCustomProducts/poojastand2.jpg";

import { useState } from "react";

export default function CustomPurchasePage()
{
    var customBaskets = [{caption: "Perfect for Baby Showers", photoSource: BabyBlueBasket},
        {caption: "Snack Basket and Sweet Platter", photoSource: BasketWithSweets},
        {caption: "Birthday Basket", photoSource: BlueBasket},
        {caption: "Bridal Lengha Basket", photoSource: BridalBasket},
        {caption: "Chocolate Boqquet", photoSource: CandyBasket},
        {caption: "Snacks Basket 2", photoSource: CraisinsBasket},
        {caption: "Fruit Baskets", photoSource: FruitBasket1},
        {caption: "Fruit Baskets", photoSource: FruitBasket2},
        {caption: "Fruit Baskets", photoSource: FruitBasket3},
        {caption: "Dry Fruit Basket", photoSource: NutsBasket},
        {caption: "Dry Fruit Basket", photoSource: RedBasket}
    ];

    var [customBasketsIndex, set_basket_index] = useState(0);

    function nextBasketImage()
    {
        if(customBasketsIndex >= customBaskets.length-1)
        {
            set_basket_index(0);
        }
        else
        {
            set_basket_index(customBasketsIndex+1);
        }
    }
    var flowerMats = [{img: FlowerMat1, caption: "Circular Multi-Colored Mat (Angle 1)"}, 
            {img: FlowerMat2, caption: "Circular Multi-Colored Mat (Angle 2)"},
            {img: FlowerMat3, caption: "Red Lotus Flower Mat"},
            {img: FlowerMat4, caption: "Orange and Red Flower Mat"},
            {img: FlowerMat5, caption: "Leafy Semi-Circle Flower Mat"}
        ];
    
        const [currentMatIndex, set_mat_index] = useState(0);
    
        function nextMatImage()
        {
            currentMatIndex >= flowerMats.length - 1 ? set_mat_index(0) : set_mat_index(currentMatIndex+1);
        }

    return(
        <div className="custom_purchases_page">
            <div className="custom_purchases_details">
                <h1>Custom Purchase Page</h1>
                <br/>
                <p>We do custom products and designs alongside our current inventory!</p>
                <p>Call us to learn more and order custom products: _______</p>
                <p>Scroll Through Our Gallery and Click on the Image for a Enlarged View</p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Baskets</h2>
                <div>
                    <a target="blank" href={customBaskets[customBasketsIndex].photoSource}>
                        <img src={customBaskets[customBasketsIndex].photoSource} alt="Couldn't Load" className="custom_purchases_images"></img>
                    </a>
                    <p>{customBaskets[customBasketsIndex].caption}</p>
                    <p>{customBasketsIndex+1} Of {customBaskets.length}</p>
                    <button className="next_button" onClick={() => {nextBasketImage();}}>Next Basket</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Rangoli Mats</h2>
                <div>
                    <a target="blank" href={flowerMats[currentMatIndex].img}>
                        <img src={flowerMats[currentMatIndex].img} alt="Couldn't Load" className="custom_purchases_images"></img>
                        </a>
                    <p>{flowerMats[currentMatIndex].caption}</p>
                    <p>{currentMatIndex+1} Of {flowerMats.length}</p>
                    <button className="next_button" onClick={() => {nextMatImage();}}>Next Rangoli Mat</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Custom Gift Packaging</h2>
                <a target="blank" href={GiftPackage1}><img src={GiftPackage1} alt="Couldn't Load" className="custom_purchases_images"/>
                </a>
                <p>Custom Gift Wrapping</p>
                <a target="blank" href={GiftPackage2}>
                    <img src={GiftPackage2} alt="Couldn't Load" className="custom_purchases_images"/>
                </a>
                <p>Bridal Gift Basket in Custom Wrapping</p>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Nut Trays and Displays</h2>
                <a target="blank" href={GoldNutContainer}><img src={GoldNutContainer} alt="Couldn't Load" className="custom_purchases_images"/>
                </a>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Puja Stands for Ceremonies</h2>
                <a target="blank" href={PoojaStand1}>
                    <img src={PoojaStand1} alt="Couldn't Load" className="custom_purchases_images"/></a>
                <p>Puja Stand</p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Miscellaneous</h2>
                <a target="blank" href={BookStand}><img src={BookStand} alt="Couldn't Load" className="custom_purchases_images"
                /></a>
                <p>Sahe Chithi/Wedding Card Display</p>
                <a target="blank" href={PoojaStand2}><img src={PoojaStand2} alt="Couldn't Load" className="custom_purchases_images"/>
                </a>
                <p>Sahe Chithi/Wedding Card Display</p>
                
            </div>          
        </div>
    )
}