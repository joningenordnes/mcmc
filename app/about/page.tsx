import React from "react"
import { getClient } from "../../client";
import { postQuery } from "@/queries/post";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

const Page = async () => {

    const client = getClient();
    const id = 'clstedlbu0000bf28oputocpl';

    const { data } = await client.query({
        query: postQuery,
        variables: { where: { id } },
        fetchPolicy: 'no-cache'
    });
    const { post } = data;

    return (
        <>
            <div className="articleWrapper">
                <h1>{post.title}</h1>
                {post.content.document.map((block, i) => {
                    let out = [];
                    block.children.map((child, p) => {
                        if (child.children) {
                            child.children.map((child, q) => {
                                out.push(<Paragraph block={child} index={p} key={`para-block-${i}-${p}-${q}`} />);
                            });
                        }
                        else
                            out.push(<Paragraph block={child} index={p} key={`para-block-${i}-${p}`} />);
                    });
                    return out;
                })}
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