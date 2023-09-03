import React from 'react';

import contentImg from '../../assets/img/content/wallet/wallet.png';

// ICONS
import coinbaseIcon from '../../assets/img/content/wallet/Coinbase.svg';
import walletConnectIcon from '../../assets/img/content/wallet/WalletConnect.svg';
import MetamaskIcon from '../../assets/img/content/wallet/Metamask.svg';

const Wallet = () => {
  return (
    <section className="wallet">
      <div className="wallet__column">
        <img src={contentImg} alt="wallet" />
      </div>
      <div className="wallet__column">
        <h2 className="wallet__title">Connect wallet</h2>
        <p className="wallet__desc">
          Choose a wallet you want to connect. There are several wallet providers.
        </p>
        <div className="wallet__list">
          <div className="wallet__item">
            <img src={MetamaskIcon} alt="coinbase" />
            <span>Metamask</span>
          </div>
          <div className="wallet__item">
            <img src={walletConnectIcon} alt="coinbase" />
            <span>Wallet Connect</span>
          </div>
          <div className="wallet__item">
            <img src={coinbaseIcon} alt="coinbase" />
            <span>Coinbase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
