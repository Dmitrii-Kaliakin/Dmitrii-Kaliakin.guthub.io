import "./styles.css";
<<<<<<< HEAD
import logoSrc from './assets/logo.svg';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export function Logo({ className, href, ...props }) {
  const hrefValue = href ? href : null;
  return (
    hrefValue
      ? <Link replace to={{ pathname: hrefValue }} className={cn("logo", { className: !!className })}>
        <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
      </Link>
      : <span className={`${className} logo`} {...props}>
        <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
      </span>
=======
import logoSrc from "./assets/logo.svg";
import { Link } from "react-router-dom";
import cn from "classnames";

export function Logo({ className, href, ...props }) {
  const hrefValue = href ? href : null;
  return hrefValue ? (
    <Link
      replace
      to={{ pathname: hrefValue }}
      className={cn("logo", { className: !!className })}
    >
      <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
    </Link>
  ) : (
    <span className={`${className} logo`} {...props}>
      <img src={logoSrc} alt="Логотип компании" className="logo__pic" />
    </span>
>>>>>>> 25efa98f8b6dfeb23cd333ded8e02fa3cd31d7f2
  );
}