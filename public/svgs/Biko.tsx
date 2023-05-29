const Biko = ({ width = "70", height = "51", fill = "none" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 70 51"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect y="0.498535" width="70" height="50" rx="25" fill="black" />
            <path
                d="M47.958 23.6317C47.2679 23.6313 46.5816 23.7311 45.9211 23.9279L42.0338 15.0985H46.062C46.2761 15.0964 46.4808 15.0113 46.6315 14.8615C46.7822 14.7117 46.8667 14.5093 46.8667 14.2985C46.8667 14.0877 46.7822 13.8854 46.6315 13.7356C46.4808 13.5858 46.2761 13.5006 46.062 13.4985H40.796C40.6612 13.4986 40.5286 13.5316 40.41 13.5946C40.2915 13.6576 40.1907 13.7487 40.1168 13.8596C40.0428 13.9705 39.9981 14.0977 39.9865 14.2299C39.9749 14.3621 39.9969 14.495 40.0505 14.6167L42.0557 19.1712H31.3682L29.5753 15.0988H32.2491C32.3564 15.0998 32.4629 15.0799 32.5624 15.0401C32.6619 15.0004 32.7524 14.9416 32.8287 14.8672C32.905 14.7929 32.9656 14.7043 33.0069 14.6068C33.0482 14.5092 33.0695 14.4045 33.0695 14.2988C33.0695 14.1931 33.0482 14.0884 33.0069 13.9909C32.9656 13.8933 32.905 13.8048 32.8287 13.7304C32.7524 13.656 32.6619 13.5972 32.5624 13.5575C32.4629 13.5177 32.3564 13.4978 32.2491 13.4988H24.9395C24.7254 13.5009 24.5208 13.5861 24.3701 13.7359C24.2194 13.8857 24.1349 14.088 24.1349 14.2988C24.1349 14.5096 24.2194 14.712 24.3701 14.8618C24.5208 15.0116 24.7254 15.0967 24.9395 15.0988H27.8038L29.9041 19.8698L26.4839 24.5197C25.1655 23.7921 23.6444 23.5014 22.1453 23.6907C20.6463 23.8799 19.2489 24.539 18.1597 25.5706C17.0705 26.6022 16.3473 27.9515 16.0971 29.4189C15.847 30.8864 16.083 32.3942 16.7704 33.7193C17.4578 35.0445 18.5601 36.1168 19.9142 36.7775C21.2684 37.4383 22.8025 37.6525 24.2899 37.3886C25.7773 37.1246 27.1389 36.3964 28.1735 35.3117C29.208 34.227 29.8606 32.8433 30.0348 31.3653H35.499C35.6275 31.3653 35.7541 31.3353 35.8685 31.2778C35.9829 31.2203 36.0818 31.1369 36.1571 31.0345L43.1145 21.5759L44.4309 24.5658C42.9537 25.4088 41.8379 26.7516 41.2915 28.3442C40.7451 29.9369 40.8053 31.6707 41.4608 33.223C42.1163 34.7752 43.3225 36.0399 44.8547 36.7816C46.387 37.5234 48.1408 37.6915 49.7896 37.2547C51.4383 36.818 52.8697 35.8061 53.817 34.4076C54.7644 33.009 55.1632 31.3191 54.9391 29.6526C54.715 27.9861 53.8834 26.4566 52.5991 25.3489C51.3147 24.2412 49.6653 23.6309 47.9579 23.6316L47.958 23.6317ZM30.6557 21.5759L34.2608 29.7649H30.0349C29.8396 28.1118 29.0458 26.5832 27.799 25.4593L30.6557 21.5759ZM28.3959 29.765H24.6319L26.8378 26.7664C27.6731 27.5736 28.2199 28.6258 28.3959 29.765ZM23.0401 35.8983C22.2197 35.899 21.4098 35.7162 20.6716 35.3637C19.9335 35.0112 19.2862 34.4982 18.7788 33.8635C18.2714 33.2288 17.9171 32.4889 17.7425 31.6996C17.568 30.9104 17.5778 30.0924 17.7713 29.3074C17.9648 28.5224 18.3368 27.791 18.8593 27.1683C19.3818 26.5455 20.0412 26.0478 20.7876 25.7126C21.5341 25.3774 22.3481 25.2136 23.1683 25.2334C23.9885 25.2532 24.7934 25.4561 25.5222 25.827L22.382 30.0958C22.2942 30.2152 22.2416 30.3562 22.23 30.5032C22.2184 30.6502 22.2483 30.7975 22.3164 30.9288C22.3845 31.0601 22.4881 31.1704 22.6158 31.2473C22.7435 31.3243 22.8904 31.365 23.0401 31.365H28.396C28.2 32.6258 27.5523 33.7758 26.57 34.6073C25.5876 35.4387 24.3355 35.8967 23.0401 35.8983ZM35.6771 28.9591L32.0725 20.7712H41.7001L35.6771 28.9591ZM47.958 35.8983C46.7823 35.8987 45.6385 35.5224 44.6992 34.8262C43.76 34.13 43.0763 33.1518 42.7517 32.0393C42.427 30.9268 42.4789 29.7405 42.8996 28.6596C43.3202 27.5787 44.0867 26.662 45.0833 26.0479L47.2121 30.8833C47.2992 31.0759 47.4599 31.227 47.6595 31.3035C47.859 31.3801 48.0812 31.3759 48.2777 31.2921C48.4742 31.2082 48.6291 31.0514 48.7087 30.8557C48.7884 30.66 48.7864 30.4412 48.7031 30.2469L46.5732 25.4095C47.3179 25.2157 48.096 25.1804 48.8557 25.3061C49.6153 25.4319 50.339 25.7156 50.9784 26.1385C51.6178 26.5615 52.1582 27.1138 52.5636 27.7586C52.969 28.4035 53.2301 29.126 53.3294 29.8781C53.4287 30.6302 53.3639 31.3944 53.1394 32.1199C52.9149 32.8454 52.5358 33.5153 52.0275 34.0851C51.5191 34.6549 50.8932 35.1114 50.1915 35.4242C49.4897 35.7369 48.7283 35.8987 47.958 35.8987V35.8983Z"
                fill="white"
            />
        </svg>
    );
};

export default Biko;
