import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Semicircle = (props)=>{
    const data1 = {
        labels: ["Red", "Orange", "Green"],
        datasets: [
            {
                label: '# of Votes',
                data: [33, 33, 33],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.2)',
                    'rgba(255, 164, 46, 0.2)',
                    'rgba(46, 204, 113, 0.2)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(255, 164, 46, 1)',
                    'rgba(46, 204, 113, 1)'
                ],
              borderWidth: 1,
              cutout:'92%',
              borderRadius:20
              
            },
          ],
    }//data1
    const data2 = {
        labels: ["", "Purple", ""],
        datasets: [
            {
                data: [88.5, 1,10.5],
                    backgroundColor: [
                        "rgba(0,0,0,0)",
                        "rgba(255,255,255,1)",
                        "rgba(0,0,0,0)",
                    ],
                     borderColor: [
                        'rgba(0, 0, 0 ,0)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(0, 0, 0 ,0)'
                ],
              borderWidth: 3,
              
            },
          ],
    }//data2

    const options = {
        plugins:{
            legend:{display:false},
            tooltip: {enabled: false},
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
            <Doughnut data = {data1} options = {options}/>
            <div><Doughnut data = {data2} options = {options}/></div>
        </div>
    );
}

export default Semicircle;