import React from 'react'
import { FunctionComponent } from 'react'
import { ISkill } from '../types'
import {motion} from 'framer-motion';



const Bar:FunctionComponent<{data:ISkill
}> = ({data:{Icon, level, name}}) => {

    // const bar_width = `${level}$`;
    const variants={

        initial:{
          width:0
        },
        animate:{
          width:level,
          transition:{
            duration:0.4,
            type:"spring",
            damping:10,
            stiffness:100,
          },
        },
    };
  return (
    <div className='text-white my-2 bg-gray-300 rounded-full'
           
    >
      <motion.div 
      className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-sky-900 to-sky-500"
       style={{
         width:level,
        }}
       variants={variants}
       initial ="initial"
       animate="animate"
      >
      <Icon className='mr-3'/> {name}

      </motion.div>
    </div>
  );
};

export default Bar
