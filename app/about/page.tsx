import Link from "next/link";

const Page = async () => {
    return (
        <>
            <div className="articleWrapper">
                <h1>MCRC</h1>
                <p><strong>About Midlife Crisis Riding Club (MCRC)</strong></p>
                <p>Welcome to the Midlife Crisis Motorcycle Riding Club (MCRC), where the call of the open road and the spirit of freedom unite riders from all walks of life. We're not your average riding organization; we're a community of vagabond motorcyclists who seek adventure and embrace the thrill of two-wheeled exploration.</p>
                <p><strong>Our Story</strong></p>
                <p>The Midlife Crisis Motorcycle Riding Club (MCRC) is a fictional organization that exists in spirit, welcoming anyone who shares the desire for freedom on two wheels. Founded on the belief that the road is meant to be explored by those who seek the thrill of adventure, our organization is a testament to the enduring spirit of the wanderer.</p>
                <p><strong>Our Mission</strong></p>
                <p>At MCRC, our mission is to celebrate the essence of the vagabond motorcyclist lifestyle. We believe in the pursuit of adventure, the camaraderie of the road, and the freedom found in the wind. Our organization offers a symbolic membership through the carrying of the Time Lord emblem, a testament to our shared love for the open road.</p>
                <p><strong>What We Stand For</strong></p>
                <p><strong>Freedom:</strong> We believe in the freedom that comes from riding motorcycles and exploring the open road.</p>
                <p><strong>Adventure:</strong> We thrive on the thrill of the unknown and seek out new experiences wherever the road may lead.</p>
                <p><strong>Community:</strong> We are a diverse community of riders who share a bond forged by the love of motorcycling and the spirit of adventure.</p>
                <p><strong>Inclusivity:</strong> Our club welcomes all who share our passion for freedom, regardless of age, background, or experience level.</p>
                <p><strong>Join Us</strong></p>
                <p>Are you ready to embrace the spirit of adventure with the Midlife Crisis Riding Club (MCRC)? Whether you're a seasoned rider or just starting out, we invite you to join our community and become part of the journey. Carry the Time Lord emblem with pride and ride with us into the unknown.</p>
                <p className="left link"><Link href="/">&laquo; Back</Link></p>
            </div>
            <p className="center link app">
                Get the badge on Google Play
                <a href="https://play.google.com/store/apps/details?id=com.jinordnes.MCMC" target="_blank">
                    <img src="/android-market-icon.png" alt="image" width={200} height="auto" />
                </a>
            </p>
        </>
    )
}
export default Page