import { HiOutlineMail } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import Separator from '../components/Separator';

function Sidebar() {
    return (
        <div className=' mx-auto  p-6  rounded-xl shadow-md flex flex-col items-center gap-6 bg-gradient-to-b from-[#232526] via-[#2c3e50] to-[#131311] '>
            <div className='w-32 h-32 rounded-full overflow-hidden border-1'>
                <img src="hacker.png"  alt="profile_image" />
            </div>
            <div>
                <h2>Abhishek Sharma</h2>
                <h4>MERN Stack Developer</h4>
            </div>
            <Separator/>
            <div className="flex flex-col gap-3 text-gray-800 text-sm">

                <div className="flex items-start gap-3">
                    <HiOutlineMail className="text-xl mt-0.5 text-[#cdb262]" />
                    <a
                        href="mailto:abhishek.s.sharma.04@gmail.com"
                        className="font-medium hover:underline text-white"
                    >
                        abhishek.s.sharma.04@gmail.com
                    </a>                </div>

               
                <div className="flex items-start gap-3">
                    <IoLocationOutline className="text-xl mt-0.5 text-[#cdb262]" />
                    <p className="text-white">India</p>
                </div>
            </div>
            <Separator />

            <div>
                <ul className="flex gap-4 text-2xl text-gray-600">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/abhishek-sharma1173/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0077b5] text-white transition-colors duration-300"
                        >
                            <IoLogoLinkedin />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Abhishek-Sharma-21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black text-white transition-colors duration-300"
                        >
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/your-twitter-id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#1da1f2] text-white transition-colors duration-300"
                        >
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>
            <Separator />
            <div>
                <a
                    href="https://drive.google.com/file/d/1aGYCLw0yvpgh3KSq5BIUOspy1pdNWC-0/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="w-[190px] py-2 px-4 text-sm bg-[#2b2b2b] text-[#ff9900] rounded-[15px] transition-all duration-300 transform hover:bg-[#ff9900] hover:text-white hover:scale-110"
                    >
                        <span className="font-bold text-base font-sans">Download Resume</span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;