
export default function MenuBar(
    {home_view, custom_purchase_view, rental_view, storefront_view}
)
{
    return(
       <div>
        <div className="menuBar">
            <a className="menuBarItems" href={`/${home_view}`}><span>Home</span></a>
            <a className="menuBarItems" href={`/${storefront_view}`}><span>StoreFront</span></a>
            <a className="menuBarItems" href={`/${custom_purchase_view}`}><span>Custom Purchases</span></a>
            <a className="menuBarItems" href={`/${rental_view}`}><span>Rentals</span></a>
        </div>
           
       </div>
    )
}