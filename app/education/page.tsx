import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Particles from '../components/particles';

export default function Example() {
  return (
    <div className="">
      <div className="container flex items-center justify-between p-6 mx-auto">
        <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={80} />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="flex flex-wrap justify-center py-9">

      <div className="flex justify-center">
     
        <table className="table-auto border-collapse border border-zinc-300">
          <thead className="bg-transparent text-white">
            <tr>
              <th className="px-4 py-2">Educational Institution</th>
              <th className="px-4 py-2">Standard</th>
              <th className="px-4 py-2">Tenure</th>
            </tr>
          </thead>
          <tbody className="bg-transparent text-white">
            <tr>
              <td className="px-4 py-2">VIT Bhopal</td>
              <td className="px-4 py-2">B.Tech</td>
              <td className="px-4 py-2">2021-</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Modern Vidya Niketan,Aravali Hills</td>
              <td className="px-4 py-2">Higher Senior Secondary School (XII)</td>
              <td className="px-4 py-2">July 2021</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Modern Vidya Niketan,Aravali Hills</td>
              <td className="px-4 py-2">Senior Secondary School (X)</td>
              <td className="px-4 py-2">March 2019</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
