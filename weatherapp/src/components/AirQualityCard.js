import * as React from 'react';
import Stack from '@mui/material/Stack';
//import { Avatar } from '@mui/material';
//import ProgressBar from './ProgressBar';
import LinearProgress from '@mui/material/LinearProgress';
//marginTop:150
//marginLeft:120
export default function AirQualityCard(){
    
    const cardStyle={
        height:320,
        width:400,
        backgroundImage: `url("static/images/clearsky.jpg")` ,
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
                    <div><span style={{fontFamliy:'PoppinsRegular',fontSize:18,color:'#000000',fontWeight:600}}>Air Quality</span></div>
                    <div style={{marginTop:-10}}>
                        <span style={{fontFamily:'PoppinsExtraLight' ,fontWeight:900,fontSize:12,color:'#000000'}}>Main pollution:PM 2.5</span>
                    </div>
                </div>  
          </Stack>

          {/********************Temparatures ***************/}  
          <div style={{marginLeft:30,marginTop:25}}>  
                <Stack direction="row" spacing={2} style={{alignItems:'center',alignContent:'center'}}>
                    <span style={{fontFamliy:'PoppinsRegular',fontSize:38,fontWeight:400,color:'#000000'}}>390</span>
                    <div style={{backgroundColor:'#BED64C',width:35,height:22,borderRadius:'15%',marginTop:2}}>
                        <span style={{fontWeight:500,fontSize:13,color:'#000000',position:'absolute',marginTop:2,marginLeft:5}}>AQI</span>
                    </div>
                </Stack>  
                <div><span style={{fontFamily:'PoppinsRegular' ,fontWeight:200,fontSize:13,color:'#000000'}}>West Wind</span></div>
          </div> 
         
            {/********************Pressure ***************/}
            <div style={{height:62,width:320,backgroundColor:'#EDF0F0',marginLeft:28,borderRadius: 15 ,padding:10,marginTop:40}}>
                <Stack direction="row">
                    <div style={{marginLeft:15}}><span style={{fontFamily:'PoppinsRegular',fontSize:13,color:'#000000'}}>Good</span></div>
                    <div style={{marginLeft:70}}><span style={{fontFamily:'PoppinsRegular',fontSize:13,color:'#000000'}}>Standard</span></div>
                    <div style={{marginLeft:58}}><span style={{fontFamily:'PoppinsRegular',fontSize:13,color:'#000000'}}>Hazardous</span></div>        
                </Stack>    
                <LinearProgress variant="determinate" value={50} style={{marginTop:15}}/>
            </div>
            
        </div>
    );
}
