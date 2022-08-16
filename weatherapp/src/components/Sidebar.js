import { Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import SunsetDoughnut from "./SunsetDoughnut";

export default function Sidebar(){
//#1C2023 #0E1426
    const sidebarSytle={
        width:500,
        height:'100%',
        position:'absolute',
        backgroundColor:'#0E1426',
        right:0
    }

    return (
        <div style={sidebarSytle}>
            <Stack direction="row">
                <Stack>
                    <div style={{marginTop:30,marginLeft:40}}><span style={{fontFamily:'PoppinsRegular',fontSize:20}}>Sun</span></div>
                    <div style={{marginLeft:40}}><span style={{fontFamily:'PoppinsExtraLight',fontSize:15}}>Dhaka, Bangladesh</span></div>
                </Stack>
                <div style={{marginTop:35,marginLeft:185}}><span style={{fontSize:45,color:'#F5812F'}}>11°C</span></div>
            </Stack>
            <Divider sx={{ bgcolor: "#2b427c" , width:420,marginTop:3, marginLeft:5}} />

            <SunsetDoughnut Style = {{position:'absolute',marginLeft:110,marginTop:-50,width:250}}/>
        {/*******************************UVI************************************/}
        <div style={{height:75,width:280,backgroundColor:'#FFFFFF',borderRadius: 20,paddingTop:15,marginTop:225,marginLeft:100}}>
            <Stack flexDirection="row" style={{alignItems:'center',marginLeft:30}}>
                <div style={{marginLeft:5,marginTop:6,marginRight:2}}><img src="static/images/sunny.png" width={35} height={35} alt=""/></div>
                <div style={{marginLeft:10}}>              
                    <Stack direction="row" spacing={2} style={{alignItems:'center',alignContent:'center'}}>
                        <span style={{fontFamliy:'PoppinsRegular',fontSize:22,fontWeight:600,color:'#000000'}}>20 UVI</span>
                        <div style={{backgroundColor:'#BED64C',width:68,height:22,borderRadius:15,marginTop:2,justifyContent:'center'}}>
                            <span style={{fontWeight:500,fontSize:11,color:'#000000',position:'absolute',marginTop:3,marginLeft:10}}>Moderate</span>
                        </div>
                    </Stack>
                    <div style={{marginTop:-7}}>
                        <span style={{fontFamliy:'PoppinsRegular',fontSize:11,fontWeight:600,color:'#000000'}}>Moderate risk of UV rays</span>
                    </div> 
                </div>
            </Stack>
        </div>

        {/*******************************Weather Prediciton************************************/}
        <div style={{marginTop:18,marginLeft:100}}>
            <span style={{fontFamliy:'PoppinsExtraLight',fontSize:22,fontWeight:400}}>Weather Prediciton</span>
        </div>

        <div style={{height:75,width:280,backgroundColor:'#333789',borderRadius: 20,marginLeft:100,marginTop:20}}>
            <Stack direction="row" style={{alignItems:'center',justifyContent:'space-between'}}> 
                <div style={{marginLeft:20}}><img src="static/images/Cloudy2.png" width={36} height={30} alt=""/></div>
                <div style={{marginTop:-15,textAlign:"center"}}>
                    <div><span style={{fontFamliy:'PoppinsExtraLight',fontSize:14,fontWeight:400}}>August 9</span></div>
                    <div style={{marginTop:-6}}><span style={{fontFamliy:'PoppinsExtraLight',fontSize:16,fontWeight:700}}>Cloudy</span></div>
                </div>
                <div style={{height:75,width:90,backgroundColor:'#6F68AF',borderRadius: 20,textAlign:'center'}}>
                    <div style={{marginTop:15}}><span style={{fontFamliy:'PoppinsExtraLight',fontSize:18,fontWeight:400}}>25/31°C</span></div>
                </div>
            </Stack>
        </div>

        <div style={{height:75,width:280,backgroundColor:'#333789',borderRadius: 20,marginLeft:100,marginTop:18}}>
            <Stack direction="row" style={{alignItems:'center',justifyContent:'space-between'}}> 
                <div style={{marginLeft:20}}><img src="static/images/sunny.png" width={35} height={35} alt=""/></div>
                <div style={{marginTop:-15,textAlign:"center"}}>
                    <div><span style={{fontFamliy:'PoppinsExtraLight',fontSize:14,fontWeight:400}}>August 10</span></div>
                    <div style={{marginTop:-6}}><span style={{fontFamliy:'PoppinsExtraLight',fontSize:16,fontWeight:700}}>Sunny</span></div>
                </div>
                <div style={{height:75,width:90,backgroundColor:'#6F68AF',borderRadius: 20,textAlign:'center'}}>
                    <div style={{marginTop:15}}><span style={{fontFamliy:'PoppinsExtraLight',fontSize:18,fontWeight:400}}>25/31°C</span></div>
                </div>
            </Stack>
        </div>
         
         {/*****************************Next five days*************************/}
          <div style={{width:110,height:50,backgroundColor:'#BED64C',borderRadius:16,textAlign:"center",
                       position:"absolute",right:20,bottom:10,boxShadow:'#d4e6797d 4px 3px 5px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px'}}>
           <div style={{marginTop:2}}><span style={{fontSize:13,color:'#000000',fontWeight:500}}>Next 5 days</span></div> 
          </div>  

        </div>
    );


}