import React from 'react';
import { languages, tools } from '../data';
import Bar from '../components/Bar';
import {motion} from 'framer-motion';
import { fadeInUp } from '../animation';

const resume = () => {




  return (
    <div className='p-6 py-2'>
        {/* education & exp*/}
        <div className="grid gap-6 md:grid-cols-2">

            <motion.div
                variants={fadeInUp} initial='initial' animate="animate"
            >
              <h5 className='my-3 text-2xl font-bold'>Education</h5>
              
              <div>
                <h5 className='my-2 text-xl font-bold'>
                MERN Fullstack Developer
                </h5>
                <p className='font-semibold'>ArkeUp Academy (01 Mars - 27 Mai 2022)</p> 
              </div>
              <div>
                <h5 className='my-2 text-xl font-bold'>
                Master in Management of Minerals Resources and Environment 
                </h5>
                <p className='font-semibold'>University of Ankatso, Antananarivo Madagascar (2018-2020)</p> 
              </div>
              <div>
                <h5 className='my-2 text-xl font-bold'>
                Master in Science and Technic in Geophysics & Geomatics
                </h5>
                <p className='font-semibold'>Institute and Observatory of Geophysics of Antananarivo (IOGA) (2018-2019)</p>
               
              </div>
              <div>
                <h5 className='my-2 text-xl font-bold'>
                Bachelor Degree in Geology
                </h5>
                <p className='font-semibold'>Higher Institute of Technology of Anosy (ISTA) (2013-2016)</p>
               
              </div>
        

              
              
            </motion.div>
            <motion.div 
            
            variants={fadeInUp} initial='initial' animate="animate"
            
            >
              <h5 className='my-3 text-2xl font-bold'>Experience</h5>
              <div>
                <h5 className='my-2 text-xl font-bold'>
                Database developer
                </h5>
                <p className='font-semibold'>Rio Tinto QMM (Quebec Madagascar Minerals)  (February - April 2021)</p>
                <p className='my-3'>
                Development of a geotechnical monitoring database for Slope, dump and tailings management
                </p>
              </div>
              <div>
                <h5 className='my-2 text-xl font-bold'>
                Geographic Information System (GIS) Analyst 
                </h5>
                <p className='font-semibold'> The Royal Botanic Garden Crew (February 2020)</p>
                <p className='my-3'>
                Detection remotely of wildfires in a protected area of Ankarafantsika
                </p>
              </div>

              <div>
                <h5 className='my-2 text-xl font-bold'>
                Trainer
                </h5>
                <p className='font-semibold'>SOA-PIDM (Geographic Information System - Statistics Training Center) (April 2018)</p>
                <p className='my-3'>
                Database development and administration by using Microsoft Acces
                </p>
              </div>
          
            </motion.div>
        </div>

        {/* language & tool */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className="my-2">
              {
                languages.map(language=>(<Bar data={language} key={language.name}/>))
              }
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="my-2">
              {
                tools.map(tool=>(<Bar data={tool} key={tool.name}/>))
              }
            </div>
          </div>
        </div>



    </div>
  );
}

export default resume;
