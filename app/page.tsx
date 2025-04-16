'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import styles from './styles/fonts.module.css';
import appStoreStyles from './styles/appStoreButtons.module.css';
import pageStyles from './styles/page.module.css';
import Image from 'next/image';
import Head from 'next/head';

const Page = () => {
    useEffect(() => {
        // Load Bootstrap JS
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <Head>
                <title>TankTally - Track Your Vehicle's Fuel Consumption</title>
                <meta name="description" content="Track your tank's fuel consumption with ease. Monitor your vehicle's performance and fuel efficiency." />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tanktally.app/" />
                <meta property="og:title" content="TankTally - Track Your Vehicle's Fuel Consumption" />
                <meta property="og:description" content="Track your tank's fuel consumption with ease. Monitor your vehicle's performance and fuel efficiency." />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://tanktally.app/" />
                <meta property="twitter:title" content="TankTally - Track Your Vehicle's Fuel Consumption" />
                <meta property="twitter:description" content="Track your tank's fuel consumption with ease. Monitor your vehicle's performance and fuel efficiency." />
                <meta property="twitter:image" content="/images/og-image.jpg" />
            </Head>
            <div style={{ overflow: 'hidden', height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
                <div className={`${pageStyles.heroSection} text-center`}>
                    <div className={pageStyles.overlay} />
                    <div className={`${pageStyles.content} col-md-5 p-lg-5 mx-auto my-5`}>
                        <h1 className={`display-4 fw-normal ${styles.pantonFont} ${pageStyles.title}`}>TankTally</h1>
                        <p className="lead fw-normal">Track your tank's fuel consumption with ease.<br/> Monitor your vehicle's performance and fuel efficiency.</p>
                        
                        <div className={appStoreStyles.appStoreButtons}>
                            <a 
                                href="https://apps.apple.com/us/app/tanktally/id6744678705" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    src="/images/apple.svg" 
                                    alt="Apple App Store" 
                                    width={300} 
                                    height={100}
                                    style={{
                                        width: '300px',
                                        height: 'auto'
                                    }}
                                />
                            </a>
                            <a 
                                href="https://play.google.com/store/apps/details?id=com.jinordnes.TankTally" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    src="/images/google.svg" 
                                    alt="Google Play Store" 
                                    width={300} 
                                    height={100}
                                    style={{
                                        width: '300px',
                                        height: 'auto'
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;