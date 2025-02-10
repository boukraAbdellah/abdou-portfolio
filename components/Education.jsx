import React from 'react'
import { IoDocument } from "react-icons/io5";


const Education = () => {
  return (
    <section className="py-10 px-5 col-span-1 md:col-span-4 h-full bg-innerbg rounded-3xl">
            <div className="h-full flex flex-col justify-between items-center">
              <div>
                <h2 className="title mb-4">Education</h2>
                <div className="flex flex-col gap-3 ">
                  <div className="">
                    <span>2023 - Present</span>
                    <div className="w-full rounded-full h-[2px] mb-1 bg-gray-700 dark:bg-gray-300"></div>
                    <p className="text-xs ">
                      Higher School of Computer Science (ESI-SBA) - Second cycle
                    </p>
                  </div>
                  <div className="">
                    <span>2021 - 2023</span>
                    <div className="w-full rounded-full h-[2px] mb-1 bg-gray-700 dark:bg-gray-300"></div>
                    <p className="text-xs ">
                      Higher School of Computer Science (ESI-SBA) -
                      <span>Preparatory cycle</span>
                    </p>
                  </div>
                  <div className="">
                    <span>2021</span>
                    <div className="w-full rounded-full h-[2px] mb-1 bg-gray-700 dark:bg-gray-300"></div>
                    <p className="text-xs ">
                      Baccalaureate (High School Diploma)
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-md:mt-10   ">
                <button className="btn-primary flex items-center gap-3 !bg-secondary text-[#f4f4f4] dark:text-outerbg font-poppins font-medium">
                  Download CV <IoDocument />{" "}
          </button>
        </div>
        </div>
      </section>
  )
}

export default Education