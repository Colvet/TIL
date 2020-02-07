import React, {Component} from 'react';
import PhoneItem from './PhoneItem';

class PhoneList extends Component{
    
    render(){
        const { data, onRemove, onUpdate } = this.props;    // data, onRemove
        console.log(data);
        const list = data.map(value => 
            // (<div key={value.id}> {value.name} / {value.phone} </div>)
            (<
                PhoneItem 
                key={value.id} 
                info={value} 
                onRemove={onRemove}
                onUpdate={onUpdate} 
            />)
        );
        
        return(
            <div>
               
                {list}

            </div>
        );
    }
}

export default PhoneList;