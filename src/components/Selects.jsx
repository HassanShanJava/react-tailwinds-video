import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';

import SelectsCards from './SelectsCards';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        
        <SelectsCards img={Maldives} name='Maldives' />
        <SelectsCards img={BoraBora} name='Bora Bora' />
        <SelectsCards img={BoraBora2} name='Jamica' />
        <SelectsCards img={Maldives2} name='Antigua' />
        <SelectsCards img={KeyWest} name='Key West' />
        <SelectsCards img={Maldives3} name='Cozumal' />


    </div>
  )
}

export default Selects