import { useContext } from "react";
import { CardsContext } from "../../contexts/card-context";
import { Card } from "../card";
import "./styles.css";

<<<<<<< HEAD
export function CardList({ goods }) {
=======
export function CardList() {
  const { cards: goods } = useContext(CardsContext);
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
  return (
    <div className="cards content__cards">
      {goods.map((dataItem, index) => (
        <Card key={index} {...dataItem} />
      ))}
    </div>
  );
}
