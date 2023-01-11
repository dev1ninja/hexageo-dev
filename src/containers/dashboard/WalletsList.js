import React from 'react';
import { Icon } from "coinmarketcap-cryptocurrency-icons";
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LoadingContainer from '../../components/common/LoadingContainer';
import RoundButton from '../../components/common/RoundButton';

const useStyles = makeStyles((theme) => ({
  address: {
    wordBreak: 'break-all',
  }
}));

const wallets = [
  {icon: 'eth', title: 'Ethereum', address: '0xee2e4ffBCAdb9B31be744bd0466C691ACed3Ce7b'},
  {icon: 'btc', title: 'Bitcoin', address: '0xee2e4ffBCAdb9B31be744bd0466C691ACed3Ce7b'},
  {icon: 'bnb', title: 'Binance', address: '0xee2e4ffBCAdb9B31be744bd0466C691ACed3Ce7b'},
  {icon: 'usdt', title: 'Tether', address: '0xee2e4ffBCAdb9B31be744bd0466C691ACed3Ce7b'},
];

function WalletsList() {
  const classes = useStyles();

  return (
    <LoadingContainer>
      <Box pt={15}>
        <fieldset style={{ width: '100%', borderWidth: '3px', borderColor: '#A59263', borderRadius: 20, borderStyle: 'solid', padding: '0px'}}>
          <legend style={{marginLeft:'20px'}}>
            <Box display="flex" pl={2} pr={2}>
              <AccountBalanceWalletIcon color="secondary" fontSize="large" />
              <Typography variant="h4" pl={2}>Your</Typography>
              <Typography variant="h4" color="secondary" pl={1}>Wallets</Typography>
            </Box>
          </legend>
          <Box display="flex" pt={5} pb={5} pl={2} pr={2}>
            {wallets.map((wallet, index) => (
              <fieldset key={index} style={{ borderWidth: '3px', borderColor: '#515151', borderRadius: 10, borderStyle: 'solid', padding: '0px', margin: '20px'}}>
                <legend style={{marginLeft:'20px'}}>
                  <Icon i={wallet.icon} />
                </legend>
                <Box textAlign="center" p={2}>
                  <Typography variant="h5">{wallet.title}</Typography>
                  <Box display="flex" pt={2}>
                    <Typography variant="body2" className={classes.address} pr={1}>{wallet.address}</Typography>
                    {<ContentCopyIcon />}
                  </Box>
                </Box>
              </fieldset>
            ))}
          </Box>
          <RoundButton
            variant="contained"
            color="tertiary"
            type="button"
            mt={-3}
            mb={2}
            mr={4}
            textAlign="right"
          >
            <Typography variant="h5" color="primary">+ Load More ...</Typography>
          </RoundButton>
        </fieldset>
      </Box>
    </LoadingContainer>
  )
}

export default WalletsList;