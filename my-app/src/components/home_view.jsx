import InstagramLogo from "../images/instagram-logo-instagram-icon-transparent-free-png.webp"
import TikTokLogo from "../images/tiktoklogo.png"

export default function HomePage()
{
    return(
        <div className="home_page">
            <div className="home_page_details">
                <h1>Welcome to Roshi Designs</h1>
                <br/>
                <p>Here we sell quality and homemade garlands, baskets, and more!</p>
            
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