<template>
  <q-page class="row justify-center bg-grey-1">
    <div
      class="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-xs-11"
      style="white-space: normal; font-size: 1rem"
    >
      <div class="q-py-lg text-h5 text-bold">군밤 개인정보처리방침</div>
    </div>
  </q-page>
</template>

<script>
import $ from "jquery";

export default {
  setup() {
    return {};
  },
  methods: {
    goto(refName) {
      let element = this.$refs[refName];
      let top = element.offsetTop;

      $("html").animate({ scrollTop: top }, 400);
    },
  },
};
</script>

<style>
.btnFont {
  font-size: 0.9rem;
}

.marginCenter {
  margin-right: 50px;
}

.borderBottom {
  border-bottom: solid 1px rgba(128, 128, 128, 0.45);
}

.borderCenter {
  border-bottom: solid 1px rgba(128, 128, 128, 0.45);
  border-right: solid 1px rgba(128, 128, 128, 0.45);
  border-left: solid 1px rgba(128, 128, 128, 0.45);
}

.borderCenter2 {
  border-right: solid 1px rgba(128, 128, 128, 0.45);
  border-left: solid 1px rgba(128, 128, 128, 0.45);
}

@media (max-width: 420px) {
  .mbFont {
    font-size: 0.6rem;
  }

  .mbText {
    font-size: 0.9rem;
  }

  /*.btnNone{*/
  /*  display: none;*/
  /*}*/
}
</style>
