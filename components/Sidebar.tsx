import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'


const Sidebar = ()=>{

    const {theme, setTheme } = useTheme();

    const changeTheme =()=>{
        setTheme(theme==="light"?"dark":"light");
    };



    return (
        <div>
            <Image src='/images/astro.jpg' 
            alt="user avatar" 
            className='mx-auto border rounded-full'
            height="128px"
            width="128px"
            layout="intrinsic"
            quality="100"

            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kausan'><span className='text-blue-500'>Francklin</span> Tokimitondrasoa</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>Geo-scientist and Developer</p>

            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500' href='/assets/TM-Francklin.pdf' download='TM-Francklin_.pdf'><GiTie className='w-6 h-6' /> Download Resume</a>
            {/* Social icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-cyan-900 md:w-full'>
                <a href='https://www.youtube.com/channel/UC9pGUtv8P9VTapRbakIkl-w'>
                    <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href='https://github.com/Tokimitondrasoa-Francklin'>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href='https://www.linkedin.com/in/tokimitondrasoa-francklin-8a7803233/'>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                
            </div>
            {/* Contact */}

            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-300 dark:bg-black-500'
            style={{marginLeft: '-1rem', marginRight:'-1rem'}}
            >
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation  />
                    <span>Antananarivo, Madagascar</span>
                </div>
                <p className='my-2'>tomitondrasoa.francklintf@gmail.com</p>
                <p className='my-2'>+261 32 79 223 98/ +261 34 86 779 61</p>
            </div>
            {/* Email button */}
            <button className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-sky-900 to-sky-500 focus:outline-none'
            onClick={()=>window.open('mailto:tokimitondrasoa.francklintf@gmail.com')}
            >Email me</button>
            <button
            
                onClick={changeTheme}
            
             className='w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-sky-900 to-sky-500'>Toggle Theme</button>
        </div>
    )
}

export default Sidebar
