import React, {Component, Fragment} from 'react';

class MyIntro extends Component{
    render() {
        const css = {
            color: 'red',
            background: 'black',
            padding: '20px',
            fontSize: '25px'
          };
        return(
            <div style={css}>
                안녕하세요, 제이름은 <b>
                    {this.props.person.name}
                </b>입니다.

                이메일: {this.props.person.email} <b/>
                핸드폰: {this.props.person.phone} <b/>
                thi
            </div>
        )
    }
}

export default MyIntro;