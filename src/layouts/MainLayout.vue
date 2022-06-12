<!--
fixme 버튼 이동 루트 설정 해야됨.
-->

<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white">
      <!-- fixme header btn -->
      <section class="q-py-sm flex flex-center">
        <q-btn flat dense @click="home">
          <img class="mainLogosize logosize" src="/gunbam/mainLogo.png" />
        </q-btn>
      </section>

      <!-- fixme #400 Page T Btn -->
      <section class="q-pa-xs full-width flex flex-center">
        <!-- fixme #401 Page T Category Btn -->
        <q-btn
          class="webtext webtext1 text-black text-bold"
          label="GunBam"
          style="width: 21vw"
          @click="home"
          flat
          dense
        />

        <!-- fixme #402 Page T Category Btn -->
        <q-btn
          class="webtext webtext1 text-black text-bold"
          label="이벤트"
          style="width: 21vw"
          disable
          flat
          dense
        />

        <!-- fixme #403 Page T Category Btn -->
        <q-btn
          class="webtext webtext1 text-black display text-bold"
          style="width: 21vw"
          @click="QnA"
          flat
          dense
        >
          고객센터 <span class="display123"> (FAQ)</span>
        </q-btn>
      </section>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center bg-grey-8 q-py-lg">
      <section>
        <div class="q-mb-md">
          <q-btn
            class="text-bold fontStyle"
            label="이용약관"
            @click="TOSBtn()"
            flat
          />
          <q-btn
            class="text-bold fontStyle"
            label="개인정보처리방침"
            @click="InfoBtn()"
            flat
          />
          <q-btn
            class="text-bold fontStyle"
            label="운영정책"
            @click="OperationBtn()"
            flat
          />
        </div>

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
    // fixme router Button
    home() {
      this.$router.push("/");
    },
    QnA() {
      this.$router.push("QnA");
    },
    InfoBtn() {
      window.open("#/info");
    },
    TOSBtn() {
      window.open("#/tos");
    },
    OperationBtn() {
      window.open("#/operation");
    },
  },
};
</script>

<style>
.webtext {
  font-size: 1rem;
}

.logosize {
  width: 180px;
}

@media (max-width: 500px) {
  .display123 {
    display: none;
  }
  .mainLogosize {
    width: 100px;
  }
  .webtext1 {
    font-size: 0.8rem;
  }
  .fontStyle {
    font-size: 0.8rem;
  }
}
</style>
