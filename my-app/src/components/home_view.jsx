import RoshiDesignsLogo from "../images/logos/RoshiDesigns99FullLogo.jpg";

export default function HomePage()
{

    return(
        <div className="home_page">
            <title>Home Page</title>
            <div className="home_page_details">
                <h1>Welcome to RoshiDesigns99</h1>
                <img src={RoshiDesignsLogo} className="custom_purchases_images" alt="Unable to Load"/>
                <br/>
                <h1>
                    About Me:
                </h1>
                <div className="about_me_container">
                    <h3>Welcome to RoshiDesigns99!</h3>
                    <h3>I’m Roshi, the heart and hands behind every creation you see here. I specialize in bringing your celebrations to life with custom orders and stunning displays for weddings, bridal showers, baby showers, birthdays, Indian weddings, and festivals.</h3>
                    <h3>From elegant gift baskets to eye-catching backdrops, Ganesh statue rentals, and decorative stands, every piece is crafted with care to make your event unforgettable.</h3>
                    <h3>Join me live on TikTok daily to see what I’m working on in real time, and follow my social media for the latest updates, behind-the-scenes moments, and new product releases.</h3>
                </div>
                
                <a href="https://linktr.ee/roshidesigns99" target="blank"><button className="linktree_button">
                    For the latest custom products and images, click/tap here to view them on my social medias</button></a>
            
            </div>
            
            
        </div>
    );
}