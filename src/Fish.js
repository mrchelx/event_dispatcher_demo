import React, { Component } from 'react';
import Shark from './Shark'
import Whale from './Whale'
import {EventManager} from './EventManager'

export default class Fish extends Component
{
    state = {
        surviving: "",
        shark: "",
        whale: ""
    }

    join = () => {
        EventManager.addEventListener("update", (data) => this.updateSurvival(data))
    }

    updateSurvival = (data) => {
        let key = Object.keys(data)[0]
        if(key === "worm") return

        this.setState(data)
    }

    onChange = (e) => {
        this.setState({
            data: e.target.value
        })
    }

    componentDidMount() {
        // this.shark.join()
        // this.whale.join()
        // this.join()
    }

    render () {
        return (
            <table border={1} className={"Children-"+this.props.index}>
                <tbody>
                    <tr>
                        <td colSpan="2">Fish - <b>{Math.random().toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td>Fish surviving</td>
                        <td>
                            <input
                                type="number"
                                placeholder="Surviving" 
                                onChange={this.onChange} 
                                value={this.state.data} /></td>
                        
                    </tr>
                    <tr>
                        <td><Shark ref={elem => this.shark = elem}/></td>
                        <td><Whale ref={elem => this.whale = elem}/></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}