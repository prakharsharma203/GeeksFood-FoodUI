
import "./header.css"
export function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <h2 className="p">GeekFoods</h2>
        </div>
        <div className="support">
        <span>Home</span>
         <span>Quote</span>
         <span>Restaurants</span>
         <span>Foods</span>
         <span>Contacts</span>
        </div>
        <div>
            <button className="btn">Get Started</button>
        </div>
      </nav>
    </>
  );
}
