<!--
fixme 버튼 이동 루트 설정 해야됨.
-->

<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white">
      <!-- fixme header btn -->
      <section class="q-pt-sm flex flex-center">
        <div class="">
          <img class="mainLogosize logosize" src="/gunbam/Main.png" />
        </div>
      </section>

      <!-- fixme #400 Page T Btn -->
      <section class="full-width flex flex-center">
        <!-- fixme #401 Page T Category Btn -->
        <q-btn
          class="webtext webtext1 text-black"
          label="이용약관"
          @click="TOSBtn()"
          style="width: 21vw"
          flat
          dense
        />

        <!-- fixme #402 Page T Category Btn -->
        <q-btn
          class="webtext webtext1 text-black marginX"
          label="개인정보 처리방침"
          @click="InfoBtn()"
          style="width: 21vw"
          flat
          dense
        />

        <!-- fixme #403 Page T Category Btn -->
        <q-btn
          class="webtext webtext1 text-black"
          label="운영정책"
          @click="OperationBtn()"
          style="width: 21vw"
          flat
          dense
        />
      </section>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center bg-brown q-py-lg">
      <section>
        <div class="text-bold q-pb-sm" style="font-size: 1rem">
          (주)GunBam<br />
        </div>
        <div>서울특별시 금천구 독산동(주)GunBam</div>
        <div>사업자등록번호 : 123-45-67890</div>
        <div class="text-bold q-pb-sm q-pt-lg" style="font-size: 1rem">
          고객센터
        </div>
        <div>kelos2024@gmail.com</div>
        <div>09:00 ~ 18:00 월요일 ~ 금요일</div>
        <div>(12:00 ~ 13:20 점심시간)</div>
      </section>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  setup() {
    return {};
  },
  methods: {
    homeBtn() {
      this.$router.push("home");
    },
    // RouterBtn
    InfoBtn() {
      this.$router.push("info");
    },
    TOSBtn() {
      this.$router.push("tos");
    },
    OperationBtn() {
      this.$router.push("operation");
    },
  },
};
</script>

<style>
.webtext {
  font-size: 1rem;
}

.logosize {
  width: 100px;
}

@media (max-width: 590px) {
  .display123 {
    display: none;
  }
  .mainLogosize {
    width: 100px;
  }
  .webtext1 {
    font-size: 0.8rem;
  }
  .marginX {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
