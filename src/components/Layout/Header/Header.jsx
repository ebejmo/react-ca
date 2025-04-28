import CartIcon from '../CartIcon/CartIcon';

function Header() {
  return (
    <div>
      This is a Header <CartIcon cartCount={3} />
    </div>
  );
}

export default Header;
