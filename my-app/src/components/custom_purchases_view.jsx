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

import { useEffect, useState } from "react";

export default function CustomPurchasePage()
{
    var customBaskets = [{caption: "Perfect for Baby Showers", photoSource: BabyBlueBasket},
        {caption: "Basket With Sweets next to it", photoSource: BasketWithSweets},
        {caption: "Blue Basket", photoSource: BlueBasket},
        {caption: "Beautiful Custom Bridal Baskets", photoSource: BridalBasket},
        {caption: "Custom Candy Basket", photoSource: CandyBasket},
        {caption: "Basket with Craisins and other assortments", photoSource: CraisinsBasket},
        {caption: "Fruit Baskets", photoSource: FruitBasket1},
        {caption: "Fruit Baskets", photoSource: FruitBasket2},
        {caption: "Fruit Baskets", photoSource: FruitBasket3},
        {caption: "Nut Assortment Basket", photoSource: NutsBasket},
        {caption: "Red Basket", photoSource: RedBasket}
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
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Baskets</h2>
                <div>
                    <img src={customBaskets[customBasketsIndex].photoSource} className="custom_purchases_images"></img>
                    <p>{customBaskets[customBasketsIndex].caption}</p>
                    <p>{customBasketsIndex+1} Of {customBaskets.length}</p>
                    <button className="next_button" onClick={() => {nextBasketImage();}}>Next Basket</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Rangoli Mats</h2>
                <div>
                    <img src={flowerMats[currentMatIndex].img} className="custom_purchases_images"></img>
                    <p>{flowerMats[currentMatIndex].caption}</p>
                    <p>{currentMatIndex+1} Of {flowerMats.length}</p>
                    <button className="next_button" onClick={() => {nextMatImage();}}>Next Rangoli Mat</button>
                </div>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Custom Gift Packaging</h2>
                <img src={GiftPackage1} className="custom_purchases_images"/>
                <p></p>
                <img src={GiftPackage2} className="custom_purchases_images"/>
                <p></p>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Nut Trays and Displays</h2>
                <img src={GoldNutContainer} className="custom_purchases_images"/>
                <br/>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Puja Stands for Ceremonies</h2>
                <img src={PoojaStand1} className="custom_purchases_images"/>
                <p></p>
                <img src={PoojaStand2} className="custom_purchases_images"/>
                <p></p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Miscellaneous</h2>
                <img src={BookStand} className="custom_purchases_images"/>
                
            </div>          
        </div>
    )
}