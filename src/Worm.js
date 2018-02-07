import React, {
    Component
} from 'react';
import {EventManager} from './EventManager'

export default class Worm extends Component {
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
        //     this.setState({
        //         data: Number(data.worm) == 0 ? "" : Number(data.worm),
        //     })
        // } else {
        //     let wormSurviving = Number(this.state.data) - 200*Number(data[key])
        //     this.setState({
        //         data: wormSurviving === 0 ? "" : wormSurviving,
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
            <table className="worm">
                <tbody>
                    <tr>
                        <td colSpan="2">Worm - {Math.random().toFixed(2)}</td>
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