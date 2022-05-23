import React from 'react';
import {FunctionComponent} from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { IProject } from '../types';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { stagger, fadeInUp} from '../animation';





const ProjectCard:FunctionComponent<{
    project:IProject;

}> = ({
    project:{
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,

    }
}) => {

    const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      
      <Image 
        src={image_path} 
        alt={name} 
        className='cursor-pointer' 
        onClick={()=>setShowDetail(true)}
        width="300"
        height="150"
        layout='responsive'
        />

      {/* <img src={image_path} alt={name} className='cursor-pointer' onClick={()=>setShowDetail(true)}/> */}


      <p className='my-2 text-center'>{name}</p>

      {
        showDetail && (
     

    <div className='rounded-lg md:p-10 absolute top-0 left-0 z-10 grid w-full h-auto p-5 text-black bg-gray-100 gap-x-12 md:grid-cols-2 dark:text-white dark:bg-dark-600'>

        <motion.div variants={stagger} initial="initial" animate="animate">
          
          {/* <img src={image_path} alt={name}/> */}
        <motion.div variants={fadeInUp} className="border-4 border-gray-100">
            <Image 

                src={image_path} 
                alt={name} 
                width="300"
                height="150"
                layout='responsive'

            />
        </motion.div> 
         
         
          <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
            <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-300">
              <AiFillGithub/> <span>Github</span>
            </a>

            
            
            <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-300">
              <AiFillProject/> <span>Project</span>
            </a>
          </motion.div>

    </motion.div>
      <motion.div variants={stagger} initial="initial" animate="animate">
              <motion.h2 variants={fadeInUp}  className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
              <motion.h3 variants={fadeInUp} className='mb-3 font-medium'>{description}</motion.h3>
              <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>

                {
                  key_techs.map((tech)=>(<span key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-300"
                  >{tech}</span>))
                }

              </motion.div>
      </motion.div>
        <button onClick={()=>setShowDetail(false)}
        
        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
        
        >
          <MdClose size={30} />
        </button>
      </div>
        )}
    </div>
  );
}

export default ProjectCard;
