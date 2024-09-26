import { IText } from "./interfaces";
import "./styles.css";
function Text({ className, children, ...props }: IText) {
  return (
    <div className={`text-base ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Text;
