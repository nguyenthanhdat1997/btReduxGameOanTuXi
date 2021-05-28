import React, { Component } from 'react'
import {connect} from 'react-redux'

class ComputerPlayer extends Component {
    render() {
        let keyFrame = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
          }`
        return (
            
            <div className="text-center playerGame">
                <style>
                    {keyFrame}
                </style>
                <div className="theThink" style={{position:'relative'}}>
                <img style={{width:50, height:50, transform:'rotate(180deg)',position:'absolute',animation: `randomItem${Date.now()} 0.5s`}} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>


                <img style={{ width: 150, height: 150 }} src="./img/imgGameOanTuXi/playerComputer.png" alt="./img/imgGameOanTuXi/playerComputer.png" />

                
            </div>

        )
    }
}

const mapStateToProps = state =>{
    return{
        computer: state.baiTapGameOanTuXiReducer.computer,
    }
}

export default connect(mapStateToProps)(ComputerPlayer)