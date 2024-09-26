import { IContainer } from "./interfaces";
import "./styles.css";
function Container({ children, ...rest }: IContainer) {
  return <div className={`container-base ${rest.className}`} {...rest}>{children}</div>;
}

export default Container;
