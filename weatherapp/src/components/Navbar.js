//import { FiAirplay } from "react-icons/fi";
//<FiAirplay size={50}/>

import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';

const profileavatarStyle = {
    marginLeft:120,
    alignItems:'center',
    marginTop:30,
    
};
export default function Navbar(){
    return (
        <nav>
            <Stack direction="row" spacing={3} style={profileavatarStyle}>
                <Avatar alt="ProfilePic" src="static/images/profile.png"  sx={{ width: 50, height: 50 }} style={{marginTop:5}}/>
                <div>
                    <div><span style={{fontFamliy:'PoppinsExtraLight',fontWeight:200}}>Hello,</span></div>
                    <div><span style={{fontFamily:'PoppinsRegular'}}>Jack Grealish</span></div>
                </div>
                
            </Stack>
        </nav>
    );
}