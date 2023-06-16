import PropTypes from 'prop-types';

const TiendaItems = ({ id, name, image, price, description, stock }) => {
  return (
    <div>
      <img src={image}  width="100px" alt="" />
      <h3>{name}</h3>
      <p> {price}</p>
      <button>Agregar al carrito</button> 
    </div>
  );
};

// TiendaItems.propTypes = {
//   id: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.text.isRequired,
//   stock: PropTypes.number.isRequired,
// };

export default TiendaItems;

//npm i @material-ui/core @material-ui/icons

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import {AddShoppingCart} from '@material-ui/icons';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function TiendaItems() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
        // action={
        //   <Typography
        //     // className=
        //     variant='h5'
        //     color='textSecondary'
        //     >
        //     {accounting.formatMoney(price, "$")}
        //   </Typography>
        // }
//         title={name}
//         subheader="En stock"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={image}
//         alt="Producto"
//       />
//       <CardActions disableSpacing>
//         <IconButton aria-label="Agregar al carrito" onClick={addToBasket}>
//           <AddShoppingCart fontSize="large" />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
        // <CardContent>
        //   <Typography paragraph> {description} />
        // </CardContent>
//       </Collapse>
//     </Card>
//   );
// }