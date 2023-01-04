import { Component, OnInit } from '@angular/core';
import { PageDataObject } from 'src/app/interfaces/pageDataInterface';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-d3-bar-graph',
  templateUrl: './d3-bar-graph.component.html',
  styleUrls: ['./d3-bar-graph.component.scss']
})
export class D3BarGraphComponent implements OnInit {
  markup: string = '';
  javascript: string = '';
  pageDataObject: PageDataObject = {
    title: 'D3 Bar Graph',
    publishedOn: 'Oct 1, 2022',
    updatedOn: 'Jan 5, 2023',
    repoTitle: 'angular-date-picker',
    repoLink:
      'https://github.com/eastcoastdeveloper/datepicker-angular-component',
    category: '',
    views: 28,
    forks: 0,
    threeColumnLayout: true,
    cornerStone: false
  };

  constructor(private _projectListService: ProjectListService) {}

  ngOnInit() {
    // Send Page Data to Service & Wrapper
    this._projectListService.changePageDataObject(this.pageDataObject);

    this.renderCode();
  }

  renderCode() {
    this.markup = `#graph-wrapper {
  min-height: 300px;
  max-width: 750px;
  margin: 0 auto;
}

text { font-size: 1.2em; }
line { display: none;    }

[text-anchor="end"] .domain    { d: path("M 0 0.5 H 0.5 V 250.5 H 0"); }
[text-anchor="middle"] .domain { d: path("M 0.5 6 V 0.5 H 531.5 V 0"); }
</style>

<div id="graph-wrapper">
    <svg></svg>
</div>`;

    this.javascript = `var parentDiv = document.getElementById('graph-wrapper'),
  svg = d3.select('svg'),
  svgWidth = parentDiv.offsetWidth,
  svgHeight = parentDiv.offsetHeight,
  margin = { top: 20, right: 30, bottom: 30, left: 60 },
  innerWidth = svgWidth - margin.left - margin.right,
  innerHeight = svgHeight - margin.top - margin.bottom,
  colors = ['#D65076', '#45B8AC', '#EFC050', '#5B5EA6', '#9B2335'],
  aspect = svgWidth / svgHeight;

function renderData(data) {
  var xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.amount)])
      .range([0, innerWidth]),
    yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.item))
      .range([0, innerHeight])
      .padding(0.04);

  var g = svg
    .append('g');

  var formattedVal = (number) => d3.format('.3s')(number).replace('G', 'B');

  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale).tickFormat(formattedVal);
  yAxis(g.append('g'));
  xAxis(g.append('g').attr('transform', 'translate(0, ' + innerHeight + ')'));

  g.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('transform', 'translate(4, 0)')
    .attr('y', (d) => yScale(d.item))
    .attr('fill', (d, i) => {
      return colors[i];
    })
    .attr('width', (d) => xScale(d.amount))
    .attr('height', yScale.bandwidth()); // computed width of a single bar
}

function resizeGraph() {
  var targetWidth = parentDiv.clientWidth;
  svg.attr('width', targetWidth);
  svg.attr('height', Math.round(targetWidth / aspect));
}

svg
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .attr('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight)
  .attr('perserveAspectRatio', 'xMinYMid')
  .call(resizeGraph);

d3.json('d3-bar-chart.json').then(function (chartData) {
  renderData(chartData);
});

window.addEventListener('resize', resizeGraph);`;
  }
}
