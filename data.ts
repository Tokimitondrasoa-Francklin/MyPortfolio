import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import { IService, ISkill, IProject } from './types'
import { FaServer } from 'react-icons/fa'
import { MdDeveloperMode} from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'


export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title:"GIS Database Development",
        about:"Creating a geospatial database by using a <b>GIS software</b> and a <b>programing language</b>",
    },
    {
        Icon: AiOutlineAntDesign,
        title:"Geological and geophysical survey",
        about:"Collection of information associated with <b>surface</b> and <b>subsurface features</b>",
    },
    {
        Icon: RiComputerLine,
        title:"Frontend Development",
        about:"I can build a beautiful and scalable user interfaces using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>",
    },
 
    {
        Icon: FaServer,
        title:"Backend Development",
        about:"Handle database, server, api using <b> Node </b> and <b> Express </b>",
    },

    {
        Icon: RiComputerLine,
        title:"UI/UX designer",
        about:"stunning user interface designer using <b>Figma</b>",
    },
  
   
]

export const languages:ISkill[] =[

    {
        Icon:BsCircleFill,
        name:'Python',
        level:'70%',
    },
    {
        Icon:BsCircleFill,
        name:'Java',
        level:'40%',
    },
    {
        Icon:BsCircleFill,
        name:'JavaScript',
        level:'70%',
    },
    {
        Icon:BsCircleFill,
        name:'PHP',
        level:'50%',
    },
    {
        Icon:BsCircleFill,
        name:'React',
        level:'60%',
    },
    {
        Icon:BsCircleFill,
        name:'Leaflet.js',
        level:'50%',
    },


]

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name:'MODFLOW',
        level:'80%'
    },
  
    {
        Icon: BsCircleFill,
        name:'ArcGIS Desktop',
        level:'95%'
    },

    {
        Icon: BsCircleFill,
        name:'Microsoft Acess',
        level:'90%'
    },
    {
        Icon: BsCircleFill,
        name:'MySQL',
        level:'60%'
    },
]

export const projects:IProject[] = [

    {
    
        name:"Chat App",
        description:"A basic Chat app",
        image_path:"/images/chapp.png",
        deployed_url:"https://github.com/Tokimitondrasoa-Francklin",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["React"],
        key_techs:["React","Node","Socket","REST API"],
    }, {
      
        name:"Bug Tracker",
        description:"This app was made to track issue",
        image_path:"/images/bug.png",
        deployed_url:"https://github.com/Tokimitondrasoa-Francklin",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["React"],
        key_techs:["React","REST API"],
    },
    {
     
        name:"Banking System",
        description:"This is a basic bank ATM system",
        image_path:"/images/bank.png",
        deployed_url:"https://github.com/Tokimitondrasoa-Francklin/basic-ATM-system.git",
        github_url:"https://github.com/Tokimitondrasoa-Francklin/basic-ATM-system.git",
        category:["Python"],
        key_techs:["Python","tkinter"],
    },
    {
      
        name:"Rio Tinto QMM Geotechnical Monitoring Database",
        description:"This DB was built to store all data from weekly and monthly geotechnical monitoring in Mandena site",
        image_path:"/images/stqmmdb.png",
        deployed_url:"#",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["Ms Access"],
        key_techs:["Ms Access","Database"],
    },
    {
       
        name:"Rio Tinto QMM Geological Database",
        description:"This DB was built to store all data from core drilling surveys in Mandena site",
        image_path:"/images/rtqmmdb1.png",
        deployed_url:"#",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["Ms Access"],
        key_techs:["Ms Access","Database"],
    },
    {
      
        name:"I.O.G.A Geophysical Database",
        description:"This DB was built to store and visualize all data from geophysics survey on the dynamic map",
        image_path:"/images/ioga.png",
        deployed_url:"https://www.youtube.com/watch?v=Ws8lXqHcHrc",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["Mongo"],
        key_techs:["Electron.js","Mongo","Leaflet"],
    },
    {
      
        name:"Quick response (QR) code generator",
        description:"A simple QR code generator app",
        image_path:"/images/qrcode.png",
        deployed_url:"#",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["Python"],
        key_techs:["qrcode"],
    },
    {
      
        name:"Certificate generator",
        description:"A basic certificate generator app",
        image_path:"/images/Cert.png",
        deployed_url:"#",
        github_url:"https://github.com/Tokimitondrasoa-Francklin",
        category:["React"],
        key_techs:["pdf-lib","FileSaver.js"],
    },
]

