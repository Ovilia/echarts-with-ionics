import { Component } from '@angular/core';
import * as echarts from 'echarts';

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
    console.log(container.offsetWidth, container.offsetHeight);
  }

}
