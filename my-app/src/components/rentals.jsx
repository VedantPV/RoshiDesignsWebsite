import FlowerWall1 from "../images/roshi_rental_flowerwall_1.jpg";
import FlowerWall2 from "../images/roshi_rental_flowerwall_2.jpg";

export default function RentalPage()
{
    var rentals = [{img: localStorage, caption: "blem"}]

    return (
        <div className="rentals_page">
            <div className="rentals_details">
                <h1 style={{textDecoration: "underline"}}>Only For Current Residents in New York</h1>
                <h1>Call our number to learn more: _______</h1>
                <p>Rent some of our finest decorations and statues for your special celebrations!</p>
                <h2 style={{textDecoration: "underline", fontStyle: "italic"}}>Flower Walls</h2>
                <p>White Flower Wall</p>
                <img src={FlowerWall1} className="rental_images"></img>
                <br></br>
                <p>Multi-Colored Wall with Flower Design</p>
                <img src={FlowerWall2} className="rental_images"></img>
                
            </div>
        </div>
    );
}