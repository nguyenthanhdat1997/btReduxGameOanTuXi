import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{ width: 50, height: 50 }} src={this.props.mangHinhAnh.find(item=>item.kq === true).hinhAnh} alt={this.props.mangHinhAnh.find(item=>item.kq === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>


                <img style={{ width: 150, height: 150 }} src="./img/imgGameOanTuXi/player.png" alt="./img/imgGameOanTuXi/player.png" />

                <div className="row">
                    {this.props.mangHinhAnh.map((item, index) => {
                        return <div className="col-4">
                            <button onClick={()=>{
                                this.props.datCuoc(item.ma)
                            }} className="btnItem">
                                <img style={{ width: 35, height: 35 }} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}
                </div>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        mangHinhAnh: state.baiTapGameOanTuXiReducer.mangHinhAnh
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        datCuoc : (kqCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                kqCuoc  
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)