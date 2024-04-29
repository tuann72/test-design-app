"use client"
import React, { useEffect } from "react";
import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion';
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const COLORS: string[] = ["#14e81e", "#00ea8d", "#017ed5", "#b53dff", "#8d00c4"];

export const AuroraEffect = ({slogan, text, btnText, location}:{slogan:string, text:string, btnText:string, location:string}) => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 100% at 50% 0%, #f5f5f5 75%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    const router = useRouter()

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, []);

    return(
        <motion.section
        style={{
            backgroundImage
        }}
        className="relative grid min-h-screen w-screen place-content-center overflow-hidden bg-slate-100 px-4 py-24 text-gray-950">
            <div className="flex flex-col items-center">
                <img className="h-30 w-80" src="/logoipsum-235.svg"/>
                <h1 className="max-w-6xl text-5xl font-medium bg-gradient-to-b from-slate-400 to-slate-800 bg-clip-text text-transparent text-center pb-3">{slogan}</h1>
                <p className="text-center pb-6">{text}</p>
                <motion.button
                    className="group relative gap-1 flex w-fit px-4 py-2 rounded-md"
                    style={{border, boxShadow}}
                    whileHover={{scale:1.015}}
                    whileTap={{scale:0.985}}
                    onClick={()=>router.push(location)}>
                    {btnText} <ArrowRightIcon/>
                </motion.button>
            </div>
        </motion.section>
    );
};