import React, {Component} from "react";

class Calculator extends Component {
    state = {
        nums: [],
        op: [],
        text : '',
        res : ''
    }

    input = (event) => {
        event.preventDefault();
        if (this.state.res !== ''){
            this.setState({res : ''})
        }
        let value = event.target.value;
        let text = this.state.text
        if (value === "." && !text.includes('.')) {
            let newText = text.concat(value)
            this.setState(
                {
                    text: newText
                }
            )
            return
        } else if  (value === "." && text.includes('.')) {
            return
        }
        let newText = text.concat(value)
        this.setState(
            {
                text: newText
            }
        )
    };
     selectOp =  (event)=>{
        event.preventDefault()
        let operation = event.target.value
         let numz = this.state.nums
         let ops = this.state.op
         if (this.state.res !== '') {
          numz.push(this.state.res);
        } else if (this.state.text !== '') {
          numz.push(this.state.text);
        } else if (this.state.res === '' && this.state.res === '') {
          numz.push('0');
        }
         ops.push(operation)
          this.setState({
              nums : numz,
              op : ops,
              text : ''
         })

        }

     result = (event) => {
        event.preventDefault()
         let biggerRes = ''
         let tekst = this.state.text
         let numz = this.state.nums
         let ops = this.state.op
         numz.map( (num, key)=>{
            biggerRes = biggerRes.concat(num)
            biggerRes = biggerRes.concat(ops[key])
         })
         biggerRes = biggerRes.concat(tekst)
         this.setState(
             {
                 text:'' ,
                 res : biggerRes + ' = ' + eval(biggerRes),
                 nums : [],
                 op : [],
             }
         )
    }
    eraseAll = () =>{
        this.setState({
            nums : [],
            op : [],
            text : '',
            res : ''
        })
    }
render() {


    return (
        <div style={{alignItems: 'center', justifyContent:'center'}}>
            <h1>Adding Two Numbers</h1>
            <h2 style={{color : '#690000', fontSize : '100px'}}>{this.state.res}</h2>
            <div className="number-inputs">
                <input type="text" value={this.state.text} disabled />
                <button
                onPress={(event) => {
                let newText = this.state.text.substring(
                  0,
                  this.state.text.length - 1,
                );
                this.setState({
                  text: newText,
                });
              }}>
                    &larr;
                </button>
            </div>
            <div style={buttonHolder}>
                <div>
                <button onClick={this.input} value={"1"}>
                    1
                </button>
                <button onClick={this.input} value={"2"}>
                    2
                </button>
                <button onClick={this.input} value={"3"}>
                    3
                </button>
                <button onClick= {this.selectOp} value = {'+'}> + </button>
                </div ><div>
                <button onClick={this.input} value={"4"}>
                    4
                </button>
                <button onClick={this.input} value={"5"}>
                    5
                </button>
                <button onClick={this.input} value={"6"}>
                    6
                </button>
                <button onClick= {this.selectOp} value = {'-'}> - </button>
                </div><div>
                <button onClick={this.input} value={"7"}>
                    7
                </button>
                <button onClick={this.input} value={"8"}>
                    8
                </button>
                <button onClick={this.input} value={"9"}>
                    9
                </button>
                <button onClick= {this.selectOp} value = {'*'}> x </button>
                </div ><div>
                <button onClick= {this.eraseAll}>
                    C
                </button>
                <button onClick={this.input} value={"0"}>
                    0
                </button>
                <button onClick={this.input} value={"."}>
                    .
                </button>
                <button onClick= {this.selectOp} value = {'/'}> / </button>
                </div >
                <button onClick= {this.result}>=</button>
            </div>
            </div>
    )
}}

const buttonHolder ={
    width: '50%',
    margin: '0px 25%'
}

export default Calculator;
