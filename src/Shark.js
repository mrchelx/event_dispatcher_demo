import React, {
    Component
} from 'react';
import {EventManager} from './EventManager'

export default class Shark extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ""
        }
    }

    join = () => {
        EventManager.addEventListener("update", (data) => this.updateSurvival(data))
    }

    updateSurvival = (data) => {
        this.setState(data)
        // let key = Object.keys(data)[0]
        // if(key === "worm") {
        //     let worm = Number(data.worm)
        //     let surviving = worm/(2 * 200)
        //     this.setState({
        //         worm: Number(data.worm),
        //         data: surviving == 0 ? "" : surviving
        //     })
        // }

        // if(key === "shark") {
        //     this.setState({
        //         data: Number(data[key]) == 0 ? "" : Number(data[key])
        //     })
        // }
    }

    onChange = (e) => {
        this.setState({
            data: e.target.value
        })

        EventManager.dispatch("update", {
            data: e.target.value
        })
    }

    componentDidMount() {
        this.join()
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">Shark - {Math.random().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><input
                                type="number"
                                placeholder="Surviving" 
                                onChange={this.onChange} 
                                value={this.state.data} /></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}