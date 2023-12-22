import React, { useRef, useState } from "react";
import classes from './styles/Homepage.module.css';
import "../styles/App.css"
import BottomPart from "../components/general/BottomPart";
import MonkeyList from "../components/HomepageComponents/MonkeyList";
import HomeNetList from "../components/HomepageComponents/HomeNetList";
import WalletInput from "../components/HomepageComponents/WalletInput";
import ButtonCheck from "../components/HomepageComponents/ButtonCheck";
import MainTitle from "../components/general/MainTitle";
import QuantityWalletsStatistics from "../components/HomepageComponents/QuantityWalletsStatistics";

function Homepage() {
    const [monkeyItems] = useState([
        { id: 1, link: 'https://www.figma.com' },
        { id: 2, link: 'https://www.figma.com' },
        { id: 3, link: 'https://www.figma.com' },
        { id: 4, link: 'https://www.figma.com' },
        { id: 5, link: 'https://www.figma.com' },
        { id: 6, link: 'https://www.figma.com' },
        { id: 7, link: 'https://www.figma.com' },
        { id: 8, link: 'https://www.figma.com' },
        { id: 9, link: 'https://www.figma.com' },
        { id: 10, link: 'https://www.figma.com' }
    ])
    const [nethomeItems] = useState([
        { id: 1, title: "STARKNET", body: "NFT Mint" },
        { id: 2, title: "ZkSync", body: "NFT Mint" },
        { id: 3, title: "Scroll", body: "NFT Mint" },
        { id: 4, title: "Linea", body: "NFT Mint" },
        { id: 5, title: "Base", body: "NFT Mint" },
        { id: 6, title: "ZORA", body: "NFT Mint" }
    ])
    const [QuantityStats] = useState([
        { id: 1, title: "STARKNET", amount: "3000000" },
        { id: 2, title: "ZkSync", amount: "4000000" },
        { id: 3, title: "Linea", amount: "5000000" }


    ])


    const [walletsBalans, setWalletsBalans] = useState('')
    const [walletsNow, setWalletsNow] = useState('')
    const checkBalansWallets = (e) => {
        e.preventDefault()
        console.log(walletsBalans)
    }
    const checkNowWalets = (e) => {
        e.preventDefault()
        console.log(walletsNow)
    }

    return (
        <div className={classes.homePage}>
            <div className={classes.homePageTopBack}>

           
            <MainTitle />



            <div className={classes.homepageTop}>
                <a className={classes.tgBotLink} href="https://t.me/UI_SCRIPT_BOT"> 
                    The next handler seems to be very complicated but it's not. First, we check if the message is a valid wallet address using len(message.text) == 48 because wallet address is 48 characters long. After that, we use api.detect_address function to check if the address is valid.
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" style={{marginTop: "20px", background: "#170326", marginLeft: "45px"}}>
                        <g clip-path="url(#clip0_124_1732)">
                            <path d="M22 11.0025C21.9994 13.1758 21.3551 15.3002 20.1483 17.1077C18.9414 18.9152 17.2263 20.3246 15.2192 21.1582C13.2121 21.9918 11.003 22.2122 8.87082 21.7915C6.73861 21.3709 4.77878 20.328 3.23869 18.7946C1.6986 17.2611 0.647263 15.3058 0.217361 13.1755C-0.212542 11.0451 -0.00174734 8.83513 0.823152 6.82444C1.64805 4.81376 3.05008 3.09248 4.85229 1.87785C6.65451 0.663226 8.77615 0.00967534 10.9494 -0.000314448C12.3989 -0.00846703 13.8356 0.270217 15.1769 0.819683C16.5182 1.36915 17.7375 2.17852 18.7646 3.20122C19.7918 4.22392 20.6064 5.43975 21.1617 6.77863C21.717 8.11752 22.0019 9.55301 22 11.0025ZM10.9972 20.9407C12.9633 20.9407 14.8853 20.3577 16.5201 19.2653C18.1549 18.173 19.4291 16.6204 20.1815 14.8039C20.9339 12.9875 21.1308 10.9887 20.7472 9.06028C20.3636 7.13192 19.4168 5.36061 18.0266 3.97033C16.6363 2.58006 14.865 1.63325 12.9366 1.24967C11.0082 0.866096 9.00942 1.06297 7.19294 1.81538C5.37646 2.56779 3.82388 3.84194 2.73155 5.47673C1.63921 7.11152 1.05618 9.03355 1.05618 10.9997C1.05767 13.6358 2.1055 16.1634 3.96948 18.0274C5.83346 19.8914 8.36113 20.9392 10.9972 20.9407Z" fill="white" />
                            <path d="M13.5957 16.8174C13.3388 16.814 13.0897 16.7283 12.8851 16.573C12.1435 16.0112 11.3963 15.4298 10.6379 14.8595C10.5957 14.8258 10.5733 14.8258 10.5339 14.8595C10.0901 15.2669 9.63787 15.6657 9.20247 16.0815C9.09785 16.1802 8.9673 16.2472 8.82604 16.2745C8.68479 16.3019 8.53866 16.2885 8.40473 16.2359C8.27628 16.1907 8.16983 16.0983 8.10698 15.9775C8.00096 15.7946 7.9206 15.598 7.8682 15.3932C7.5873 14.4812 7.30641 13.5674 7.02551 12.6517C7.0199 12.6258 7.00679 12.6021 6.98781 12.5836C6.96882 12.5651 6.9448 12.5526 6.91876 12.5477C6.13506 12.2837 5.35135 12.0225 4.57045 11.7556C4.31103 11.6752 4.08951 11.5036 3.94687 11.2725C3.85282 11.1249 3.81418 10.9488 3.83784 10.7754C3.86151 10.6021 3.94592 10.4428 4.07607 10.3258C4.20476 10.2034 4.35662 10.1079 4.52271 10.0449L10.5901 7.6657L15.003 5.93257C15.2111 5.84415 15.4322 5.79006 15.6575 5.77244C15.7662 5.75988 15.8763 5.77172 15.9799 5.80708C16.0834 5.84243 16.1777 5.90043 16.256 5.97684C16.3343 6.05326 16.3946 6.14618 16.4325 6.24883C16.4703 6.35147 16.4849 6.46126 16.4749 6.57022C16.4557 6.73103 16.4266 6.89049 16.3879 7.04773C16.1819 8.08706 15.9759 9.12638 15.7699 10.1657L15.2081 13.0421C15.0171 14.0028 14.8176 14.9663 14.6463 15.9326C14.5983 16.1777 14.468 16.3991 14.2769 16.5601C14.0858 16.721 13.8455 16.8118 13.5957 16.8174ZM4.7109 10.896C4.76257 10.9405 4.82279 10.974 4.88787 10.9944L7.21933 11.7781C7.24311 11.7879 7.26899 11.7915 7.29454 11.7885C7.32009 11.7856 7.34448 11.7762 7.3654 11.7612L13.4497 7.89605C13.5507 7.82696 13.6628 7.77565 13.7811 7.74436C13.8789 7.70785 13.9856 7.70286 14.0864 7.73006C14.1871 7.75726 14.2768 7.81531 14.3429 7.89605C14.4109 7.97695 14.4533 8.0762 14.4648 8.18121C14.4763 8.28622 14.4564 8.39226 14.4075 8.48594C14.3553 8.58448 14.2847 8.6722 14.1997 8.74437C13.6688 9.22471 13.1351 9.70786 12.6014 10.1854C11.5976 11.0899 10.5939 11.9934 9.59011 12.8961C9.53955 12.9382 9.54236 12.9579 9.59011 12.9972C10.0283 13.3371 10.4637 13.6826 10.9047 14.0197L13.4019 15.9354C13.438 15.9668 13.4819 15.9878 13.529 15.9962C13.5761 16.0046 13.6246 16.0001 13.6693 15.9831C13.714 15.9661 13.7533 15.9372 13.7829 15.8996C13.8124 15.862 13.8313 15.8171 13.8373 15.7697C14.0246 14.8333 14.2118 13.8904 14.3991 12.941C14.5733 12.0533 14.7493 11.1638 14.9272 10.2724L15.489 7.39042L15.6323 6.66572C15.6323 6.61235 15.6323 6.60391 15.5789 6.61795C15.5255 6.632 15.4525 6.65168 15.3907 6.67696L13.4637 7.43256L4.8345 10.8174C4.79158 10.8363 4.75253 10.8629 4.71934 10.896H4.7109ZM9.09292 15.0562L9.93562 14.3033L9.23899 13.7697L9.09292 15.0562Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_124_1732">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className={classes.TgBotText}>Telegram bot </p>
                </a>


                <div className={classes.homepageTopMid}>

                    <div className={classes.rainbow} />

                    <ButtonCheck onClick={checkNowWalets} >CHECK NOW WALLETS</ButtonCheck>
                    <WalletInput

                        value={walletsNow}
                        onChange={e => setWalletsNow(e.target.value)}
                        type="text" placeholder="Enter your wallets"

                    />
                    <ButtonCheck onClick={checkBalansWallets} style={{ marginTop: "30px" }}>CHECK BALANS WALLETS</ButtonCheck>
                    <WalletInput
                        value={walletsBalans}
                        onChange={e => setWalletsBalans(e.target.value)}
                        type="text"
                        placeholder="Enter your wallets"


                    />
                </div>
                <QuantityWalletsStatistics QuantityStats={QuantityStats} />

            </div>
            </div>

            <div className={classes.MidBack}>
            <HomeNetList nethomeItems={nethomeItems} />
            <MonkeyList monkeyItems={monkeyItems} />
            <BottomPart />
           

            </div>
    



        </div>
    )
};
export default Homepage;