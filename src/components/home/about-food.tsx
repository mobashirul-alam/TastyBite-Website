"use client";

import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import burger from "../../../public/images/burger.png";
import ButtonPrimary from "../common/button/buttonPrimary";

const AboutFood = () => {
    return (
        <div>
            <div className="container">
                <div className="md:max-w-[560px] md:mx-auto lg:max-w-full my-[50px] md:my-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <Image
                            src={burger}
                            alt="burger-img"
                            width={633}
                            height={574}
                            className="w-full"
                        />
                    </motion.div>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="w-[520px]"
                        >
                            <p
                                className={`text-primary-orange text-left text-xl md:text-2xl lg:text-[30px] font-pacifico mb-2 md:mb-3 lg:mb-5`}
                            >
                                About Our Food
                            </p>
                            <h2
                                className={`text-primary-black
                            text-left text-5xl md:text-6xl lg:text-[70px] uppercase font-bold tracking-wide mb-5`}
                            >
                                Where Quality Meet Excellent{" "}
                                <span className="text-primary-orange">
                                    Service.
                                </span>
                            </h2>
                            <p className="text-sm mb-6 text-primary-black/75 max-w-[480px] text-left">
                                It&apos;s the perfect dining experience where
                                every dish is crafted with fresh, high-quality
                                Experience quick and efficient service that
                                ensures your food is served fresh It&apos;s the
                                dining experience where every dish is crafted
                                with fresh, high-quality ingredients
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 max-w-[480px] mb-6">
                                <div className="flex items-center gap-3">
                                    <Award className="w-[55px] h-[55px] text-primary-orange" />
                                    <div>
                                        <p className="text-primary-black text-base uppercase font-semibold">
                                            Super quality food
                                        </p>
                                        <p className="text-primary-black text-sm">
                                            A team of dreamers and doers build
                                            unique interactive music and art
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Medal className="w-[55px] h-[55px] text-primary-orange" />
                                    <div>
                                        <p className="text-primary-black text-base uppercase font-semibold">
                                            Well reputation
                                        </p>
                                        <p className="text-primary-black text-sm">
                                            A team of reputed dreamers and doers
                                            build unique interactive art
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start md:items-center gap-3 md:gap-5 lg:gap-3">
                                <Link href={"/about"}>
                                    <ButtonPrimary text="More About Us" />
                                </Link>
                                <div>
                                    <p className="text-primary-orange uppercase text-sm font-semibold tracking-wide">
                                        Brendon Garry
                                    </p>
                                    <p className="text-primary-black text-sm uppercase">
                                        Customer&apos;s experience is our
                                        highest priority.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFood;
