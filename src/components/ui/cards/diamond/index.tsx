import "./styles.css";
import { Card } from "@mui/material";
import { ICardDiamond } from "./interfaces";
import Text from "@components/controllers/text";
import { Spacer } from "@components/controllers";
import SampleItemImage from "@assets/sample-item.jpg";

function DiamondCard({
  data,
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
      <Text>Price: ${data.price}</Text>
      <Spacer size={10} />
      <Text>Lab Diamond: {data.isLabDiamond ? "Yes" : "No"}</Text>
      <Spacer size={10} />
      <Text>Shape: {data.shape}</Text>
      <Spacer size={10} />
      <Text>Carat: {data.carat}</Text>
      <Spacer size={10} />
      <Text>Clarity: {data.clarity}</Text>
      <Spacer size={10} />
      <Text>Cut: {data.cut}</Text>
      <Spacer size={10} />
      <Text>Color: {data.color}</Text>
      <Spacer size={10} />
    </Card>
  );
}

export default DiamondCard;
