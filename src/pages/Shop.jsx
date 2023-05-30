import { Box } from 'components/Box';
import { BuyList } from 'components/BuyList/BuyList';
import { SideBar } from 'components/SideBar/SideBar';

export const Shop = () => {
  return (
    <Box display="flex">
      <SideBar />
      <BuyList />
    </Box>
  );
};
