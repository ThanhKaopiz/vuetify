<template>
  <div class="main-content">
    <Minus class="zoom-button" @click="handleClick"></Minus>
    <div class="inner-content">
      <video v-show="streamId===1" controls src="@/assets/mov_bbb.mp4" autoplay></video>
      <video v-show="streamId===2" controls src="https://www.w3schools.com/tags/movie.mp4" autoplay></video>
    </div>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps<{streamId:number}>()
const emits = defineEmits(['handleClick'])

const handleClick = ()=>{
  emits('handleClick')

}

</script>
<style lang="scss" scoped>


.main-content{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height 0.3s ease 0s;

  .zoom-button{
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
}

video{
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
}

.inner-content{
  background: white;
  height: 100%;
}
</style>
