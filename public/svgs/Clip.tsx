const Clip = ({ width = "70", height = "51", fill = "none" }) => {
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.5234 19.7251C39.9505 20.1523 39.9505 20.8448 39.5234 21.2719L24.2109 36.5844C23.7838 37.0116 23.0912 37.0116 22.6641 36.5844C22.237 36.1573 22.237 35.4648 22.6641 35.0376L37.9766 19.7251C38.4037 19.298 39.0963 19.298 39.5234 19.7251Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.3282 15.0761C34.7647 13.6395 36.713 12.8325 38.7445 12.8325C40.7761 12.8325 42.7244 13.6395 44.1609 15.0761C45.5974 16.5126 46.4044 18.4609 46.4044 20.4924C46.4044 22.5236 45.5977 24.4715 44.1617 25.9079L44.1609 25.9088L36.7902 33.3014C36.585 33.5072 36.3063 33.6229 36.0156 33.6229H26.7188C26.1147 33.6229 25.625 33.1332 25.625 32.5291V23.2323C25.625 22.9422 25.7402 22.664 25.9454 22.4589L33.3282 15.0761ZM38.7445 15.02C37.2932 15.02 35.9012 15.5966 34.875 16.6228L27.8125 23.6853V31.4354H35.5616L42.613 24.3631L42.6141 24.362C43.6404 23.3357 44.2169 21.9438 44.2169 20.4924C44.2169 19.041 43.6404 17.6491 42.6141 16.6228C41.5878 15.5966 40.1959 15.02 38.7445 15.02Z"
                fill="white"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30 28.1541C30 27.5501 30.4897 27.0604 31.0938 27.0604H39.8438C40.4478 27.0604 40.9375 27.5501 40.9375 28.1541C40.9375 28.7582 40.4478 29.2479 39.8438 29.2479H31.0938C30.4897 29.2479 30 28.7582 30 28.1541Z"
                fill="white"
            />
        </svg>
    );
};

export default Clip;