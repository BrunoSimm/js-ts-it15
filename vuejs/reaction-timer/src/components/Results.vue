<template>
  <h3>Reaction Time: {{score}} ms</h3>
  <h4 style="color: green;">{{rank}}</h4>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted(){
        if(this.score < 250){
            this.rank = "NINJA FINGERS"
        } else if(this.score < 400){
            this.rank = "RAPID REFLEXES"
        } else {
            this.rank = "Snail pace..."
        }
    }
}
</script>

<style>

</style>