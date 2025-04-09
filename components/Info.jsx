import React from 'react'

const Info = () => {
  return (
    <div className="md:col-span-5 space-y-8">
      <div className="relative h-full">
        <div className="absolute h-full -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#4ade80] rounded-lg blur opacity-25"></div>
        <div className="relative h-full dark:bg-[#1e293b] bg-white border border-gray-200 dark:border-[#334155] rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-[#334155] flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 font-mono text-sm text-[#94a3b8]">
              developer-profile.json
            </div>
          </div>

          <div className="p-6 font-mono text-sm">
            <div className="text-[#94a3b8]">{"{"}</div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">"name"</span>
              :<span className="dark:text-[#4ade80] text-[#1f6e3c]">"Boukra Abdellah"</span>,
            </div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">
                "title"
              </span>
              :<span className="dark:text-[#4ade80] text-[#1f6e3c]">"Full Stack Developer"</span>,
            </div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">
                "location"
              </span>
              :<span className="dark:text-[#4ade80] text-[#1f6e3c]">"Ain Temouchent, Algeria"</span>
              ,
            </div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">
                "yearsOfExperience"
              </span>
              :<span className="text-[#f87171]">3</span>,
            </div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">
                "languages"
              </span>
              : [
              <div className="pl-4">
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"JavaScript"</span>,
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"TypeScript"</span>,
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"Java"</span>,
                {/* <span className="dark:text-[#4ade80] text-[#1f6e3c]">"C#"</span> */}
              </div>
              ],
            </div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">
                "Services"
              </span>
              : [
              <div className="pl-4">
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"Devleoping Websites"</span>,
                <br />
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"Website Maintaining"</span>,
                <br />
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">
                  "Improve Performance"
                </span>, <br />
              </div>
              ],
            </div>
            <div className="pl-4">
              <span className="dark:text-[#38bdf8] text-[#1653f8]">
                "interests"
              </span>
              : [
              <div className="pl-4">
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"Web Performance"</span>,
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"UI/UX"</span>,
                <span className="dark:text-[#4ade80] text-[#1f6e3c]">"Open Source"</span>
              </div>
              ]
            </div>
            <div className="text-[#94a3b8]">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info