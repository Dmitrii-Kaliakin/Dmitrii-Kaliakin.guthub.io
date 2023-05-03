<<<<<<< HEAD
import { useContext } from "react";
=======
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
import { CardList } from "../../components/card-list";
import { Sort } from "../../components/sort";
import { Spinner } from "../../components/spinner";

import s from "./styles.module.css";
<<<<<<< HEAD
import { CardsContext } from "../../contexts/card-context";
import { ContentHeader } from "../../components/content-header";
import { TABS } from "../../utils/constants";

export const CatalogPage = () => {
  const { cards: goods } = useContext(CardsContext);
  return (
    <>
      <ContentHeader title="Каталог" textButton="Главная" to="/" />
      <Sort
        tabs={TABS}
        currentSort="discount"
        onChangeSort={(data) => console.log(data)}
      />
      <CardList goods={goods} />
=======

export const CatalogPage = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Sort />
          <CardList />
        </>
      )}
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
    </>
  );
};
