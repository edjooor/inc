import React from "react";
import classes from './styles/MainTitle.module.css'

const MainTitle = () => {
    return (
        <div className={classes.MainTitle} >
            <p className={classes.title} >
                NONAME INC.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={classes.LangSelector}>
                <g clip-path="url(#clip0_173_28)">
                    <path d="M19.9999 0C23.9635 0.000175259 27.8377 1.17845 31.1306 3.38525C34.4236 5.59204 36.9867 8.72786 38.4948 12.3946C40.0028 16.0613 40.3878 20.0935 39.6007 23.9795C38.8136 27.8655 36.8901 31.4299 34.0742 34.2203C31.2583 37.0106 27.6771 38.9011 23.7852 39.6516C19.8932 40.4022 15.8661 39.9791 12.2151 38.436C8.56397 36.8928 5.45352 34.2993 3.27867 30.9845C1.10382 27.6698 -0.037359 23.7834 -9.21029e-05 19.8186C0.0874443 14.5572 2.22853 9.53869 5.96569 5.83543C9.70286 2.13216 14.7397 0.0378603 19.9999 0ZM19.1537 33.0803C19.1537 31.6157 19.1537 30.1511 19.1537 28.6866C19.1537 28.1222 18.9522 27.8938 18.3881 27.9341C16.1257 28.0442 13.8778 28.359 11.6722 28.8747C11.1752 28.9956 11.0543 29.224 11.2289 29.6808C12.0807 32.2985 13.5773 34.6597 15.5808 36.5469C16.2896 37.1803 17.1155 37.6687 18.012 37.9846C18.9925 38.307 19.0999 38.2263 19.0999 37.2321C19.1671 35.8481 19.1537 34.4642 19.1537 33.0803ZM19.1537 7.00028C19.1537 5.53572 19.1537 4.07122 19.1537 2.60665C19.1537 1.89453 18.8985 1.76012 18.2537 1.9751C17.2612 2.29262 16.3462 2.8144 15.5674 3.50687C13.5633 5.39109 12.0705 7.75358 11.2289 10.3728C11.014 10.9371 11.3498 11.085 11.793 11.179C13.9275 11.6799 16.1039 11.9812 18.2941 12.0793C18.9254 12.0793 19.1268 11.918 19.1134 11.3134C19.1402 9.87569 19.1537 8.43797 19.1537 7.00028ZM20.8595 7.00028C20.8595 8.47828 20.8595 9.94288 20.8595 11.4074C20.8595 11.9046 20.9938 12.1598 21.558 12.133C23.7787 12.0292 25.9857 11.728 28.153 11.2328C28.744 11.0984 28.9052 10.8297 28.6768 10.2519C28.0898 8.58434 27.2666 7.00961 26.2322 5.57603C25.1404 3.92928 23.549 2.67654 21.6923 2.002C21.1013 1.81389 20.8326 1.93484 20.8461 2.60665C20.8864 4.03091 20.8864 5.49546 20.8864 6.96002L20.8595 7.00028ZM20.8595 33.0937C20.8595 34.5583 20.8595 36.0228 20.8595 37.4874C20.8595 38.1726 21.1416 38.2936 21.7057 38.1055C22.3493 37.8977 22.9599 37.5991 23.5191 37.2187C26.0014 35.3046 27.8273 32.6657 28.744 29.6675C28.932 29.1569 28.65 28.9956 28.2068 28.8881C26.0488 28.3894 23.8507 28.0836 21.6386 27.9745C21.0744 27.9745 20.8595 28.1357 20.8595 28.7135C20.8864 30.1377 20.8864 31.5619 20.8864 33.0534L20.8595 33.0937ZM14.372 19.214H18.4015C19.006 19.214 19.2208 19.0124 19.2074 18.4078C19.2074 17.1627 19.2074 15.9131 19.2074 14.659C19.2074 14.0275 18.9925 13.7991 18.3612 13.7857C16.0268 13.7302 13.7061 13.4102 11.4438 12.8317C10.8259 12.6839 10.5573 12.8317 10.423 13.4632C10.0965 15.1135 9.87658 16.783 9.76479 18.4615C9.76479 19.0393 9.92604 19.2274 10.5036 19.214C11.7662 19.1468 13.0691 19.1737 14.372 19.1737V19.214ZM25.601 19.214C26.9442 19.214 28.153 19.214 29.4156 19.214C30.0603 19.214 30.2886 19.0393 30.2483 18.3809C30.1396 16.6747 29.9152 14.9778 29.5767 13.3019C29.4693 12.751 29.1604 12.6839 28.6903 12.8048C26.3456 13.3859 23.9456 13.7148 21.5311 13.7857C21.061 13.7857 20.8461 13.9604 20.8595 14.4575C20.8595 15.8101 20.8595 17.1537 20.8595 18.4884C20.8595 19.0527 21.1147 19.1737 21.6117 19.1602L25.601 19.214ZM14.4122 20.9204C13.0691 20.9204 11.7259 20.9204 10.3827 20.9204C9.84542 20.9204 9.64398 21.1488 9.67084 21.6459C9.78226 23.409 10.0292 25.161 10.4096 26.8861C10.5036 27.2892 10.7051 27.4504 11.0946 27.3429C13.5189 26.7395 15.999 26.3884 18.4955 26.2949C18.9925 26.2949 19.1268 26.0396 19.1268 25.5828C19.1268 24.275 19.1268 22.9717 19.1268 21.6728C19.1268 21.0951 18.9119 20.907 18.3612 20.9204C17.0717 20.8935 15.742 20.8801 14.4122 20.8801V20.9204ZM25.5875 20.9204C24.2443 20.9204 22.9012 20.9204 21.558 20.9204C20.9938 20.9204 20.7924 21.122 20.8058 21.6863C20.8058 22.9224 20.8058 24.172 20.8058 25.4215C20.8058 26.1068 21.0342 26.3218 21.6789 26.3352C24.0321 26.3986 26.3706 26.7277 28.65 27.3161C29.1604 27.437 29.4156 27.3161 29.5231 26.7921C29.8958 25.0986 30.1294 23.3775 30.2215 21.6459C30.2215 21.1085 30.0469 20.9204 29.5231 20.9338L25.5875 20.9204ZM4.91592 19.214C5.69497 19.214 6.48745 19.214 7.26649 19.214C7.83063 19.214 8.03214 18.999 8.05901 18.4615C8.10316 16.5373 8.35077 14.6232 8.79774 12.7511C8.91863 12.2808 8.79778 12.0658 8.32766 11.9046C7.27688 11.5615 6.26417 11.1113 5.3055 10.5609C4.76823 10.225 4.45923 10.3325 4.1503 10.8834C2.81464 13.2173 1.99481 15.8107 1.74603 18.4884C1.74603 19.0796 1.90725 19.2677 2.45796 19.2543C3.29073 19.1603 4.09658 19.1737 4.91592 19.1737V19.214ZM35.1779 19.214C35.8763 19.214 36.5882 19.214 37.2867 19.214C37.9851 19.214 38.3074 18.999 38.2269 18.2331C37.9307 15.5568 37.0701 12.9738 35.7017 10.655C35.4465 10.2116 35.1645 10.2385 34.7749 10.4803C33.8101 11.0278 32.7932 11.4779 31.7393 11.824C31.6325 11.8381 31.5303 11.8768 31.4409 11.937C31.3515 11.9972 31.2772 12.0772 31.2238 12.1709C31.1705 12.2646 31.1396 12.3694 31.1335 12.477C31.1274 12.5846 31.1462 12.6923 31.1886 12.7914C31.6327 14.6644 31.8848 16.5778 31.9408 18.5019C31.9408 18.999 32.1826 19.1737 32.6527 19.1602L35.1779 19.214ZM4.90248 20.9204H2.31014C1.88033 20.9204 1.70573 21.1219 1.74603 21.5116C1.97995 24.3064 2.84326 27.012 4.27122 29.4255C4.30293 29.5077 4.35346 29.5813 4.41871 29.6405C4.48395 29.6996 4.56209 29.7427 4.64694 29.7662C4.73179 29.7897 4.82095 29.793 4.90731 29.7759C4.99368 29.7587 5.07488 29.7216 5.14432 29.6675C6.17202 29.0693 7.25628 28.5742 8.38136 28.1894C8.74402 28.0685 8.93209 27.8804 8.82463 27.4639C8.37725 25.5317 8.11635 23.5609 8.04556 21.5788C8.04556 21.1219 7.84406 20.8935 7.34708 20.9204H4.90248ZM38.2135 21.8206C38.2806 21.2966 38.2134 20.8935 37.5553 20.9069C35.9031 20.9069 34.251 20.9069 32.5989 20.9069C32.1557 20.9069 31.9676 21.0817 31.9542 21.5251C31.8849 23.4481 31.6331 25.3602 31.202 27.2355C31.1572 27.3334 31.1356 27.4402 31.1389 27.5478C31.1422 27.6554 31.1703 27.7608 31.221 27.8557C31.2717 27.9507 31.3436 28.0327 31.4312 28.0952C31.5188 28.1577 31.6196 28.1992 31.7259 28.2163C32.8085 28.5776 33.8489 29.0551 34.8286 29.6406C35.2585 29.8959 35.5002 29.7884 35.742 29.3853C37.107 27.0594 37.9503 24.4645 38.2135 21.7803V21.8206ZM34.1839 8.62611C34.13 8.49138 34.0576 8.36482 33.969 8.24994C32.2773 6.22738 30.1639 4.59931 27.7769 3.47997C27.6893 3.41508 27.5797 3.38723 27.4717 3.4023C27.3637 3.41738 27.2659 3.47417 27.1994 3.56058C27.0516 3.74869 27.1994 3.90993 27.2934 4.07117C28.653 5.83119 29.6982 7.8132 30.3827 9.92948C30.517 10.3326 30.7319 10.4938 31.1751 10.3191C32.1014 9.97762 32.9996 9.56434 33.8615 9.08298C33.969 8.94862 34.1571 8.86801 34.1705 8.58584L34.1839 8.62611ZM34.1839 31.4679C34.1839 31.1992 33.9824 31.1051 33.7944 30.9977C33.0019 30.5677 32.1825 30.2183 31.3632 29.8555C30.7991 29.6271 30.5438 29.7481 30.3424 30.3393C29.6768 32.3479 28.6828 34.2321 27.4008 35.9153C27.2665 36.1034 27.0247 36.305 27.2262 36.5602C27.4277 36.8155 27.7232 36.6543 27.965 36.5602C30.2493 35.4703 32.2737 33.9034 33.9018 31.965C33.9959 31.7635 34.157 31.6292 34.157 31.4276L34.1839 31.4679ZM9.07984 10.3863C9.19511 10.4022 9.31209 10.3736 9.40695 10.3061C9.50181 10.2387 9.5674 10.1376 9.59026 10.0235C10.2931 7.87961 11.3559 5.87127 12.7333 4.08462C12.7722 4.0459 12.8032 3.99987 12.8243 3.94914C12.8455 3.89841 12.8563 3.84401 12.8563 3.78906C12.8563 3.7341 12.8455 3.67971 12.8243 3.62898C12.8032 3.57824 12.7722 3.53213 12.7333 3.49342C12.5855 3.30531 12.3975 3.38593 12.2228 3.49342C9.80549 4.61845 7.66777 6.26595 5.96364 8.3171C5.80246 8.51865 5.62785 8.74701 5.96364 8.93512C6.94179 9.51115 7.97711 9.98403 9.05295 10.346L9.07984 10.3863ZM12.8273 36.3184C12.7727 36.1934 12.7099 36.0723 12.6392 35.9557C11.2874 34.1956 10.2429 32.2194 9.54992 30.1108C9.38874 29.6405 9.10669 29.654 8.7306 29.7884C7.90235 30.1098 7.09092 30.473 6.29944 30.8767C5.66814 31.1857 5.66811 31.4948 6.09793 31.9785C7.17416 33.1951 8.39682 34.2737 9.73799 35.1898C10.494 35.707 11.294 36.1566 12.1288 36.5334C12.4512 36.6812 12.7333 36.7484 12.8273 36.3184Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_173_28">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default MainTitle;