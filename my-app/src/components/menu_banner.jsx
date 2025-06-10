
export default function MenuBar(
    {home_view, custom_purchase_view, rental_view, storefront_view}
)
{
    return(
       <div>
        <div className="menuBar">
            <a className="menuBarItems" href="home_view.jsx"><span>Home</span></a>
            <a className="menuBarItems" href="store_view.jsx"><span>StoreFront</span></a>
            <a className="menuBarItems" href="custom_purchases_view.jsx"><span>Custom Purchases</span></a>
            <a className="menuBarItems" href="rentals.jsx"><span>Rentals</span></a>
        </div>
           
       </div>
    )
}