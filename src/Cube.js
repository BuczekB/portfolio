import React from 'react';
import './cube.css'

function Cube({ bg }) {




    return (



        <div className='cube' >

            <div className={bg}>
                <span className='one'></span>
                <span className='two'></span>
                <span className='three'></span>
                <span className='four'></span>
                <span className='top'></span>
                <span className='bottom'></span>
            </div>


        </div >

    );
}


export default Cube