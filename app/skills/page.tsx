import { Link, ArrowLeft, Navigation } from "lucide-react";
import Particles from "../components/particles";


export default function Example() {
  return (


    
    <div className="flex justify-center items-center h-screen">
     
   
    <div className="flex flex-wrap justify-center py-9">
      
      
    <Particles
className="absolute inset-0 -z-10 animate-fade-in"
quantity={130}
/>
          <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-2 text-s font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
      Javascript
      </span>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-3 py-2 text-s font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
        Typescript
      </span>
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-s font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2">
        React
      </span>
      <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-s font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-2">
        NextJs
      </span>
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-s font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2">
        Redis
      </span>
     
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-s font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">
        MongoDB
      </span>
      <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-s font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mr-2">
        Express
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-s font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mr-2">
        NodeJs
      </span>
      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-s font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
        Java
      </span>
    </div>
    </div>
   
  );
}
