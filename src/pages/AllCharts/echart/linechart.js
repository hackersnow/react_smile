import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Line extends Component {
    getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: false,
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                zlevel: 0,
                x: 50,
                x2: 50,
                y: 30,
                y2: 30,
                borderWidth: 0,
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'rgba(0,0,0,0)',
            },
            xAxis: {
                type: 'category',
                data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Agu','Sep','Oct','Nov','Dec'],
                axisLine: {
                    lineStyle: {
                        color: "#74788d"
                    }
                }
            },
            yAxis: {
                type: 'value',
                data: ['0', '5', '7','1320 '],
                axisLine: {
                    lineStyle: {
                        color: "#74788d"
                    }
                }
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1200, 800 , 1420,1320,1320 ,378 ],
                type: 'line'
            }],
            color: ['#00AFF0'],
        };
    };
    render() {
        return (
            <React.Fragment>
                <ReactEcharts style={{ height: "450px" }} option={this.getOption()} />
            </React.Fragment>
        );
    }
}
export default Line;