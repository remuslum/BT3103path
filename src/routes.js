import Orders from './components/Orders.vue'
import Home from './components/PageContent.vue'
import Modify from './components/Modify.vue'
import DashBoard from './components/DashBoard.vue'

export default [ 
    {path : '/', component : Home} , 
    {path : '/orders', component : Orders} ,
    {path : '/modify', component : Modify, props : true, name : "Modify"}, 
    {path : '/dashboard', component : DashBoard}
]
