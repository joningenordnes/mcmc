'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import styles from './styles/fonts.module.css';
import appStoreStyles from './styles/appStoreButtons.module.css';
import pageStyles from './styles/page.module.css';
import Image from 'next/image';

const Page = () => {
    useEffect(() => {
        // Load Bootstrap JS
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
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
    );
};

export default Page;