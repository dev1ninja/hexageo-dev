import { Box, Typography } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RoundButton from "../components/common/RoundButton";
import PageLayout from "../containers/layout/PageLayout";
import MiningHardwares from "../containers/dashboard/MiningHardwares";
import WalletsList from "../containers/dashboard/WalletsList";
import AddWallet from "../containers/dashboard/AddWallet";
import HardwareShop from "../containers/dashboard/HardwareShop";

function Dashboard() {
  return (
    <PageLayout>
      <Box display="flex" pt={10} justifyContent="space-between">
        <RoundButton
          variant="contained"
          color="tertiary"
          type="button"
          mb={2}
          startIcon={<AddTaskIcon color="primary" />}
        >
          <Typography variant="h6" color="primary">Add New Hotspot / Mining Hardware</Typography>
        </RoundButton>
        <RoundButton
          variant="contained"
          color="secondary"
          type="button"
          mb={2}
          startIcon={<AddShoppingCartIcon color="primary" />}
        >
          <Typography variant="h6" color="primary">Purchase Hotspot / Mining Hardware</Typography>
        </RoundButton>
      </Box>
      <MiningHardwares />
      <WalletsList />
      <AddWallet />
      <HardwareShop />
    </PageLayout>
  );
}

export default Dashboard;