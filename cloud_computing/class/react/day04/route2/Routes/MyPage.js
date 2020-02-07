import React from 'react';
import { Redirect } from 'react-router-dom';


const MyPage = () => {
    const islogged = false;
    return (  
        <div>
            {
                !islogged && <Redirect to ="/login"/>
            }
            
        </div>
    );
}
 
export default MyPage;