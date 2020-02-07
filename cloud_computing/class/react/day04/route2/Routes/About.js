import React from 'react';

const About = ({match}) => {
    return (  
        <div>
            <h1>{match.params.userId} 's Profile</h1>
        </div>
    );
}
 
export default About;