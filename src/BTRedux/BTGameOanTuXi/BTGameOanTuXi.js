import React, { Component } from 'react'
import style from '../../assets/style/components/BTGameOanTuXi.module.css'
import Player from './Player'
import '../../assets/style/components/BTGameOanTuXi.css'
import ComputerPlayer from './ComputerPlayer'
import KetQuaGameOanTuXi from './KetQuaGameOanTuXi'


export default class BTGameOanTuXi extends Component {
    render() {
        return (
            <div className={`${style.bgGame}`}>
                <div className="row text-center">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaGameOanTuXi /> 
                    </div>
                    <div className="col-4">
                        <ComputerPlayer />
                    </div>
                </div>
            </div>
        )
    }
}

