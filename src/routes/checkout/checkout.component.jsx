import { useSelector } from "react-redux/es/exports";

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
    return (
        <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map((cartItem) => {
            return (
                <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
            )
        })
      }
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
    )
}
