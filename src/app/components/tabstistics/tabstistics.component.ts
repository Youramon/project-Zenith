import { Component } from '@angular/core';
import { calculateAllAverage, faction } from '../../meine-Dateien/db';
import { ChartConfiguration, Colors } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-tabstistics',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './tabstistics.component.html',
  styleUrl: './tabstistics.component.less'
})
export class TabstisticsComponent {
  public barChartLegend = true;
  public barChartPlugins = [];
  allAverage = calculateAllAverage();
  factions = faction;
  public barChartData: ChartConfiguration<'radar'>['data'] = {
    labels: Object.values(this.factions).slice(0,14),
    datasets: [
      { data: this.allAverage, label: 'Alle Tabs Factions',
        backgroundColor: 'rgba(78, 121, 203, 0.59)',
        borderJoinStyle: 'round',
        borderColor: 'rgba(209, 158, 43, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(31, 188, 81, 1)',
        pointBorderColor: 'rgba(77, 193, 136, 0.18)',
        pointHoverBackgroundColor: 'rgba(108, 243, 180, 0.81)',
        pointHoverBorderColor: 'rgba(177, 175, 59, 1)',
        pointRadius: 3,
       },
    ],
  };
  public barChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    plugins: {
      colors: {
        enabled: true
      }
    }
  };
}
