import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Shop</Link>
      <Link to="/cart">Shopping Cart</Link>
    </nav>
  );
};
