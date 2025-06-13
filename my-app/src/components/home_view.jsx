import { useEffect, useState } from "react";
import InstagramLogo from "../images/instagram-logo-instagram-icon-transparent-free-png.webp"
import TikTokLogo from "../images/tiktoklogo.png"

export default function HomePage()
{
        var interval_time = 6000;

        var reviews = ["'Very nice clip-in rose...great packaging...looking forward to wearing it!' - stgeorges",
            "'envelopes are good i am happy' - Manisha",
            "'Beautiful garland, fast postal, thank you' - Gary",
            "'This flower is gorgeous! I removed the comb and added a pin back. The quality is excellent. It arrived quickly and was packed well. Great seller!' - Patrice",
            "'I love it! I haven't put it up yet bc I need to buy a frame but it looks so pretty and I can't wait for it to work its magic💚' - Kingguela",
            "'This is beautiful 🤩 I am so impressed'"
        ]

        var [review_static, set_review_static] = useState(false);

        useEffect(() => {
            var review_auto = document.getElementById("review_auto");
            console.log(review_auto);
            if(review_auto)
            {
                review_auto.textContent = reviews[0];
            }
            
            var review_manual = document.getElementById("review_manual");
            console.log(review_manual);
            if(review_manual)
            {
                review_manual.textContent = reviews[0];
            }
            
            
        })
    
        var review_index = 1;
        console.log(review_index);
        function transition_one()
        {
        if(review_static)
        {
            return;
        }
        if(review_index >= reviews.length)
        {
            review_index = 0;
        }
        const timer = setTimeout(() =>
        {
            if(document.getElementById("review_auto"))
            {
                document.getElementById("review_auto").textContent = reviews[review_index];
                review_index++;
                transition_one();
            }
            

        }, interval_time);
        }     

        const setReviewsToStatic = () => {
            set_review_static(true);
        }

        const manualNextReview = () =>
        {
            console.log("Manually moving to next review")
            console.log("review index: ", review_index);
            console.log("Next review: ", reviews[review_index]);
            if(review_index >= reviews.length)
            {
            review_index = 0;
            }

            console.log("review index: ", review_index);
            if(document.getElementById("review_manual"))
            {
                console.log("Next review: ", reviews[review_index]);
                document.getElementById("review_manual").textContent = reviews[review_index];
                review_index++;
            }
            
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
                    {!review_static && 
                    <div>
                        <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                        <br/> 
                        <span id="review_auto"></span>
                    
                         <br/>
                         <br/>
                         <br/>
                        <div className="loading_bar"/>
                        {/* <button onClick={() => {setReviewsToStatic(); manualNextReview();}}>Next</button> */}
                        <div className="next_button" onClick={() => {setReviewsToStatic(); manualNextReview();}}>Click for next review</div>
                    </div>}
                    {review_static && 
                    <div>
                        <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                        <br/> 
                        <span id="review_manual"></span>
                    
                         <br/>
                         <br/>
                        <div className="next_button" onClick={() => {manualNextReview();}}>Click for next review</div>
                    </div>}
                    
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