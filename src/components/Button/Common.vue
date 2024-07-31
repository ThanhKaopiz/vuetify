<template>
  <div class="button-common">
    <v-btn
        :prepend-icon="icon"
        stacked
    >
      {{ title }}
    </v-btn>
  </div>
</template>
<script setup lang="ts">

export interface Props {
  icon: string,
  color: string,
  title: string,
  variant: string,
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  variant: 'outlined',
  title: '',
  backgroundColor: '#F2F4F6'
})

</script>

<style lang="scss" scoped>
.button-common {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50px;
  height: 50px;
  gap: 2px;

  background-color: v-bind(backgroundColor);

  :deep(.v-btn__content) {
    white-space: nowrap;
  }


  .v-btn--size-default {
    min-width: 50px;
    height: 50px;
  }

  .v-btn {
    border-radius: 0;
    height: 50px;
    width: 50px;
    background-color: v-bind(backgroundColor);
    //border: 0;
    box-shadow: none;
  }

  :deep(.v-btn__content) {
    font-size: 10px;
    color: black;
  }

  .title {
    color: black;
    font-size: 10px;
    line-height: 13px;
  }
}


</style>
