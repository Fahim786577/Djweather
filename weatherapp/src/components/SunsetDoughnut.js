import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], rgba(14, 20, 38, 1)
//'rgba(54, 162, 235, 0.2)'
const SunsetDoughnut = (props) => {
    var value = 0.4
    var data = {
        datasets: [
            {
              data: [value, value-1],
              backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(14, 20, 38, 1)',
                
              ],
              borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(14, 20, 38, 1)',
                
              ],
              borderWidth: 1,
              cutout:'92%',
              borderRadius: '10 0 0 20',
              offset:10
              
            },
          ],
    }//data
    //console.log(data.datasets[0].borderColor[0]);
    
    var options = {
        plugins:{
            legend:{display:false},
        },
        circumference:180,
        rotation:270,
        cutout:'90%'
    }//options

    
    const baseStyle = {
        height:200,
    }

    return (
        <div style={{...baseStyle,...props.Style}}>
            <Doughnut data = {data} options = {options}/>
        </div>
    );
}

export default SunsetDoughnut;