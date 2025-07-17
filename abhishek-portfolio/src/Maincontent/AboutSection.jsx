import WhatIDo from "./WhatIDo";

function AboutSection(){
    return (
        <div>
            <div className="">
                <p className="text-gray-700 dark:text-gray-300 text-lg text-start">
                    I am a full-stack web developer with a strong interest in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). I enjoy tackling complex problems and am always looking for ways to improve my skills and stay up-to-date with new technologies. Currently, I am focused on strengthening my understanding of Data Structures and Algorithms with C++, and I regularly practice on LeetCode and GeeksforGeeks to sharpen my problem-solving abilities. I am committed to writing clean, efficient code and delivering reliable solutions.
                </p>
            </div>
            <div >
                <WhatIDo/>
            </div>
        </div>
    )
}

export default AboutSection;