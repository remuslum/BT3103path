import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data : [],
                label : "west" , 
                backgroundColor : "red" , 
                fill: false
            } , 
            {
                data : [] , 
                label : "national", 
                backgroundColor : "blue" , 
                fill : false 
            } , 
            {
                data : [], 
                label : "east", 
                backgroundColor : "green" , 
                fill : false 
            } ,
            {
                data : [],
                label : "central" , 
                backgroundColor : "yellow" , 
                fill : false
            } , 
            {
                data : [], 
                label : "south", 
                backgroundColor : "black" , 
                fill : false 
            }, 
            {
                data : [], 
                label : "north",
                fill : false 
            }
        ]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: ''
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
                for(var index in response.data.items){
                    var hour = response.data.items[index]
                    this.datacollection.labels.push(hour.timestamp)
                    var psi_list = hour.readings.psi_twenty_four_hourly 
                    var psi_values = Object.values(psi_list)
                    for(let i = 0 ; i < psi_values.length ; i++){
                        this.datacollection.datasets[i].data.push(psi_values[i])
                    }
                    
                }
            
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}