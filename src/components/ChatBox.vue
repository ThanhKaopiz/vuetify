<template>
  <div class="box-chat-container flex-column justify-space-between h-100">
    <v-virtual-scroll id="style-2" class="box-chat-detail " height="300px" :items="chatMessage">

      <template v-slot:default="{item,index}">
        <div :id="`chat-${index}`" class="d-flex flex-column justify-start mt-4">
          <div :class="item.id===1?'':'flex-row-reverse' "
               class="d-flex align-end mb-2 ga-3">
            <Avatar class="rounded-circle avatar"></Avatar>
            <div :class="item.id===1?'bg-deep-orange-lighten-5':'bg-light-blue-accent-1'"
                 class="h-100 pa-4 w-auto rounded-xl bg-light-blue-accent-1 b text-break">
              {{ item.message }}
            </div>
          </div>
        </div>
      </template>

    </v-virtual-scroll>

    <div>
      <v-textarea
          v-model="message"
          rows="1"
          :append-inner-icon="Fly"
          density="compact"
          label="Search templates"
          variant="solo"
          hide-details
          single-line
          @click:append-inner="onClick"
      ></v-textarea>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Fly from "@/components/Icon/Fly.vue";

const message = ref();

onMounted(() => {
  document.getElementById(`chat-${chatMessage.value.length - 1}`)?.scrollIntoView();
})
const chatMessage = ref([
  {
    id: 1,
    message: 'hihihihihihihihihihihihihihi'
  },
  {
    id: 2,
    message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
  },
  {
    id: 2,
    message: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
  },
  {
    id: 2,
    message: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
  }, {
    id: 2,
    message: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
  },
  {
    id: 1,
    message: 'hihihihihihihihihihihihihihi'
  },
  {
    id: 1,
    message: 'hihihihihihihihihihihihihihi'
  },
])

const scrollToEnd = () => {
  setTimeout(() => {
    console.log('111')
    document.getElementById(`chat-${chatMessage.value.length - 1}`)?.scrollIntoView({behavior: "smooth"});
  }, 200)
}

const onClick = () => {
  if (!message.value) return
  chatMessage.value.push({
    id: 1,
    message: message.value
  })
  message.value = undefined
  scrollToEnd()
}

defineExpose({
  scrollToEnd
})

</script>

<style lang="scss">
.box-chat-container {
  display: flex;

  .avatar {
    width: 30px;
    height: 30px;
  }
}

#style-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #F2F4F6;
}
</style>
