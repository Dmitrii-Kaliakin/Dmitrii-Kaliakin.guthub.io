import cn from "classnames";
import { Button } from "../button";

import s from "./styles.module.css";

export function Header({ children, user, onUpdateUser }) {
  const handleClickButtonEdit = () => {
    onUpdateUser({ name: "Дмитрий", about: "Разработчик" });
  };

  return (
    <header className={s.header}>
      <div className={cn("container", s.wrapper)}>
        {children}
        <div>
          <div>
            {user?.name}: {user?.about}
          </div>
          <div>{user?.email}</div>
        </div>
        <Button action={handleClickButtonEdit}>Изменить</Button>
      </div>
    </header>
  );
}
