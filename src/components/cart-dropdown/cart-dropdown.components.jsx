import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { selectCartItems,selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

export default function CartDropDown() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
