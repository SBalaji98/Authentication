import React from 'react';

import NavBar from '../../components/Navigation'

const index = props => {
    return (
        <>
            <NavBar/>
            {props.children}
        </>

    );
};


export default index;