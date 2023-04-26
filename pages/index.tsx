import { 
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
// import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { services } from '../data'
// import { Service } from '../types'
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animation';

const index = ({endpoint}) => {

  console.log(endpoint);

  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>I’m a mining geologist, a geophysicist and WebGIS developer with strong knowledge of Geographic Information System and a 
database development and administration. Easily adaptable to any situations and I can work well as part of 
a team.
</h5>
<div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
  <h6 className='my-3 text-xl font-bold tracking-wide'>What I offer</h6>
  <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
    
      {services.map(service => (
        <motion.div 
        
        variants={fadeInUp} 
      
        className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'>
          <ServiceCard service={service}/>
        </motion.div>
      ))}

  </motion.div>
</div>
</div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (
  context:GetServerSidePropsContext
  ) => {
      ////calculation

  // const res =  await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()

  // console.log(process.env.VERCEL_URL)
      return {props:{ endpoint : process.env.VERCEL_URL } }
};
