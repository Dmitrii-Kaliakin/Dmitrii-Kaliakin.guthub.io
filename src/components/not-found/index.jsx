import { ReactComponent as NotFoundIcon } from "./img/ic-notfound.svg";

import { Button } from "../button";
import s from "./styles.module.css";
export function NotFound({
  children,
  title,
  buttonText = "На главную",
  buttonAction,
}) {
  return (
    <div className={s.notfound}>
      <NotFoundIcon className={s.image} aria-hidden="true" />
      <h1 className={s.title}>{title}</h1>
      {children && children}
<<<<<<< HEAD
      {buttonAction ? (
        <Button type="border" href="#" action={buttonAction}>
          {buttonText}
        </Button>
      ) : (
        <Button type="border" href="/">
          {buttonText}
        </Button>
      )}
=======
      {buttonAction ? 
        <Button type="border" href="#" action={buttonAction}>
          {buttonText}
        </Button>
       : 
        <Button type="border" href="/">
          {buttonText}{" "}
        </Button>
      }
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
    </div>
  );
}
