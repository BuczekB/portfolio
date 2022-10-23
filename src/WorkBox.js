import React from 'react';

import Card from './Card';
import './workBox.css';





function WorkBox() {



    return (

        <div className='works'>

            <h2>
                My
                <span className='orangeSpan'> Works</span>

            </h2>


            <div className='worksBox'>
                <Card text={'Weather App'} bg={'cardOne '} />
                <Card text={'BJ Game'} bg={'cardTwo '} />
                <Card text={'Website'} bg={'cardThree '} />
            </div >

        </div >
    );
}


export default WorkBox


