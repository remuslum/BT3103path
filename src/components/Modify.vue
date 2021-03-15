<template>
    <div>
        <h1> Welcome to Makan Store :) </h1>
        <div v-for="(quantity, name) in datapacket" v-bind:key="name">
            <p> {{name}}: {{quantity}} </p>
            <input type="number" placeholder="0" min="0" v-bind:id="name">
    </div>
    <br>
    <button v-on:click="updateOrder()"> Update Order </button>
    </div>
</template>

<script>
import database from '../firebase.js'
export default {
    data(){
        return {
            id : "", 
            datapacket : {}
        }
    } , 
    methods : {
        fetchItems : function(){
            database.collection("orders").get().then((querySnapShot) => {
                querySnapShot.forEach(doc => {
                    if(doc.id == this.id){
                        this.datapacket = doc.data()
                    }
                })
            })
        } , 
        updateOrder : function(){
            let datapacketCopy = Object.assign({}, this.datapacket)
            for(const name in datapacketCopy){
                var newQuantity = document.getElementById(name).value
                if(newQuantity == ""){
                    newQuantity = this.datapacket[name]
                }
                datapacketCopy[name] = newQuantity

            }
            database.collection("orders").doc(this.id).set(datapacketCopy).then(() => {location.reload()})
            this.$router.push({path : '/orders'})
        }
    } , 
    created() {
        this.fetchItems()
        this.id = this.$route.params.id 
    }
}
</script>

<style scoped>

button {
  width: 170px;
  height: 50px;
  font-size:20px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}

</style>
