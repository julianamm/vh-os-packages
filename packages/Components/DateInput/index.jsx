import React from 'react'

class VHDateInput extends React.Component {

    constructor(props) {
      super();
      this.handleChange = this.handleChange.bind(this);
       this.keyPressFunc = this.keyPressFunc.bind(this) 
      this.state = {
        value: ''
      }
  
    }
    keyPressFunc(e) {
     
      if(e.which === 8) {
        var val = this.state.value;
        console.log(val);
        if(val.length == 3 || val.length == 6) {
            val = val.slice(0, val.length-1);
            console.log(val)
            this.setState({value: val})
        }
      }
    }
  
    handleChange(e) {
      var val = e.target.value;
        console.log('called', val)
        if (val.length === 2) {
  
          val += '/';
  
        } else if (val.length === 5) {
  
          val += '/';
  
        }
  
        this.setState({
          value: val
        });
  
      
      
    }
  
  
    render() {
  
      const {value} = this.state;
      const placeholder = 'DAY / MONTH / YEAR';
  
      return ( <input type = "text" value={value} placeholder={placeholder}
        onChange = {this.handleChange} onKeyDown={this.keyPressFunc}/>
      );
  
    }
  
  }


  export default VHDateInput;