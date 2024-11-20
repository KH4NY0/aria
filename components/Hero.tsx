import {ArrowRight} from "lucide-react";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import {SignupButton} from "@/components/auth/signup-button";

export const Hero = () => {
  return (
      <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
            <div className="container mx-auto px-4 md:px-8 pt-8 md:pt-12">
                <div className="md:flex items-center">
                    <div className="md:w-[478px]">


                        <div
                            className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
                            Version 1.0
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway
                            to productivity</h1>
                        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                            Improve focus, boost productivity, and manage tasks efficiently with real-time
                            tracking and insightful reports. Simplify time management and achieve your goals!
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                            <SignupButton>
                                <button className="btn btn-primary hover:text-blue-400 hover:bg-white">Get Started
                                </button>
                            </SignupButton>

                            <button className="btn btn-text gap-1 transition ease-in-out hover:text-white">
                                <span>View Source Code</span>
                                <ArrowRight/>
                            </button>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <Image src={cogImage} alt="cog image"
                               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"/>
                        <Image src={cylinderImage} width={220} height={220} alt="cylinder image" className="hidden md:block -top-8 -left-32 md:absolute"/>
                        <Image src={noodleImage} width={220} alt="noodle image" className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]" />
                    </div>
                </div>
            </div>
      </section>
  )
};
