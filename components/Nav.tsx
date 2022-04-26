import Image from 'next/image';
import Link from 'next/link';
import { WalletButton } from './WalletButton';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { GeneralState } from '../types';

export const Nav = () => {
    const generalReducer = useSelector((state: GeneralState) => state.general);

    return (
        <>
            {!generalReducer.isLoading && (
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    className='text-gray-400 bg-zinc-900 pb-4 bg-opacity-90 md:bg-transparent body-font fixed z-40 w-full'>
                    <div className='container tracking-widest mx-auto flex flex-wrap justify-between flex-col md:flex-row items-center'>
                        <Link href={'/'}>
                            <div className='flex cursor-pointer title-font font-medium items-center text-white p-2 mb-4 md:mb-0'>
                                <div className='w-16 h-16 mb-4 relative'>
                                    <Image src='/images/diamond.png' layout='fill' alt='nav-logo' />
                                </div>
                                <h2 className='ml-3 text-4xl font-bold text-shadow-white'>MinerVerse</h2>
                            </div>
                        </Link>

                        <WalletButton />
                    </div>
                </motion.header>
            )}
        </>
    );
};
