import React from 'react';
import { Icon } from "coinmarketcap-cryptocurrency-icons";
import {
  Box,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import LoadingContainer from '../../components/common/LoadingContainer';
import RoundButton from "../../components/common/RoundButton";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.tertiary.main
  },
  tableCell: {
    textAlign: 'center',
  },
  paginator: {
    '& ul': {
      float: 'right',
      paddingTop: theme.spacing(3),
    }
  },
}));

function createData(name, location, status, coin, earnings) {
  return { name, location, status, coin, earnings };
}

const rows = [
  createData('Hexageo Router', 'Trenton/NJ/US', 'Good', 'BTC', '$30'),
  createData('Hexageo Router', 'Trenton/NJ/US', 'Reboot Needed', 'BTC', '$30'),
  createData('Blue Hexageo', 'Trenton/NJ/US', 'Good', 'BTC', '$30'),
  createData('Red Hexageo', 'Trenton/NJ/US', 'Reboot Needed', 'BTC', '$30'),
  createData('Blue Hexageo', 'Trenton/NJ/US', 'Good', 'BTC', '$30'),
];

function MiningHardwares() {
  const classes = useStyles();

  return (
    <LoadingContainer>
      <Box display="flex" pt={10} pb={5}>
        <Typography variant="h4" color="text.secondary">Hotspot / Mining</Typography>
        <Typography variant="h4" color="text.primary" pl={1}>Hardwares</Typography>
      </Box>
      <Divider sx={{ borderBottomWidth: 3, bgcolor: 'secondary.main' }} />
      <TableContainer sx={{ marginTop: 3, marginRight: -3, border: 3, borderColor: 'secondary.main', borderRadius: 5 }}>
        <Table aria-label="Hotspot/Minging Hardwares Table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><Typography variant="h5" color="secondary">Hardware Name</Typography></TableCell>
              {/* <TableCell align="center"><Typography variant="h5" color="secondary">Location</Typography></TableCell> */}
              <TableCell align="center"><Typography variant="h5" color="secondary">Location</Typography></TableCell>
              <TableCell align="center"><Typography variant="h5" color="secondary">Status</Typography></TableCell>
              <TableCell align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: 20 }}>
                <Icon i="btc" size={20} />
                <Typography variant="h5" color="secondary">Coin</Typography>
              </TableCell>
              <TableCell align="center"><Typography variant="h5" color="secondary">Earnings</Typography></TableCell>
              <TableCell align="center">
                Daily
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 20 }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">
                  <RoundButton
                    variant="contained"
                    color={row.status === 'Good' ? 'success' : 'warning'}
                    type="button"
                    size="small"
                    mt={-1.5}
                    mb={-1.5}
                    style={{ color: 'primary' }}
                  >
                    <Typography variant="button" color="primary">{row.status}</Typography>
                  </RoundButton>
                </TableCell>
                <TableCell align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: 20 }}>
                  <Icon i="btc" size={20} />
                  {row.coin}
                </TableCell>
                <TableCell align="center">{row.earnings}</TableCell>
                <TableCell align="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} >
                  <SettingsIcon color="tertiary" />
                  Settings  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={10} color="secondary" className={classes.paginator} />
    </LoadingContainer>
  )
}

export default MiningHardwares;