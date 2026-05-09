import { Link } from "react-router-dom";

export default function Hobby() {
  return (
    <div>
      <h2 className="Hobi">Hobbies</h2>

      <div className="hobbies-grid-2">
          <Link to="/hobby/chess">
            <button className="btn">Playing Chess</button>
          </Link>

          <Link to="/hobby/reading">
            <button className="btn">Reading Book</button>
          </Link>

          <Link to="/hobby/football">
            <button className="btn">playing football</button>
          </Link>

          <Link to="/hobby/mma">
            <button className="btn"> fighting MMA</button>
          </Link>

          <Link to="/hobby/ufc">
            <button className="btn"> waching ufc</button>
          </Link>

          <Link to="/hobby/championsLegue">
            <button className="btn"> waching football</button>
          </Link>

          <Link to="/hobby/swiming">
            <button className="btn"> swiming </button>
          </Link>
          
          <Link to="/hobby/golf">
            <button className="btn"> playing Golf </button>
          </Link>

       </div>
        <div className="footer">
          © 2025 ყველა უფლება არ არის დაცული ბაჩო წიკლაურის მიერ
        </div>
    </div>
  );
}