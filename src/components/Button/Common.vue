<template>
  <div class="button-common">
    <v-btn
      base-color="red"
      class="button"
      :color="color"
      :icon="icon"
      :variant="variant"
    />
    <div class="title">{{ title }}</div>
  </div>
</template>
<script setup lang="ts">

  export interface Props {
    icon: String,
    color: String,
    title: String,
    variant: String,
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: '',
    color: '#D9414E',
    variant: 'outlined',
    title: '',
  })

</script>

<style lang="scss" scoped>
.button-common{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  gap: 2px;

  background-color: #F2F4F6;

  .button{
    height: 24.5px;
    width: 24.5px;
    background-color: #FFFFFF;
  }

  .title{
    color:black;
    font-size: 10px;
    line-height: 13px;
  }
}
.v-btn{

}

</style>
