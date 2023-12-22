import React, { useState } from "react";
import classes from './styles/Mintpage.module.css';
import './styles/SelectQuantity.css'
import BottomPart from "../components/general/BottomPart";
import NetworkSelector from "../components/MintpageComponents/NetworkSelector";

import { useSDK } from '@metamask/sdk-react';
import MainTitle from "../components/general/MainTitle";
import MonkeyMintList from "../components/MintpageComponents/MonkeyMintList";

import SelectedNetworkImg from "../components/MintpageComponents/SelectedNetworkImg";

const Mintpage = () => {
    const [monkeyMintItems] = useState([
        { id: 1, title: 'Monkeymoney', price: 0.0001 },
        { id: 2, title: 'Monkeymoney', price: 0.0001 },
        { id: 3, title: 'Monkeymoney', price: 0.0001 },
        { id: 4, title: 'Monkeymoney', price: 0.0001 },
        { id: 5, title: 'Monkeymoney', price: 0.0001 },
        { id: 6, title: 'Monkeymoney', price: 0.0001 },
        { id: 7, title: 'Monkeymoney', price: 0.0001 },
        { id: 8, title: 'Monkeymoney', price: 0.0001 },
        { id: 9, title: 'Monkeymoney', price: 0.0001 },
        { id: 10, title: 'Monkeymoney', price: 0.0001 }
    ])


    const [account, setAccount] = useState('');
    const { sdk, connected, connecting, provider, chainId } = useSDK();
    const connect = async () => {
        try {
            const accounts = await sdk?.connect();
            setAccount(accounts?.[0]);
        } catch (err) {
            console.warn(`failed to connect..`, err);
        };
        console.log(`Connected chain: ${chainId}`);
        console.log(`Connected account: ${account}`);

    };


    const [selectedNetwork, setSelectedNetwork] = useState('Zksync')
    const selectNetwork = (network) => {
        setSelectedNetwork(network);
        console.log(network)

    }



    const [amount, setAmount] = useState(0)





    return (
        <div className={classes.mintPage}>
            <div className={classes.mintPageTopBack}>


                <MainTitle />
                <div className={classes.mintPageHeader}>
                    <NetworkSelector
                        value={selectedNetwork}
                        onChange={selectNetwork}
                        // defaultValue="SELECT A NETWORK"
                        options={[
                            { value: 'Zksync', name: 'Zksync' },
                            { value: 'Starknet', name: 'Starknet' },
                            { value: 'Base', name: 'Base' },
                            { value: 'Scroll', name: 'Scroll' },
                            { value: 'Zora', name: 'Zora' },
                            { value: 'Linea', name: 'Linea' },

                        ]}

                    />

                    <div className={classes.selectedNetworkText}>

                        {/* <div className={classes.StarknetImg}></div> */}
                        <SelectedNetworkImg selectedNetwork={selectedNetwork} />
                        {/* <div 
                    
                    className={if (selectedNetwork == ZkSync): classes.ZkSyncImg}></div> */}

                        <p>{selectedNetwork} network selected</p>
                    </div>

                    <button className={classes.connectWalletButton} onClick={connect}>
                        CONNECT WALLET
                    </button>

                    {/* {connected && (
                <div className={classes.selectedNetworkText}>
                    
                    console.log({chainId && `Connected chain: ${chainId}`})
                       
                       console.log({account && `Connected account: ${account}`})
               
                </div>
            )} */}
                </div>


                <div className="AmountSelector">

                    <div className="chooseBar">
                        Select quantity

                        <div className="chooseSlider" style={{ marginLeft: "15px" }}>

                            <input type="range" className={amount >= 0 ? 'more' : 'less'} min='0' max="10" step="1" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ width: "234px", height: "4px" }}></input>
                            <div className="choosenAmount">{amount}</div>
                        </div>
                        <button className={classes.QuantitySelectorButton} onClick={() => setAmount(0)} style={{marginLeft: "18px"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M2 2L13 13" stroke="#BF8CDE" stroke-width="2" stroke-linecap="square" />
                                <path d="M13 2L2 13" stroke="#BF8CDE" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                        <button className={classes.QuantitySelectorButton} onClick={() => setAmount(1)}>1</button>
                        <button className={classes.QuantitySelectorButton} onClick={() => setAmount(2)}>2</button>
                        <button className={classes.QuantitySelectorButton} onClick={() => setAmount(5)}>5</button>
                        <button className={classes.QuantitySelectorButton} onClick={() => setAmount(10)}>10</button>


                    </div>
                    <button className="mintButton">MINT NFT</button>
                </div>





                <MonkeyMintList monkeyMintItems={monkeyMintItems} monkeysAmount={amount} />

            </div>

            <div className={classes.MidBack}>

                <BottomPart />
            </div>
        </div>
    )
};
export default Mintpage;