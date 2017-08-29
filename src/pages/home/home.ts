import { Component } from '@angular/core';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor() {
  }

  ionViewDidEnter() {
    const ec = echarts as any;
    const container = document.getElementById('chart');

    const chart = ec.init(container);
    chart.setOption({
      series: {
        type: 'liquidFill',
        data: [0.9, 0.8, 0.7, 0.6],
        shape: 'path://M44.0498683,5.89408409 L212.282845,0.93561312 L244.368485,20.1737584 L262.944699,44.8894853 L262.944699,319.848339 L245.204926,367.994852 L215.732184,387.281137 L50.0915004,387.281137 L19.2033554,369.03589 L0.308211131,343.556258 L0.308211131,63.9816087 L11.1097347,27.5994297 L44.0498683,5.89408409 Z',
        outline: {
          show: false
        },
        radius: 193.175,
        label: {
          normal: {
            show: false,
            formatter: ''
          }
        }
      }
    });

    let water = 0.9;
    let handler = setInterval(() => {
      if (water > 0.3) {
        water -= 0.1;
      }
      else {
        if (handler) {
          clearInterval(handler);
          handler = null;
        }
      }

      chart.setOption({
        series: {
          data: [water, water - 0.1, water - 0.2, water - 0.3]
        }
      });
    }, 2000);
  }

}
