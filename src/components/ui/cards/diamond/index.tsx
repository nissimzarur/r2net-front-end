import "./styles.css";
import { Card } from "@mui/material";
import { ICardDiamond } from "./interfaces";
import Text from "@components/controllers/text";
import { Spacer } from "@components/controllers";
import SampleItemImage from "@assets/sample-item.jpg";

function DiamondCard({
  isLabDiamond,
  price,
  shape,
  className,
  ...props
}: ICardDiamond) {
  return (
    <Card
      {...props}
      className={`diamond-card-base ${className}`}
      variant="elevation"
    >
      <img src={SampleItemImage} alt="Sample Item" className="diamond-image" />
      <Spacer size={15} />
      <Text>Price: ${price}</Text>
      <Spacer size={10} />
      <Text>Lab Diamond: {isLabDiamond ? "Yes" : "No"}</Text>
      <Spacer size={10} />
      <Text>Shape: {shape}</Text>
    </Card>
  );
}

export default DiamondCard;
