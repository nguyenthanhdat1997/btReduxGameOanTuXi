import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQuaGameOanTuXi extends Component {
    render() {
        return (
            <div>
                <p className="display-4 text-warning mt-3">
                    {this.props.ketQua}
                </p>
                <p className="display-4 text-success my-3">
                    Số lần thắng: <span className="text-warning">{this.props.soLanThang}</span>
                </p>
                <p className="display-4 text-success">
                    Số lần chơi: <span className="text-warning">{this.props.soLanChoi}</span>
                </p>
                <button className="p-3 bg-success text-white" onClick={()=>{
                    this.props.playGame()
                }}>Play game</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ketQua: state.baiTapGameOanTuXiReducer.ketQua,
        soLanThang: state.baiTapGameOanTuXiReducer.soLanThang,
        soLanChoi: state.baiTapGameOanTuXiReducer.soLanChoi
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        playGame: () =>{
            let count = 0;
            //Khai báo hàm lặp đi lặp lại
            let randomComputer = setInterval(()=>{
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if(count>10){
                    clearInterval(randomComputer);
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            },100)
            
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(KetQuaGameOanTuXi)