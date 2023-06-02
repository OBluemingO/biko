"use client"
import { PageWrapper } from '@/components/WraperPage';
import { motion } from 'framer-motion';

interface IProps {

}

const AboutUs: React.FC<IProps> = ({}: IProps): JSX.Element => {
    return (
        <PageWrapper>
            <motion.div
                initial={{ left: "100%" }}
                animate={{ left: "0%" }}
                exit={{ left: "0%" }}
                className="h-screen w-full bg-black"
            >
                about us test
            </motion.div>
        </PageWrapper>
    );
};

export default AboutUs;