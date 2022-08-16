import * as React from 'react';
import Stack from '@mui/material/Stack';
//import { Avatar } from '@mui/material';
export default function WeatherCard(){
    const cardStyle={
        height:320,
        width:400,
        backgroundImage: `url("static/images/afternoon.jpg")` ,
        position:'absolute',
        marginLeft:120,
        borderRadius:'5%'
    };
    return(
        <div style={cardStyle}>
          
          {/******************** Heading ***************/}
          <Stack direction="row" style={{alignItems:'center',margin:10,marginLeft:30}}>
                <div style={{width:30,height:30,backgroundColor:'white',borderRadius:'50%'}}>
                    <div style={{marginLeft:5,marginTop:-2}}><img src = "static/images/weather.png" width={20} height={15} alt = ""/></div>
                </div>   
                <div style={{marginLeft:15}}>  
                    <div><span style={{fontFamliy:'PoppinsRegular',fontSize:18,color:'#000000',fontWeight:600}}>Weather</span></div>
                    <div style={{marginTop:-10}}>
                        <span style={{fontFamily:'PoppinsExtraLight' ,fontWeight:900,fontSize:12,color:'#000000'}}>What's the weather</span>
                    </div>
                </div>  
          </Stack>

          {/********************Temparatures ***************/}  
          <div style={{marginLeft:30,marginTop:25}}>  
                <Stack direction="row" spacing={2} style={{alignItems:'center',alignContent:'center'}}>
                    <span style={{fontFamliy:'PoppinsRegular',fontSize:38,fontWeight:400,color:'#000000'}}>22°C</span>
                    <div style={{backgroundColor:'#ffffff',width:35,height:22,borderRadius:'15%',marginTop:2}}>
                        <span style={{fontWeight:500,fontSize:13,color:'#000000',position:'absolute',marginTop:2,marginLeft:5}}>11°C</span>
                    </div>
                </Stack>  
                <div><span style={{fontFamily:'PoppinsRegular' ,fontWeight:200,fontSize:13,color:'#000000'}}>Partly Cloudy</span></div>
          </div>

         {/********************Pressure,Visibility,Humidity ***************/}   
         <Stack direction="row">

            {/********************Pressure ***************/}
            <div style={{height:62,width:85,backgroundColor:'#1C2023',marginLeft:28,borderRadius:'20%',padding:10,marginTop:40}}>
                    <div style={{marginTop:-5,marginLeft:2}}>
                        <div style={{marginLeft:15}}><span style={{fontFamily:'PoppinsExtraLight',fontSize:13}}>Pressure</span></div>
                        <div style={{marginLeft:8}}><span style={{fontSize:22}}>800mb</span></div>
                    </div>
            </div>

            {/******************** Visibility ***************/}
            <div style={{height:62,width:85,backgroundColor:'#BED64C',marginLeft:15,borderRadius:'20%',padding:10,marginTop:40}}>
                    <div style={{marginTop:-5,marginLeft:2}}>
                        <div style={{marginLeft:15}}><span style={{fontFamily:'PoppinsExtraLight',fontSize:13,color:'#000000'}}>Visibility</span></div>
                        <div style={{marginLeft:8}}><span style={{fontSize:22,color:'#000000'}}>4.3 km</span></div>
                    </div>
            </div>

            {/******************** Humidity ***************/}
            <div style={{height:62,width:85,backgroundColor:'#EDF0F0',marginLeft:15,borderRadius:'20%',padding:10,marginTop:40}}>
                    <div style={{marginTop:-5,marginLeft:2}}>
                        <div style={{marginLeft:15}}><span style={{fontFamily:'PoppinsExtraLight',fontSize:13,color:'#000000'}}>Humidity</span></div>
                        <div style={{marginLeft:20}}><span style={{fontSize:22,color:'#000000'}}>87%</span></div>
                    </div>
            </div>
          </Stack>
        </div>
    );
}
