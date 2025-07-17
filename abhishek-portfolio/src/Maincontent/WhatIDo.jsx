import React from "react";

const contents = [
  {
    title: "MERN STACK",
    icons: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "React",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        alt: "MongoDB",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        alt: "Express.js",
      },
    ],
  },
  {
    title: "DSA with C++",
    icons: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        alt: "C++",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
        alt: "LeetCode",
        link: "https://leetcode.com/",
      },
      {
        src: "https://media.geeksforgeeks.org/auth/profile/06xab1vwhg91p8upssrr",
        alt: "GeeksforGeeks",
        link: "https://www.geeksforgeeks.org/",
      },
    ],
  },
];

function WhatIDo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-start mt-12 text-gray-900 dark:text-gray-100">What I'm Doing</h2>
      <div className="flex flex-wrap gap-8 justify-center items-start py-8">
        {contents.map((content, idx) => (
          <div
            key={content.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-96 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              {content.icons.map((icon, i) => (
                icon.link ? (
                  <a key={icon.alt} href={icon.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                      title={icon.alt}
                    />
                  </a>
                ) : (
                  <img
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    className="w-10 h-10 object-contain"
                    title={icon.alt}
                  />
                )
              ))}
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{content.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;