import { useEffect } from "react";
import InstagramLogo from "../images/instagram-logo-instagram-icon-transparent-free-png.webp"
import TikTokLogo from "../images/tiktoklogo.png"

export default function HomePage()
{
        var interval_time = 5000;

        useEffect(() => {
            var review_1 = document.getElementById("review_1");
            var review_2 = document.getElementById("review_2");
            var review_3 = document.getElementById("review_3");

            review_1.style.display = "block"; 
            review_2.style.display = "none";
            review_3.style.display = "none";
        })
    
    
    
        function transition_one()
        {
        
        setTimeout(() =>
        {
            document.getElementById("review_1").style.display = "none";
    
            document.getElementById("review_2").style.display = "block";
            document.getElementById("review_3").style.display = "none";
            transition_two();
    
        }, interval_time);
        } 
    
        function transition_two()
        {
            setTimeout(() => {
    
            document.getElementById("review_1").style.display = "none";
            document.getElementById("review_2").style.display = "none";
            document.getElementById("review_3").style.display = "block";
            transition_three();
        },
        interval_time);
        } 
    
        function transition_three()
        {
            setTimeout(() => {
    
            document.getElementById("review_1").style.display = "block";
            document.getElementById("review_2").style.display = "none";
            document.getElementById("review_3").style.display = "none";
            transition_one();
        },
        interval_time);
        }
        transition_one();

    return(
        <div className="home_page">
            <div className="home_page_details">
                <h1>Welcome to Roshi Designs</h1>
                <br/>
                <p>Here we sell quality and homemade garlands, baskets, and more!</p>
                <p>Our Wonderful Reviews:</p>
                <div className="reviews_section">
                    <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span> 
                    <span id="review_1">"Very nice clip-in rose...great packaging...looking forward to wearing it!" - stgeorges</span>
                    <span id="review_2">"envelopes are good i am happy" - Manisha</span>
                    <span id="review_3">"Beautiful garland, fast postal, thank you" - Gary</span>
                    
                    <br/>
                    <div className="loading_bar"/>
                </div>
            
                <br/>
                <p>Follow us on our social medias to learn about updates to our
                    store front and new product arrivals! 
                </p>
                <img src={InstagramLogo} style={{width: "140px"}}/>
                <br/>
                <div className="home_page_tiktok_div">
                    
                    <p>Follow our TikTok page to watch how we create our wonderful products! 
                        Join our TikTok livestreams too to ask us questions and more!
                    </p>
                    <img src={TikTokLogo} style={{width: "100px"}}/>
                    
                </div>
                <br/>
                <h1>Scroll our gallery below!</h1>
                <p>Insert Pictures here!!!!</p>
                <br/>
            
            </div>
            
            
        </div>
    );
}