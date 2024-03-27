import Image from "next/image";
import Favourite from "./favourite";
import Indicator from "./indicator";
export default function Card() {
    return (
        <div className="indicator">
          <Indicator/>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoe" /></figure>
            <div className="card-body">
              <h2 className="card-title">Nike Revolution II</h2>
              <p>The next generation of Air technology is here.</p>
              <div className="card-actions justify-end">
                <Favourite/>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
    );
  }