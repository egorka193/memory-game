<template>
  <div
    class="card"
    @click="chooseCard"
  >
    <img :src="value.url" alt="">
    <p class="card__text">{{ value.name }}</p>
  </div>   


</template>


<script>
export default {
  props:{
    value: {
      type: Object,
      required: true
    }
  },
  emits: ['chooseCard'],
  methods: {
    chooseCard(){
      console.log(this.value.url);
      this.$emit('chooseCard', this.value.url)
    }
  }
}
</script>


<style scoped>
img{
  width: 250px;
  height: 250px;
  border-radius: 10px;
}
.card{
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(93, 147, 7);
  box-shadow: 0px 2px 16px 4px rgba(0,0,0,0.6);
  -webkit-box-shadow: 0px 2px 16px 4px rgba(0,0,0,0.6);
  -moz-box-shadow: 0px 2px 16px 4px rgba(0,0,0,0.6);
}
.card__text{
  font-size: 30px;
  font-weight: 700;
  display: table;
  margin: 10px auto;
  color: aliceblue;
}
.card:hover{
  cursor: pointer;
  box-shadow: 0px 2px 26px 13px rgba(224,187,51,0.6);
  -webkit-box-shadow: 0px 2px 26px 13px rgba(224,187,51,0.6);
  -moz-box-shadow: 0px 2px 26px 13px rgba(224,187,51,0.6);
}
</style>
