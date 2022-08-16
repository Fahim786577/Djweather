import * as React from 'react';
import HomeMaxOutlinedIcon from '@mui/icons-material/HomeMaxOutlined';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { blueGrey } from '@mui/material/colors';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Menu() {

    const menustyle = {
        backgroundColor:'#F5812F',width:40,height:40,
        borderRadius:'30%',
        marginLeft:28,
        marginTop:20,
        marginBottom:70,
        alignContent:'center',
        justifyContent:'center',
        
    };
  return (
      
      <MenuList style={{marginTop:50}}>
            <MenuItem style={menustyle}>
                <HomeMaxOutlinedIcon sx={{ color: blueGrey[100],fontSize: 20 }}/>
            </MenuItem>
            
        
        <MenuItem style={menustyle}>
                <FmdGoodOutlinedIcon sx={{ color: blueGrey[100],fontSize:20 }}/>
        </MenuItem>

        <MenuItem style={menustyle}>            
            <SettingsOutlinedIcon sx={{ color: blueGrey[100],fontSize:20 }}/>
        </MenuItem>
        
      </MenuList>
  );
}
