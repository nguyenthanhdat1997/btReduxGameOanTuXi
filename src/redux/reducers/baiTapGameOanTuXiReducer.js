

const stateDefault = {
    ketQua: 'I iron man, i love you 3000',
    soLanThang: 0,
    soLanChoi: 0,
    mangHinhAnh: [
        {ma:'keo',hinhAnh: './img/imgGameOanTuXi/keo.png',kq:false},
        {ma:'bua',hinhAnh: './img/imgGameOanTuXi/bua.png',kq:true},
        {ma:'bao',hinhAnh: './img/imgGameOanTuXi/bao.png',kq:false},
    ],
    computer: {ma:'keo',hinhAnh: './img/imgGameOanTuXi/keo.png'}
}

export const baiTapGameOanTuXiReducer = (state = stateDefault,action)=>{
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO':{
            //
            
            let mangHinhAnhUpDate = [...state.mangHinhAnh];
            mangHinhAnhUpDate = mangHinhAnhUpDate.map((item,index)=>{
                if(item.ma===action.kqCuoc){
                    return{...item,kq:true}
                }
                return{...item,kq:false}
            })
            state.mangHinhAnh = mangHinhAnhUpDate;
            return{...state}
        }
        case 'RAN_DOM':{
            //Tạo số ngẫu nhiên từ 0 -> 2
            let soNN = Math.floor(Math.random() * 3);
            //gán vị trí state mangHinhAnh vị trí của soNN
            let quanCuocNN = state.mangHinhAnh[soNN];
            //setState lại
            state.computer = quanCuocNN;
            return{...state}
        }
        case 'END_GAME':{
            
            state.soLanChoi += 1;

            let player = state.mangHinhAnh.find((item)=>item.kq === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'hòa rồi!!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'thua SML :('
                    }else{
                        state.soLanThang += 1;
                        state.ketQua = 'I iron man, i love you 3000'
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.soLanThang += 1;
                        state.ketQua = 'I iron man, i love you 3000'
                    }else if(computer.ma === 'bao'){
                        state.ketQua = 'thua SML :('
                    }else{
                        state.ketQua = 'hòa rồi!!!';
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'bao'){
                        state.ketQua = 'hòa rồi!!!';
                    }else if(computer.ma === 'keo'){
                        state.ketQua = 'thua SML :('
                    }else{
                        state.soLanThang += 1;
                        state.ketQua = 'I iron man, i love you 3000'
                    }
                    break;
                default:
                    state.soLanThang += 1;
                    break;
            }
            
            return {...state}
        }
        default:
            return {...state};
    }
}