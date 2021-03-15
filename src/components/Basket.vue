<template>
    <div>
        <p>{{this.item}}</p>
        <ul>
            <li v-for="(i, id) in item" :key="id">
                {{ i[0] }}
            </li>
        </ul>
        <button v-on:click="buttonClicked() ; sendOrders()">Calculate total</button>
        <p v-show="totalButtonClicked"> SubTotal : {{findTotal}} </p>
        <p v-show="totalButtonClicked">Grand Total : {{(findTotal * 1.07).toFixed(2)}} </p>
    </div>
</template>

<script>
import database from '../firebase.js'
export default {
    data(){
        return {
            totalButtonClicked : false , 
            priceBeforeGST : 0
        }
    } , 
    props : {
        item : Array 
    } , 
    computed : {
        findTotal : function(){
            var prawn = 0 
            var dryBeef = 0
            var sambal = 0 
            var pork = 0
            var tofu = 0 
            var cereal = 0 
            for(var i = 0; i < this.item.length; i++){
                if(this.item[i][0] === "Prawn omelette"){
                    prawn = this.item[i][2] * this.item[i][1] ; 
                } else if (this.item[i][0] === "Dry Beef Hor Fun"){
                    dryBeef = this.item[i][2] * this.item[i][1]; 
                } else if (this.item[i][0] === "Sambal Kangkung"){
                    sambal = this.item[i][2] * this.item[i][1];
                } else if (this.item[i][0] === "Pork Fried Rice"){
                    pork = this.item[i][2] * this.item[i][1];
                } else if (this.item[i][0] === "Mapo Tofu"){
                    tofu = this.item[i][2] * this.item[i][1];
                } else if (this.item[i][0] === "Cereal Prawn"){
                    cereal = this.item[i][2] * this.item[i][1] ;
                }
            }
            return prawn + dryBeef + sambal + pork + tofu + cereal 
        }
    } , 
    methods : {
        buttonClicked : function(){
            this.totalButtonClicked = true 
        } , 
        sendOrders : function(){
            let arr = {}
            for(var i = 0; i < this.item.length ; i++){
                var name = this.item[i][0] ;
                var quantity = this.item[i][1] ;
                arr[name] = quantity ; 
            }
            database.collection("orders").add(arr).then(() => {location.reload()})

        }
        
    } 
                
}
        
    

</script>