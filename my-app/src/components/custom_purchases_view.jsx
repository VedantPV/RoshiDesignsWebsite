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
            let index = customBasketsIndex;
            set_basket_index(customBasketsIndex+1);
        }
    }

    return(
        <div className="custom_purchases_page">
            <div className="custom_purchases_details">
                <h1>Custom Purchase Page</h1>
                <br/>
                <p>We do custom products and designs alongside our current inventory!</p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Baskets</h2>
                
                
                <div>
                    <img src={customBaskets[customBasketsIndex].photoSource} className="custom_purchases_images"></img>
                    <p>{customBaskets[customBasketsIndex].caption}</p>
                    <p>{customBasketsIndex+1} Of {customBaskets.length}</p>
                    <button className="next_button" onClick={() => {nextBasketImage();}}>Next Basket</button>
                </div>
                
                
            </div>          
        </div>
    )
}