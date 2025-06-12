import { useEffect } from "react";

export default function StoreFront()
{

    var interval_time = 5000;
    // document.getElementById("review2").style.display = "none";
    // var review3 = document.getElementById("review3");

    // review2.style.display = "none";
    // review3.style.display = "none";
    useEffect(() => {
        var review1 = document.getElementById("review1");
        var review2 = document.getElementById("review2");
        var review3 = document.getElementById("review3");
        
        review2.style.display = "none";
        review3.style.display = "none";

    })


    function transition_one()
    {
    
    setTimeout(() =>
    {
        document.getElementById("review1").style.display = "none";

        document.getElementById("review2").style.display = "block";
        document.getElementById("review3").style.display = "none";
        transition_two();

    }, interval_time);
    } 

    function transition_two()
    {
        setTimeout(() => {

        document.getElementById("review1").style.display = "none";
        document.getElementById("review2").style.display = "none";
        document.getElementById("review3").style.display = "block";
        transition_three();
    },
    interval_time);
    } 

    function transition_three()
    {
        setTimeout(() => {

        document.getElementById("review1").style.display = "block";
        document.getElementById("review2").style.display = "none";
        document.getElementById("review3").style.display = "none";
        transition_one();
    },
    interval_time);
    }
    
    transition_one();
    return (
        <div>
            <div>
                <span id="review1">Storefront Page</span>
                <span id="review2">Review 2</span>
                <span id="review3">Review 3</span>
            </div>
            
            <div className="loading_bar">
            
            </div>
        </div>
    )
}