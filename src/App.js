import arrow from './images/icon-arrow.svg'
import background from "./images/pattern-bg-desktop.png"


/* https://geo.ipify.org/service/account-balance?apiKey=at_sqNrihUZ3GHNtZGxrwzk8g4R0aI9R */

function App() {
  return (
    <section>
      <div>
        <img src= {background} alt ="" className="w-full" h-80 />
      </div>

      <article>
        <h1>IP Address Tracker</h1>
        <form>
          <input type="text" name="ipaddress" id="ipaddress" placeholder="Search for any IP Address or domain" />
          <button type="submit">
            <img src={arrow} alt="Arrow icon" />   
          </button>
        </form>
      </article>
    </section>
  );
}

export default App;
