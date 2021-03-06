import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2> Your Shopping Cart </h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={`cItem${item.id}`} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
