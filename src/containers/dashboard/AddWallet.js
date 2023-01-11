import React from 'react';
import { Icon } from "coinmarketcap-cryptocurrency-icons";
import { Box, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import LoadingContainer from '../../components/common/LoadingContainer';
import RoundButton from '../../components/common/RoundButton';

const useStyles = makeStyles((theme) => ({
  select: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.text.tertiary,
      borderRadius: 10,
    }
  },
}));

function AddWallet() {
  const classes = useStyles();

  return (
    <LoadingContainer>
      <Box display="flex" pt={15}>
        <Box sx={{ width: '50%', border: 3, borderColor: 'secondary.main', borderRadius: 5 }} p={5}>
          <Typography variant="h4" textAlign="center" color="text.tertiary">Add New Wallet</Typography>
          <Typography variant="h5" pt={3} pb={2}>Choose Payment Methods</Typography>
          <Box display="flex" pb={2}>
            <CheckCircleIcon color="tertiary" />
            <Typography pl={1}>Cryptocurrency (BTC, ETH, LTC, ....)</Typography>
          </Box>
          <FormControl fullWidth className={classes.select}>
            <InputLabel>
              <Box display="flex">
                <Icon i="btc" size={20} />
                <Typography pl={1} color="text.primary">Select Cryptocurrency *</Typography>
              </Box>
            </InputLabel>
            <Select
              // value={age}
              // onChange={handleChange}
            />
          </FormControl>
          <Box pb={2} />
          <TextField
            className={classes.select}
            fullWidth
            variant="outlined"
            label="Type your wallet address *"
            InputLabelProps={{
              style: { color: '#000000' }, 
            }}
          />

          <Box display="flex" pt={3} pb={2}>
          <RadioButtonUncheckedIcon color="tertiary" />
          <Typography pl={1} color="text.primary">PayPal</Typography>
          </Box>
          <TextField
            className={classes.select}
            fullWidth
            variant="outlined"
            label="Type your paypal address *"
            InputLabelProps={{
              style: { color: '#000000' }, 
            }}
          />

          <Box display="flex" pt={3} pb={2}>
          <RadioButtonUncheckedIcon color="tertiary" />
          <Typography pl={1} color="text.primary">Bank Wire</Typography>
          </Box>
          <FormControl fullWidth className={classes.select}>
            <InputLabel>
              <Box display="flex">
                <AccountBalanceIcon color="tertiary" />
                <Typography pl={1} color="text.primary">Select Your Country *</Typography>
              </Box>
            </InputLabel>
            <Select
              // value={age}
              // onChange={handleChange}
            />
          </FormControl>
          <RoundButton
            pt={3}
            variant="contained"
            color="tertiary"
            size="large"
            type="button"
            textAlign="center"
          >
            <Typography variant="h5" color="primary">ADD</Typography>
          </RoundButton>
        </Box>

        <Box width="50%" textAlign="center">
          <Badge
            className={classes.userBadge}
            badgeContent={
              <Box display="flex" mb={5} ml={3} minWidth={100} bgcolor="background.gray0" borderRadius={3}>
                <PersonIcon color="primary" />
                <Typography color="primary">Edit User</Typography>
              </Box>
            }
            color="primary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <AccountCircleIcon color="secondary" sx={{ fontSize: '100px' }} />
          </Badge>
          <Box display="flex" justifyContent="center" pt={5}>
            <Typography variant="h4">User</Typography>
            <Typography variant="h4" color="secondary" pl={1}>Information</Typography>
          </Box>
          <Typography pt={5}>Email: curiouspeter06@gmail.com</Typography>
          <Typography pt={2}>Address: Teleorman, Peretu, Romania</Typography>
          <Typography pt={2}>Phone: +1 737 235 8390</Typography>
        </Box>
        
      </Box>
    </LoadingContainer>
  )
}

export default AddWallet;