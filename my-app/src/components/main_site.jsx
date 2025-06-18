import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import MenuBar from "./menu_banner";
import HomePage from "./home_view";
import RentalPage from "./rentals";
import StoreFront from "./store_view";
import CustomPurchasePage from "./custom_purchases_view";
import Footer from "./footer";

export default function RoshiDesignsSite()
{
    return (
        <div className="MainSite">
            <BrowserRouter>
                <MenuBar
                home_view=""
                custom_purchase_view="custompurchases"
                rental_view="rentals"
                storefront_view="storefront"
                />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/custompurchases" element={<CustomPurchasePage/>}/>
                    <Route path="/rentals" element={<RentalPage/>}/>
                    
                </Routes>
                
                <Footer/>
            </BrowserRouter>

                
        
            
        </div>
    )
}