//render this page completely on the client side
"use client";
import dynamic from "next/dynamic";

const DynamicVidioUI = dynamic(() => import("./video-ui-kit"), {ssr: false});

export default function VidioCall() {
    return <DynamicVidioUI />;
}
