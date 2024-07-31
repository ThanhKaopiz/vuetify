<template>
  <div class="main-content">
    <Minus class="zoom-button" @click="handleClick"></Minus>
    <div class="inner-content">
      <ChatBox ref="_refChatBox" class="box-chat" v-show="showChat"></ChatBox>
      <video v-show="streamId===1" src="@/assets/1.mp4" controls
             autoplay playsinline></video>
      <video v-show="streamId===2" src="@/assets/2.mp4" controls
             autoplay playsinline></video>
    </div>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps<{ streamId: number, showChat: boolean }>()
const emits = defineEmits(['handleClick'])
const _refChatBox = ref();
watch(() => props.showChat, () => {
  console.log('11')
  _refChatBox.value.scrollToEnd();
})


const handleClick = () => {
  emits('handleClick')

}

</script>
<style lang="scss" scoped>


.main-content {
  background-color: #F2F4F6;
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height 0.3s ease 0s;

  .zoom-button {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .inner-content {
    background-color: #F2F4F6;
    height: 100%;
    padding: 10px;
  }
}

video {
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
}


</style>
