import {FunctionComponent} from 'react';
import React from 'react';
import { Category } from '../types';
// import handlerFl

export const NavItem:FunctionComponent<{ 
  value : Category | 'all';
  handlerFilterCategory:Function;
  active:string
}> = ({value, handlerFilterCategory, active}) => {


  let className = "capitalize cursor-pointer hover:text-blue-500"
  if (active === value) className += " text-blue-500";

  return (
    <li 
    className={className} 
    onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavBar: FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
  return (
    <div className='space-x-3 flex px-3 py-2 list-none ocerflow-x-auto'>
      <NavItem value="all" {...props}/>
      <NavItem value="React" {...props}/>
      <NavItem value="Mongo" {...props}/>
      <NavItem value="Ms Access" {...props}/>
      <NavItem value="Python" {...props}/>
    </div>
  );
}

export default ProjectsNavBar;
