const fullDashboard = require('../panels/KubernetFullDash.json');

const urlStore = {};

const grafanaController = {
  getPanels: (req, res, next) => {
    fetch('http://localhost:3000/api/dashboards/db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dashboard: {
          id: null,
          uid: null,
          title: `KubernetSuperSpecialDashboard`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: [
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 8,
                x: 0,
                y: 0,
              },
              id: 156,
              options: {
                colorMode: 'background_solid',
                graphMode: 'none',
                justifyMode: 'center',
                orientation: 'auto',
                reduceOptions: {
                  calcs: ['lastNotNull'],
                  fields: '',
                  values: false,
                },
                textMode: 'value',
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: 'cluster:node_cpu:ratio_rate5m',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster CPU Utilisation',
              transparent: true,
              type: 'stat',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 8,
                x: 8,
                y: 0,
              },
              id: 159,
              options: {
                colorMode: 'background_solid',
                graphMode: 'none',
                justifyMode: 'center',
                orientation: 'auto',
                reduceOptions: {
                  calcs: ['lastNotNull'],
                  fields: '',
                  values: false,
                },
                textMode: 'value',
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: 'sum(namespace_cpu:kube_pod_container_resource_requests:sum{cluster=""}) / sum(kube_node_status_allocatable{job="kube-state-metrics",resource="cpu",cluster=""})',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster CPU Requests Commitment',
              transparent: true,
              type: 'stat',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 8,
                x: 16,
                y: 0,
              },
              id: 161,
              options: {
                colorMode: 'background_solid',
                graphMode: 'none',
                justifyMode: 'center',
                orientation: 'auto',
                reduceOptions: {
                  calcs: ['lastNotNull'],
                  fields: '',
                  values: false,
                },
                textMode: 'value',
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: 'sum(namespace_cpu:kube_pod_container_resource_limits:sum{cluster=""}) / sum(kube_node_status_allocatable{job="kube-state-metrics",resource="cpu",cluster=""})',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster CPU Limits Commitment',
              transparent: true,
              type: 'stat',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                    seriesBy: 'last',
                  },
                  custom: {
                    axisCenteredZero: false,
                    axisColorMode: 'text',
                    axisLabel: '',
                    axisPlacement: 'auto',
                    barAlignment: 0,
                    drawStyle: 'line',
                    fillOpacity: 100,
                    gradientMode: 'hue',
                    hideFrom: {
                      legend: false,
                      tooltip: false,
                      viz: false,
                    },
                    lineInterpolation: 'stepAfter',
                    lineStyle: {
                      fill: 'solid',
                    },
                    lineWidth: 0,
                    pointSize: 1,
                    scaleDistribution: {
                      type: 'linear',
                    },
                    showPoints: 'never',
                    spanNulls: false,
                    stacking: {
                      group: 'A',
                      mode: 'none',
                    },
                    thresholdsStyle: {
                      mode: 'off',
                    },
                  },
                  decimals: 1,
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: '#EAB839',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 12,
                x: 0,
                y: 8,
              },
              id: 155,
              options: {
                legend: {
                  calcs: [],
                  displayMode: 'list',
                  placement: 'bottom',
                  showLegend: false,
                },
                tooltip: {
                  mode: 'single',
                  sort: 'none',
                },
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  exemplar: true,
                  expr: 'cluster:node_cpu:ratio_rate5m',
                  interval: '1',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster CPU Utilisation',
              transparent: true,
              type: 'timeseries',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'palette-classic',
                    seriesBy: 'last',
                  },
                  custom: {
                    axisCenteredZero: false,
                    axisColorMode: 'text',
                    axisLabel: '',
                    axisPlacement: 'auto',
                    barAlignment: 0,
                    drawStyle: 'line',
                    fillOpacity: 0,
                    gradientMode: 'none',
                    hideFrom: {
                      legend: false,
                      tooltip: false,
                      viz: false,
                    },
                    lineInterpolation: 'linear',
                    lineStyle: {
                      fill: 'solid',
                    },
                    lineWidth: 1,
                    pointSize: 5,
                    scaleDistribution: {
                      type: 'linear',
                    },
                    showPoints: 'never',
                    spanNulls: false,
                    stacking: {
                      group: 'A',
                      mode: 'none',
                    },
                    thresholdsStyle: {
                      mode: 'off',
                    },
                  },
                  mappings: [],
                  min: 0,
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: '#22577a',
                        value: null,
                      },
                    ],
                  },
                  unit: 'short',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 12,
                x: 12,
                y: 8,
              },
              id: 163,
              links: [],
              options: {
                legend: {
                  calcs: [],
                  displayMode: 'list',
                  placement: 'bottom',
                  showLegend: true,
                },
                tooltip: {
                  mode: 'multi',
                  sort: 'none',
                },
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'node_load1{job="node-exporter"}',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: '1m load average',
                  range: true,
                  refId: 'A',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'node_load5{job="node-exporter"}',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: '5m load average',
                  range: true,
                  refId: 'B',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'node_load15{job="node-exporter"}',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: '15m load average',
                  range: true,
                  refId: 'C',
                },
              ],
              title: 'Cluster CPU Load Average',
              transparent: true,
              type: 'timeseries',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 8,
                x: 0,
                y: 16,
              },
              id: 158,
              options: {
                colorMode: 'background_solid',
                graphMode: 'none',
                justifyMode: 'auto',
                orientation: 'auto',
                reduceOptions: {
                  calcs: ['lastNotNull'],
                  fields: '',
                  values: false,
                },
                text: {},
                textMode: 'auto',
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: '1 - sum(:node_memory_MemAvailable_bytes:sum) / sum(node_memory_MemTotal_bytes)',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster Memory Utilisation',
              transparent: true,
              type: 'stat',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 8,
                x: 8,
                y: 16,
              },
              id: 160,
              options: {
                colorMode: 'background_solid',
                graphMode: 'none',
                justifyMode: 'center',
                orientation: 'auto',
                reduceOptions: {
                  calcs: ['lastNotNull'],
                  fields: '',
                  values: false,
                },
                textMode: 'value',
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: 'sum(namespace_memory:kube_pod_container_resource_requests:sum{cluster=""}) / sum(kube_node_status_allocatable{job="kube-state-metrics",resource="memory",cluster=""})',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster Memory Requests Commitment',
              transparent: true,
              type: 'stat',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 8,
                w: 8,
                x: 16,
                y: 16,
              },
              id: 162,
              options: {
                colorMode: 'background_solid',
                graphMode: 'none',
                justifyMode: 'center',
                orientation: 'auto',
                reduceOptions: {
                  calcs: ['lastNotNull'],
                  fields: '',
                  values: false,
                },
                textMode: 'value',
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: 'sum(namespace_memory:kube_pod_container_resource_limits:sum{cluster=""}) / sum(kube_node_status_allocatable{job="kube-state-metrics",resource="memory",cluster=""})',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster Memory Limits Commitment',
              transparent: true,
              type: 'stat',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    fixedColor: '#22577a',
                    mode: 'fixed',
                  },
                  custom: {
                    axisCenteredZero: false,
                    axisColorMode: 'text',
                    axisLabel: '',
                    axisPlacement: 'auto',
                    barAlignment: 0,
                    drawStyle: 'line',
                    fillOpacity: 100,
                    gradientMode: 'hue',
                    hideFrom: {
                      legend: false,
                      tooltip: false,
                      viz: false,
                    },
                    lineInterpolation: 'linear',
                    lineWidth: 0,
                    pointSize: 5,
                    scaleDistribution: {
                      type: 'linear',
                    },
                    showPoints: 'never',
                    spanNulls: false,
                    stacking: {
                      group: 'A',
                      mode: 'none',
                    },
                    thresholdsStyle: {
                      mode: 'off',
                    },
                  },
                  decimals: 1,
                  mappings: [],
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'percentunit',
                },
                overrides: [],
              },
              gridPos: {
                h: 9,
                w: 12,
                x: 0,
                y: 24,
              },
              id: 157,
              options: {
                legend: {
                  calcs: [],
                  displayMode: 'list',
                  placement: 'bottom',
                  showLegend: false,
                },
                tooltip: {
                  mode: 'single',
                  sort: 'none',
                },
              },
              targets: [
                {
                  datasource: {
                    type: 'prometheus',
                    uid: 'prometheus',
                  },
                  editorMode: 'code',
                  expr: '1 - sum(:node_memory_MemAvailable_bytes:sum) / sum(node_memory_MemTotal_bytes)',
                  legendFormat: '__auto',
                  range: true,
                  refId: 'A',
                },
              ],
              title: 'Cluster Memory Utilisation',
              transparent: true,
              type: 'timeseries',
            },
            {
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fieldConfig: {
                defaults: {
                  color: {
                    mode: 'palette-classic',
                  },
                  custom: {
                    axisCenteredZero: false,
                    axisColorMode: 'text',
                    axisLabel: '',
                    axisPlacement: 'auto',
                    barAlignment: 0,
                    drawStyle: 'line',
                    fillOpacity: 10,
                    gradientMode: 'none',
                    hideFrom: {
                      legend: false,
                      tooltip: false,
                      viz: false,
                    },
                    lineInterpolation: 'linear',
                    lineWidth: 1,
                    pointSize: 5,
                    scaleDistribution: {
                      type: 'linear',
                    },
                    showPoints: 'never',
                    spanNulls: false,
                    stacking: {
                      group: 'A',
                      mode: 'normal',
                    },
                    thresholdsStyle: {
                      mode: 'off',
                    },
                  },
                  mappings: [],
                  min: 0,
                  thresholds: {
                    mode: 'absolute',
                    steps: [
                      {
                        color: 'green',
                        value: null,
                      },
                      {
                        color: 'red',
                        value: 80,
                      },
                    ],
                  },
                  unit: 'bytes',
                },
                overrides: [],
              },
              gridPos: {
                h: 9,
                w: 12,
                x: 12,
                y: 24,
              },
              id: 164,
              links: [],
              options: {
                legend: {
                  calcs: [],
                  displayMode: 'list',
                  placement: 'bottom',
                  showLegend: true,
                },
                tooltip: {
                  mode: 'multi',
                  sort: 'none',
                },
              },
              pluginVersion: '9.5.2',
              targets: [
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: '(\n  node_memory_MemTotal_bytes{job="node-exporter"}\n-\n  node_memory_MemFree_bytes{job="node-exporter"}\n-\n  node_memory_Buffers_bytes{job="node-exporter"}\n-\n  node_memory_Cached_bytes{job="node-exporter"}\n)\n',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: 'memory used',
                  range: true,
                  refId: 'A',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'node_memory_Buffers_bytes{job="node-exporter"}',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: 'memory buffers',
                  range: true,
                  refId: 'B',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'node_memory_Cached_bytes{job="node-exporter"}',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: 'memory cached',
                  range: true,
                  refId: 'C',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'node_memory_MemFree_bytes{job="node-exporter"}',
                  format: 'time_series',
                  intervalFactor: 2,
                  legendFormat: 'memory free',
                  range: true,
                  refId: 'D',
                },
              ],
              title: 'Cluster Memory Usage',
              transparent: true,
              type: 'timeseries',
            },
            {
              aliasColors: {},
              bars: false,
              dashLength: 10,
              dashes: false,
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              fill: 0,
              fillGradient: 0,
              gridPos: {
                h: 9,
                w: 8,
                x: 0,
                y: 33,
              },
              hiddenSeries: false,
              id: 165,
              legend: {
                alignAsTable: false,
                avg: false,
                current: false,
                max: false,
                min: false,
                rightSide: false,
                show: true,
                total: false,
                values: false,
              },
              lines: true,
              linewidth: 1,
              links: [],
              nullPointMode: 'null',
              options: {
                alertThreshold: true,
              },
              percentage: false,
              pluginVersion: '9.5.2',
              pointradius: 5,
              points: false,
              renderer: 'flot',
              seriesOverrides: [
                {
                  alias: '/ read| written/',
                  yaxis: 1,
                },
                {
                  alias: '/ io time/',
                  yaxis: 2,
                },
              ],
              spaceLength: 10,
              stack: false,
              steppedLine: false,
              targets: [
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'rate(node_disk_read_bytes_total{job="node-exporter", device=~"(/dev/)?(mmcblk.p.+|nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|md.+|dasd.+)"}[$__rate_interval])',
                  format: 'time_series',
                  intervalFactor: 1,
                  legendFormat: '{{device}} read',
                  range: true,
                  refId: 'A',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'rate(node_disk_written_bytes_total{job="node-exporter", device=~"(/dev/)?(mmcblk.p.+|nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|md.+|dasd.+)"}[$__rate_interval])',
                  format: 'time_series',
                  intervalFactor: 1,
                  legendFormat: '{{device}} written',
                  range: true,
                  refId: 'B',
                },
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'rate(node_disk_io_time_seconds_total{job="node-exporter", device=~"(/dev/)?(mmcblk.p.+|nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|md.+|dasd.+)"}[$__rate_interval])',
                  format: 'time_series',
                  intervalFactor: 1,
                  legendFormat: '{{device}} io time',
                  range: true,
                  refId: 'C',
                },
              ],
              thresholds: [],
              timeRegions: [],
              title: 'Disk I/O',
              tooltip: {
                shared: true,
                sort: 0,
                value_type: 'individual',
              },
              transparent: true,
              type: 'graph',
              xaxis: {
                mode: 'time',
                show: true,
                values: [],
              },
              yaxes: [
                {
                  format: 'Bps',
                  logBase: 1,
                  show: true,
                },
                {
                  format: 'percentunit',
                  logBase: 1,
                  show: true,
                },
              ],
              yaxis: {
                align: false,
              },
            },
            {
              aliasColors: {},
              bars: false,
              dashLength: 10,
              dashes: false,
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              description: 'Network received (bits/s)',
              fill: 0,
              fillGradient: 0,
              gridPos: {
                h: 9,
                w: 8,
                x: 8,
                y: 33,
              },
              hiddenSeries: false,
              id: 166,
              legend: {
                alignAsTable: false,
                avg: false,
                current: false,
                max: false,
                min: false,
                rightSide: false,
                show: true,
                total: false,
                values: false,
              },
              lines: true,
              linewidth: 1,
              links: [],
              nullPointMode: 'null',
              options: {
                alertThreshold: true,
              },
              percentage: false,
              pluginVersion: '9.5.2',
              pointradius: 5,
              points: false,
              renderer: 'flot',
              seriesOverrides: [],
              spaceLength: 10,
              stack: false,
              steppedLine: false,
              targets: [
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'rate(node_network_receive_bytes_total{job="node-exporter", device!="lo"}[$__rate_interval]) * 8',
                  format: 'time_series',
                  intervalFactor: 1,
                  legendFormat: '{{device}}',
                  range: true,
                  refId: 'A',
                },
              ],
              thresholds: [],
              timeRegions: [],
              title: 'Network Received',
              tooltip: {
                shared: true,
                sort: 0,
                value_type: 'individual',
              },
              transparent: true,
              type: 'graph',
              xaxis: {
                mode: 'time',
                show: true,
                values: [],
              },
              yaxes: [
                {
                  format: 'bps',
                  logBase: 1,
                  min: 0,
                  show: true,
                },
                {
                  format: 'bps',
                  logBase: 1,
                  min: 0,
                  show: true,
                },
              ],
              yaxis: {
                align: false,
              },
            },
            {
              aliasColors: {},
              bars: false,
              dashLength: 10,
              dashes: false,
              datasource: {
                type: 'prometheus',
                uid: 'prometheus',
              },
              description: 'Network transmitted (bits/s)',
              fill: 0,
              fillGradient: 0,
              gridPos: {
                h: 9,
                w: 8,
                x: 16,
                y: 33,
              },
              hiddenSeries: false,
              id: 167,
              legend: {
                alignAsTable: false,
                avg: false,
                current: false,
                max: false,
                min: false,
                rightSide: false,
                show: true,
                total: false,
                values: false,
              },
              lines: true,
              linewidth: 1,
              links: [],
              nullPointMode: 'null',
              options: {
                alertThreshold: true,
              },
              percentage: false,
              pluginVersion: '9.5.2',
              pointradius: 5,
              points: false,
              renderer: 'flot',
              seriesOverrides: [],
              spaceLength: 10,
              stack: false,
              steppedLine: false,
              targets: [
                {
                  datasource: {
                    uid: '$datasource',
                  },
                  editorMode: 'code',
                  expr: 'rate(node_network_transmit_bytes_total{job="node-exporter", device!="lo"}[$__rate_interval]) * 8',
                  format: 'time_series',
                  intervalFactor: 1,
                  legendFormat: '{{device}}',
                  range: true,
                  refId: 'A',
                },
              ],
              thresholds: [],
              timeRegions: [],
              title: 'Network Transmitted',
              tooltip: {
                shared: true,
                sort: 0,
                value_type: 'individual',
              },
              transparent: true,
              type: 'graph',
              xaxis: {
                mode: 'time',
                show: true,
                values: [],
              },
              yaxes: [
                {
                  format: 'bps',
                  logBase: 1,
                  min: 0,
                  show: true,
                },
                {
                  format: 'bps',
                  logBase: 1,
                  min: 0,
                  show: true,
                },
              ],
              yaxis: {
                align: false,
              },
            },
          ],
        },
        folderId: 0,
        message: '',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        const { uid } = data;
        urlStore.fullDashboard = `http://localhost:3000/d/${uid}/KubernetSuperSpecialDashboard?theme=light&orgId=1&refresh=5s`;
        res.locals.URLS = urlStore;
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
};

module.exports = grafanaController;
