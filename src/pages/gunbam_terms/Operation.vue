<template>
  <q-page class="row justify-center bg-grey-1">
    <div
      class="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-xs-11"
      style="white-space: normal; font-size: 1rem"
    >
      <div class="q-py-lg text-h5 text-bold">군밤 운영정책</div>

      <!-- fixme PageUpBtn -->
      <q-page-scroller expand :scroll-offset="300" :offset="[0, 0]">
        <q-btn class="q-ma-md" round icon="keyboard_arrow_up" size="md" />
      </q-page-scroller>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
