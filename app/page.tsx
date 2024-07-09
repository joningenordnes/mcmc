import Logo from "@/components/Logo"
import Link from "next/link";

const Page = async () => {
    return (
        <div className="mCC">
            <Logo />
            <div className="textWrapper">
                <h1>The Pledge</h1>
                <p>With the Time Lord's emblem, our badge of pride, We embrace the journey, with nothing to hide. Through twists and turns, we face every bend, For the thrill of the ride, until the very end.</p>
                <p>So here's to the open road, our eternal friend, In the Midlife Crisis RC, our spirits ascend. With courage and honor, we'll ride side by side, In the heart of the wind, where our dreams collide.</p>
                <p className="right link"><Link href="/about">Read on &raquo;</Link></p>
            </div>
        </div>
    )
}
export default Page