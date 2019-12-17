import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App
    extends Component {
    state = {
        answer: 42
    };

    asyncFunc = () => Promise.resolve(37);

    async componentDidMount(){
        this.setState({
            answer: await this.asyncFunc()
        });
    }

    render() {
        return (
            <div>
                <h2>Hello React -- {this.state.answer}</h2>
            </div>
        );
    }
}

export default App
    ;

ReactDom.render(<App />, document.getElementById('root'));