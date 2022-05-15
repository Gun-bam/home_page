<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-brown-6">
      <!-- main logo img center -->
      <section class="bg-white flex flex-center">
        <q-btn class="q-my-sm" flat dense @click="home">
          <img src="icons/good.png" />
        </q-btn>
      </section>

      <section class="row">
        <q-btn class="col-4" label="메인" flat @click="home" />
        <q-btn class="col-4" label="준비" flat @click="event" />
        <q-btn class="col-4" label="FAQ" flat @click="faq" />
      </section>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    home() {
      this.$router.push("/");
      console.log("눌렀당");
    },
    event() {
      console.log("이벤트 눌렀당");
    },
    faq() {
      console.log("fqa당");
    },
  },
});
</script>
