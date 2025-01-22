import Image from 'next/image'
import React from 'react'

const Tools = () => {
  return (
    <section className=" md:col-span-12 col-span-1 rounded-3xl p-10 bg-white">
      <h2 className=" title">Tools & Technologies</h2>
      <div className="flex gap-10 flex-wrap mt-6">
        <Image className='hover:scale-110 transition-all cursor-pointer' src="/js.png" alt="Javascript" width={70} height={70} />
        <Image className='hover:scale-110 transition-all cursor-pointer' src="/node-js.png" alt="Node Js" width={70} height={70} />
        <Image className='hover:scale-110 transition-all cursor-pointer'
          src="/icons8-typescript.svg"
          alt="Typescript"
          width={70}
          height={70}
        />
        <Image className='hover:scale-110 transition-all cursor-pointer' src="/icons8-next.js.svg" alt="Next js" width={70} height={70} />
        <Image className='hover:scale-110 transition-all cursor-pointer' src="/science.png" alt="React" width={70} height={70} />
        <Image className='hover:scale-110 transition-all cursor-pointer' src="/icons8-html-5.svg" alt="Html 5" width={70} height={70} />
        <Image className='hover:scale-110 transition-all cursor-pointer' src="/icons8-css3.svg" alt="CSS" width={70} height={70} />
        <Image className='hover:scale-110 transition-all cursor-pointer'
          src="/icons8-express-js.svg"
          alt="Javascript"
          width={70}
          height={70}
        />
        <Image className='hover:scale-110 transition-all cursor-pointer'
          src="/icons8-mongodb-144.png"
          alt="Mongo"
          width={70}
          height={70}
        />
        <Image className='hover:scale-110 transition-all cursor-pointer'
          src="/icons8-mysql-logo.svg"
          alt="MySQL"
          width={70}
          height={70}
        />
        <Image className='hover:scale-110 transition-all cursor-pointer'
          src="/icons8-tailwind-css.svg"
          alt="Tailwindcss"
          width={70}
          height={70}
        />
        <Image className='hover:scale-110 transition-all cursor-pointer'
          src="/icons8-git.svg"
          alt="Git"
          width={70}
          height={70}
        />
      </div>
    </section>
  );
}

export default Tools