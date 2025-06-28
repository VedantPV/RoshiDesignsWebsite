import FlowerWall1 from "../images/roshi_rental_flowerwall_1.jpg";
import FlowerWall2 from "../images/roshi_rental_flowerwall_2.jpg";

export default function RentalPage()
{
    return (
        <div className="rentals_page">
            <div className="rentals_details">
                <h1 style={{textDecoration: "underline"}}>Only For Current Residents in New York</h1>
                <p>Rent some of our finest decorations and statues for your special celebrations!</p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Flower Walls</h2>
                <img src={FlowerWall1} className="rental_images"></img>
                <p>White Flower Wall</p>
                <br></br>
                <img src={FlowerWall2} className="rental_images"></img>
                <p>Multi-Colored Wall with Flower Design</p>
            </div>
        </div>
    );
}