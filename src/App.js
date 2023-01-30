import './App.css';
import {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            isCounting: false
        }
    }



     componentDidMount() {
        console.log('componentDidMount')
        const userCount = localStorage.getItem("timer")
        if (userCount) {
            this.setState({count: +userCount})
        }
     }

      componentDidUpdate() {
        console.log('componentDidUpdate')
        localStorage.setItem("timer", this.state.count)
     }


     handleStart = () => {
        this.setState({isCounting: true})

        this.countId = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    handleStop = () => {
        this.setState({isCounting: false})
         clearInterval(this.countId)
    }

    handleReset = () => {
        this.setState({isCounting:false, count: 0})
        clearInterval(this.countId)
    }

    render() {
        return (
            <div className="App">
              <h1>React Timer</h1>
              <p>{this.state.count}</p>
              {!this.state.isCounting ? (
                <button className="succes" onClick={this.handleStart}>
                    Start
                </button>
              ) : (
                <button className="denger" onClick={this.handleStop}>
                    Stop
                </button>
              )}
              <button className="reset" onClick={this.handleReset}>
                    Reset
                </button>
            </div>
    );
    }
}

export default App;
