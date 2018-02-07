import React, {
    Component
} from 'react';
import './App.css';
import Fish from './Fish'
import {EventManager} from './EventManager';
import Worm from './Worm';

class App extends Component {
    state = {
        value: ""
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    componentDidMount() {
        // this.worm.join()
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">Animal - <b>{Math.random().toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input onChange={this.onChange} /></td>
                    </tr>
                    <tr>
                        <td>
                            <Fish value={this.state.value} index={1} />
                        </td>
                        <td colSpan="2">
                            <Worm ref={elem => this.worm = elem} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default App;