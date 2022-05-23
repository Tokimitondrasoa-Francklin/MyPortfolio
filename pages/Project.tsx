import React from 'react';
import { projects as projectsData } from '../data';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavBar from '../components/ProjectsNavBar';
import { useState } from 'react';
import { Category } from '../types';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animation';


const Project = () => {

    const [projects, setProjects] = useState(projectsData);
    const [active, setactive] = useState("all")

    const handlerFilterCategory = (category:Category | 'all')=>{
          if(category === "all"){
            setProjects(projectsData);
            setactive(category);
            return;
          }

         const newArray = projectsData.filter(project=>project.category.includes(category));
         setProjects(newArray);
         setactive(category);
    };

  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height:"75vh"}}>
      <ProjectsNavBar handlerFilterCategory={handlerFilterCategory} active={active}/>

      <motion.div variants={stagger} initial="initial" animate="animate" className='relative grid grid-cols-12 gap-4 my-3'>
          {projects.map((project)=>(
              <motion.div variants={fadeInUp}  key={project.name} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-300">
                <ProjectCard project={project}/>
              </motion.div>

          ))

          }
      </motion.div>
    </div>
  );
};

export default Project;
