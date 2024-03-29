import React from "react"
import Logo from "@/components/Logo"
import { getClient } from "../client";
import { gql } from "@apollo/client";
import { postQuery } from "@/queries/post";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";

const Page = async () => {

    const client = getClient();
    const id = 'clsoduf1z0002lrgo96ix5ht5';

    const { data } = await client.query({
        query: postQuery,
        variables: { where: { id } },
        fetchPolicy: 'no-cache'
    });
    const { post } = data;

    return (
        <div className="mCC">
            <Logo />
            <div className="textWrapper">

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

                <p className="right link"><Link href="/about">Read on &raquo;</Link></p>
            </div>
        </div>
    )
}
export default Page