import React from 'react';
import MyIntro from './test';

const MyIntro2 = function ({person}) {
    const css = {
        color: 'red',
        background: 'black',
        padding: '20px',
        fontSize: '25px'
      };
    return(
        
        
        <div style={css}>

            안녕하세요, 제이름은 <b>
            {person.name},
            {person.email},
            {person.phone} </b> 입니다.
        </div>
    )
  }
export default MyIntro2;

