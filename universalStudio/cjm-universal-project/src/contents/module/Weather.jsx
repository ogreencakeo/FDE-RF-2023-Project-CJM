import { Component } from "react";
import axios from 'axios';
import '../../css/weather.css';

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {temp : '', desc : '', icon : '', loading : true, city : ''};
    }

    componentDidMount(){
        const cityName = 'Tokyo';
        const apiKey = 'ba08801b982da401f3647f4759a9effa';
        // 날씨 정보 조회  url
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    
        axios
            .get(url)
            .then((res) => {
                console.log('res :', res);
                const wdata = res.data;
                this.setState({
                    temp : wdata.main.temp,
                    desc : wdata.weather[0].description,
                    icon : wdata.weather[0].icon,
                    loading : false,
                    city : cityName,
                });  
            })
            .catch((err) => console.log(err));

    }

    render(){

        const isrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        if(this.state.loading){
            return<h4>로딩중...</h4>
        }else{
            let ctemp = (parseInt(this.state.temp) - 273.15).toFixed(1);
            return(
                <div className="weather-bx">
                    <h4>현재 날씨</h4>
                    <h5>{this.state.city}</h5>
                    <img src={isrc} alt="날씨 아이콘" />
                    <p>{ctemp} ℃</p>
                    <p>{this.state.desc}</p>
                </div>
            )
        }
    }
}

export default Weather;