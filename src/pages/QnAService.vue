<template>
  <q-page class="bg-white">
    <section class="text-white text-bold" style="border-bottom: solid 5px gray">
      <div
        class="full-width mainTop height mbheight text-center"
        style="background-color: white"
      >
        <div class="topFont mbtopFont">
          <spen style="color: #990000">GunBam </spen><br />
          <spen style="font-size: 1.4rem">QNA</spen><br />
        </div>
        <q-img class="logoImg mblogoImg" src="/gunbam/QnAgif.gif" />
      </div>
    </section>

    <section class="text-center q-mt-xl q-pa-sm m_bottom">
      <div class="text-bold q-mb-lg" style="font-size: 2rem">자주묻는 질문</div>

      <div
        class="q-px-md q-mt-xl q-mx-auto main_size mobile_size main_font_size mobile_font_size"
      >
        <q-tabs
          v-model="tab"
          dens
          style="
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            border-top: 1px solid rgba(0, 0, 0, 0.4);
          "
          class="text-grey"
          active-color="primary"
          indicator-color="transparent"
          align="justify"
          narrow-indicator
        >
          <div class="row col-12">
            <q-tab
              class="col-4 mobile_font_XL"
              name="user"
              style="
                border-right: 1px solid #d0cece;
                border-bottom: 1px solid #d0cece;
              "
              >회원관리</q-tab
            >
            <q-tab
              class="col-4 mobile_font_XL"
              name="password"
              style="
                border-right: 1px solid #d0cece;
                border-bottom: 1px solid #d0cece;
              "
              >인증</q-tab
            >
            <q-tab
              class="col-4 mobile_font_XL"
              name="phonchange"
              style="border-bottom: 1px solid #d0cece"
              >계좌등록</q-tab
            >
          </div>
        </q-tabs>

        <q-tab-panels v-model="tab" class="text-left">
          <q-tab-panel class="no-padding" name="user">
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="서비스 가입은 어떻게 하나요?"
                caption="[회원관리]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 소지하고 계신 휴대폰에 군밤 앱을 다운로드 하고
                    회원가입하시기 바랍니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel class="no-padding" name="password">
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="인증번호를 5회이상 시도하였습니다."
                caption="[인증]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    본인확인의 보안을 위하여 인증번호인증은 1일 5회로 제한이
                    있으며, 5회이상 미 입력 및 오류 시 하루 동안 본인인증 사용
                    제한이 있습니다.<br />
                    추가로 인증이 필요한 경우 간편인증앱을 설치 후 간편인증으로
                    회원가입이 가능합니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel class="no-padding" name="phonchange">
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="결재 계좌를 변경 할수 있나요?"
                caption="[계좌등록]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    본인 명의의 계좌라면 횟수에 관계없이 변경이 가능합니다.<br />
                    * 설정 -> 계좌관리 -> 계좌 등록
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("user"),
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
  methods: {},
};
</script>

<style>
.main_size {
  width: 70vw;
}

.main_font_size {
  font-size: 1.1rem;
}

.main_font_size_T {
  font-size: 0.9rem;
}

.btnFont {
  font-size: 0.9rem;
}

.m_bottom {
  margin-bottom: 20vw;
}

.height {
  height: 340px;
}

.logoImg {
  width: 200px;
  margin-top: 15px;
}

.topFont {
  font-size: 1.7rem;
  margin-top: 30px;
  color: black;
}

.topFont1 {
  font-size: 1.3rem;
  margin-top: 15px;
  color: black;
}

@media (max-width: 730px) {
  .mobile_font_XL {
    font-size: 0.65rem;
  }
}

@media (max-width: 420px) {
  .mbheight {
    height: 330px;
  }

  .mblogoImg {
    width: 180px;
    margin-top: 15px;
  }

  .mbtopFont {
    font-size: 1.2rem;
    margin-top: 30px;
  }

  .mbtopFont1 {
    font-size: 1rem;
    margin-top: 15px;
  }

  .mobile_size {
    padding: 0px;
    width: auto;
    margin-bottom: 20vw;
  }

  .mobile_font_size {
    font-size: 0.8rem;
  }

  .mobile_font_size_T {
    font-size: 0.7rem;
  }

  .marginMB {
    margin-right: 0px;
  }

  .mbFont {
    font-size: 0.6rem;
  }

  .marginBBM {
    margin-right: 160px;
  }
}
</style>
