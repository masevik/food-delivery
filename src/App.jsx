import { SharedLayout } from 'components/SharedLayout';
import { Shop } from 'pages/Shop';
import { ShoppingCart } from 'pages/ShoppingCart';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shop />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};
