<template>
  <article>
    <div v-if="!faceDown" class="card">
      <span class="top">
        <img :src="icon" class="icon">
        <p>{{displayValue}}</p>
      </span>

      <img :src="icon" class="icon large">

      <span class="bottom">
        <img :src="icon" class="icon">
        <p>{{displayValue}}</p>
      </span>
    </div>
    <div v-else class="card face-down">

    </div>

  </article>
</template>

<script>
export default {
  props: {
    card: Object,
    faceDown: Boolean
  },
  computed: {
    icon(){
      return require(`@/assets/${this.card.suite}.svg`)
    },
    displayValue(){
      switch(this.card.value){
        case 14:
        case 1: return "A"
        case 11: return "J"
        case 12: return "Q"
        case 13: return "K"
        default: return this.card.value
      }
    }
  }
}
</script>

<style lang="scss">
.card{
  background-color: #EEE;
  width: 18rem;
  height: 28rem;
  margin: 1rem;
  border: 10px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;

  p{
    margin:0; 
    padding: 0;
    font-weight: 900;
    font-size: 1.5rem;
  }

  .icon{
    height: 2rem;
    width: 2rem;

    &.large{
      height: 3rem;
      width: 3rem;
    }
  }
  &.face-down{
    background-color: rgb(232, 224, 112);
    background-image: url('~@/assets/dots.svg');
  }

  .top{ align-self: flex-start}
  .bottom{ 
    align-self: flex-end;
    transform: rotate(180deg);
  }
  

}
</style>