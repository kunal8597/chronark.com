"use client";
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";


export default function Example() {
	return (
		<div className="">

         
			








			<div className="container flex  items-center justify-between p-6 mx-auto">
            <Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6  " />
					</Link>

			</div>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={20}
      />
     
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="flex text-sm text-zinc-300 m-10  p-10 text-left justify-items-left font-medium  align-text-top ">
        I'm Kunal Mathur, a passionate CS student currently in 3rd Year at VIT,Bhopal diving into the world of web development with a drive for creating immersive digital experiences. With a foundation in web development and a growing interest in AI/ML, I'm dedicated to crafting beautiful and functional websites that push boundaries and inspire innovation.
<br></br>
<br></br>
Driven by curiosity and a thirst for knowledge, I'm constantly exploring new technologies and techniques to expand my skills and stay ahead of the curve. 
<br></br>
Eager to collaborate on projects at the intersection of web development and AI/ML, aiming to contribute innovative solutions to real-world challenges and drive technological advancement.
<br></br>
<br></br>

Apart from coding, I am passionate about following cricket🏏. You can also find me at the gym🏋🏻‍♂️.
        </h2>
        <button className="text-zinc-400">
  <a href="https://drive.google.com/file/d/1mQR3AHZOI7915Po-4tdqjSXty52F10ea/view?usp=share_link">Download Resume</a>
</button>
      </div>
    </div>


        

	);
}
