import InstagramLogo from "../images/instagram-logo-instagram-icon-transparent-free-png.webp"
import TikTokLogo from "../images/tiktoklogo.png"

export default function HomePage()
{
    return(
        <div className="home_page">
            <div className="home_page_details">
                <h1>Welcome to Roshi Designs</h1>
                <br/>
                <br/>
                <p>Here we sell quality and homemade garlands, baskets, and more!</p>
                <br/>
                <br/>
                <p>Follow us on our social medias to learn about updates to our
                    store front and new product arrivals! Also click the TikTok link to join our livestreams 
                    and watch how we create our products by hand!
                </p>
                
            </div>
            <div className="social_media_logos">
                    <img src={InstagramLogo} style={{width: "140px"}}/>
                    <img src={TikTokLogo} style={{width: "100px"}}/>
            </div>
        </div>
    );
}