<template>
    <div>
        <h1> Welcome to Makan Store :) </h1>
        <ul>
          <li><router-link to="/" exact> Home </router-link></li>
          <li><router-link to="/orders" exact> Orders </router-link></li>
          <li><router-link to="/dashboard" exact> Dashboard </router-link></li>
        </ul>
        <ul> 
            <li v-for="item in items" :key="item.id">
                {{ item.name }}
                <br>
                <img v-bind:src='item.imageURL'>
                <br>
                ${{item.price}} 
                <QuantityCounter v-bind:item='item' v-on:counter="onCounter">
                </QuantityCounter>
            </li>
       </ul>
       
       <Basket v-bind:item="itemsSelected"></Basket>
    </div>
    
</template>

<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
import database from '../firebase.js' 
export default {
    components : {
        QuantityCounter: QuantityCounter , 
        Basket: Basket
    } , 
    data () {
        return {
            itemsSelected : [] , 
            items : []
        }
    } , 
    methods : {
        onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);
      } else {
        var isItemInside = false ;
        // Loop through everything to check what is not in the basket
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];

          // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
          if(item_name === item.name){
              console.log(count)
              if(count > 0){
                  isItemInside = true ;
                  this.itemsSelected.splice(i, 1, [item_name, count, curr_item[2]])
                  break
              } else {
                  isItemInside = true ;
                  this.itemsSelected.splice(i, 1)
                  break              
                }
          }

          // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.

          // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
          
        }
        if (!isItemInside){
            this.itemsSelected.push([item.name, count, item.price])
        }
        
      }
      
    } , 
    fetchItems : function(){
        database.collection("menu").get().then((querySnapShot) => {
            let item = {}
            querySnapShot.forEach(doc => {
                item = doc.data()
                item.show = false 
                this.items.push(item)
            
            })
        })
    }
    } , 
    created(){
        this.fetchItems()
    }
    


}
</script>