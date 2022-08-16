import * as React from 'react';
import Stack from '@mui/material/Stack';
//<img src = "images/weather.png" width={20} height={15} alt = ""/>
export default function WeatherToday(){
    const today = [
        {'icon':'static/images/cloudy.png','temp':'20°','time':'Morning'},
        {'icon':'static/images/sunny.png','temp':'34°','time':'Afternoon'},
        {'icon':'static/images/partly-cloudy.png','temp':'28°','time':'Evening'},
        {'icon':'static/images/partly-cloudy.png','temp':'22°','time':'Night'}            
    ]
    const temperatureStyle = {
        fontFamily:'PoppinsRegular',
        fontSize:18
    }
    
    const tomorrorStyle = {
        backgroundColor:'#BED64C', 
        color:'#000000',
        width:300,
        height:235,
        marginTop:-55,
        borderRadius:18
    }
    return (
        <div style={{width:850,height:250}}>
            <div><span style={temperatureStyle}>How's the</span></div>
            <div><span style={temperatureStyle}>temperature today?</span></div>
        <Stack direction="row">          
            {today.map((item,index) => (
                
                <Stack style={{width:100,alignItems:'center',marginTop:30,marginRight:30,
                    paddingRight:20,borderRightStyle:'solid', borderRightColor:'#2C3E50',borderRightWidth:index === 3?0:1}}>

                    <div style={{width:30,height:30,backgroundColor:'transparent',borderRadius:'50%',border: '2px solid grey'}}>
                        <div style={{marginLeft:5,marginTop:-2}}><img src = {item['icon']} width={20} height={20} alt = ""/></div>
                    </div>

                    <div style={{marginTop:50}}>
                        <span style={{fontSize:16,fontFamliy:'PoppinsRegular',fontWeight:700}}>{item['temp']}</span>
                    </div>

                    <div>
                        <span style={{fontSize:16,fontFamliy:'PoppinsRegular',color:'#D3D3D3'}}>{item['time']}</span>
                    </div>
                </Stack>
            ))}
            
            <div style={tomorrorStyle}>
                
                <div style={{marginLeft:25,marginTop:10}}><span style={{fontFamily:'PoppinsExtraLight',fontSize:13,fontWeight:900}}>Tomorrow</span></div>
                <div style={{marginLeft:25}}><span style={{fontFamily:'PoppinsRegular',fontSize:20,fontWeight:600}}>Dhaka</span></div>
                <div style={{marginLeft:25,marginTop:50}}><span style={{fontFamily:'PoppinsRegular',fontSize:30,fontWeight:800}}>20°C</span></div>
                <div style={{marginLeft:25}}><span style={{fontFamily:'PoppinsRegular',fontSize:13,fontWeight:400}}>Rainy</span></div>
                <div style={{marginTop:-205,marginLeft:80}}><img src = "static/images/RainyDayUmbrella2.png" width={213} height={228} alt = ""/></div>
            </div>
        </Stack>
        
        </div>
    );

}
