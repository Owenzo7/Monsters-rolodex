import Card from "../Card/card.component";
import "./card-list.styles.css";

const Cardlist = ({monsters}) =>  (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );


export default Cardlist;
