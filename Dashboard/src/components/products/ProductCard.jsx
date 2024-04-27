/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 140,
  },
});

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        // eslint-disable-next-line react/prop-types
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="body1" component="p">
          Price: ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
