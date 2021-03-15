<template>
    <div id = "app">
        <button v-on:click="increment"> + </button>
        <p> {{ currentQuantity }} </p>
        <button v-on:click="decrement"> - </button>
    </div>
</template>

<script>
export default {
    name : "QuantityCounter", 
    data (){
        return {
            currentQuantity : 0 
        }
    } , 
    methods : {
        increment : function(){
            if(this.currentQuantity < 10){
                this.currentQuantity++ ; 
            } 
            this.$emit('counter', this.item, this.currentQuantity)
        } , 
        decrement : function(){
            if(this.currentQuantity > 0){
                this.currentQuantity-- ; 
            }
            this.$emit('counter', this.item, this.currentQuantity)
        }
        
        
    }, 
    props : {
        item : Object
    }

}
</script>