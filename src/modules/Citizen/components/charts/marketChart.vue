<template>
    <BCard type="chart" class="market-chart">
        <template slot="header">
            <h5 class="card-category">Total</h5>
            <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary "></i> 763,215</h3>
        </template>
        <div class="chart-area">
            <line-chart style="height: 100%"
                        :chart-data="purpleLineChart.chartData"
                        :gradient-colors="purpleLineChart.gradientColors"
                        :gradient-stops="purpleLineChart.gradientStops"
                        :extra-options="purpleLineChart.extraOptions">
            </line-chart>
        </div>
    </BCard>
</template>
<script>
import LineChart from './LineChart';
import * as chartConfigs from './config';
export default {
    components: {
      LineChart,
    },
    data(){
        return{
            purpleLineChart: {
                extraOptions: chartConfigs.purpleChartOptions,
                chartData: {
                    labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [{
                    label: "Data",
                    fill: true,
                    borderColor: chartConfigs.config.colors.primary,
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: chartConfigs.config.colors.primary,
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: chartConfigs.config.colors.primary,
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [80, 100, 70, 80, 120, 80],
                    }]
                },
                gradientColors: chartConfigs.config.colors.primaryGradient,
                gradientStops: [1, 0.2, 0],
            },
        }
    }
    
}
</script>
<style lang="less" scoped>
    .card{
        height: 100%;
    }
</style>
