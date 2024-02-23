import React from "react"
import Logo from "@/components/Logo"

const Page = () => {
    return (
        <div className="mCC">
            <Logo/>
            <a href="https://play.google.com/store/apps/details?id=com.jinordnes.MCMC" target="_blank">
                <img src="/android-market-icon.png" alt="image" width={200} height="auto"/>
            </a>
        </div>
    )
}
export default Page