import React, {Component} from 'react';

class PhoneItem extends Component{
    state = {
        editable : false,
        name: this.props.info.name,
        phone: this.props.info.phone
    };

    handleUpdate = () => {
        const {editable} = this.state;
        this.setState({
            editable : !editable,
        })
    };

    handleRemove = () => {
        const {info, onRemove } = this.props;
        onRemove(info.id);
    };

    handleChange = (e) => {
        console.log("handleChange: " +e.target);
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    };

    componentDidUpdate(preProps, preState){
        const {info, onUpdate} = this.props;
        // console.log(info.name + "/" + info.phone);
        // console.log(preState.editable + "/" + this.state.editable);

        if(!preState.editable && this.state.editable){
            this.setState({
                name : info.name,
                phone: info.phone
            });
        }

        if(preState.editable && !this.state.editable){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    };
    
    render(){
        const css = {
            border:'1px solid black',
            padding : '9px',
            margin : '5px'
        };

        const { editable } = this.state;
        const { name, phone, id} = this.props.info;
        const { onRemove } = this.props.onRemove;
        const { onUpdate } = this.props.onUpdate;

        if (editable){
            return(
                <div style={css}>
                    <div>
                        <input name="name" value={this.state.name}
                        placeholder="이름을 입력하시오"
                        onChange={this.handleChange}></input>
                    </div>
                        <input name="phone" value={this.state.phone}
                        placeholder="전화번호를 입력하시오"
                        onChange={this.handleChange}></input>
                        <button onClick={this.handleUpdate}>적용</button>
                        <button onClick={this.handleRemove}>삭제</button>

                </div>
            );
        }else{
            return(
                <div style={css}>
                    <div name="name"><b>{name}</b></div>
                    <div name="phone">{phone}</div>
                    <button onClick={this.handleUpdate}>수정</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }
    };
}

export default PhoneItem;