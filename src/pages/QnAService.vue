<template>
  <q-page class="bg-white">
    <section class="text-white text-bold">
      <div
        class="full-width mainTop height mbheight text-center"
        style="background-color: #f7c1c1"
      >
        <q-img class="logoImg mblogoImg" src="/gunbam/QnAimg.png" />
        <div class="topFont mbtopFont">
          GunBam 고객센터에서<br />24시간 상담받을 수 있어요!
        </div>
        <div class="topFont1 mbtopFont1 text-weight-medium">이메일</div>
        <div class="topFont1 mbtopFont1 text-weight-medium">
          kelos2024@gamil.com
        </div>
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
              >인증/비밀번호</q-tab
            >
            <q-tab
              class="col-4 mobile_font_XL"
              name="phonchange"
              style="border-bottom: 1px solid #d0cece"
              >기기변경/번호변경</q-tab
            >
            <q-tab
              class="col-4 mobile_font_XL"
              name="account"
              style="border-right: 1px solid #d0cece"
              >출금/계좌등록</q-tab
            >
            <q-tab
              class="col-4 mobile_font_XL"
              name="charging"
              style="border-right: 1px solid #d0cece"
              >충전/사용</q-tab
            >
            <q-tab class="col-4 mobile_font_XL" name="error">기타오류</q-tab>
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
                    1. 군밤는 현금을 자유롭게 충전하며 결제, 보내기, 받기, 출금
                    등의 서비스를 이용할 수 있는 모바일 앱입니다.<br />
                    2. 현금을 군밤로 전환하여 직접 출금 및 지인에게 보내기
                    출금으로 즉시출금이 가능합니다.<br />
                    3. 휴대폰 번호 인증 만으로 간편하게 가입이 가능합니다.<br />
                    4. 소지하고 계신 휴대폰에 군밤 앱을 다운로드 하고
                    회원가입하시기 바랍니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="서비스 해지, 탈퇴하려면 어떻게 하나요?"
                caption="[회원관리]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    군밤 앱을 통해 서비스 해지/탈퇴가 가능합니다.<br />
                    단, 잔액이 전액 소멸되기 때문에 잔액 확인 후 이용바랍니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="서비스 탈퇴 후 재가입이 가능한가요?"
                caption="[회원관리]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    군밤는 탈퇴처리 5일 이후부터 재가입이 가능하며 이미 탈퇴한
                    회원인 경우 본인인증 절차를 통해 신규가입처리가 됩니다.
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
                label="인증번호를 입력 할 수 없습니다."
                caption="[인증/비밀번호]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 군밤의 경우 보안강화를 위하여 인증번호 문자를 자동으로
                    읽어 인증하는 시스템입니다.<br />
                    2. 정상적으로 개통된 사용 가능한 휴대폰에 한하여 가입이
                    가능합니다.<br />
                    3. 인증 실패의 경우 통신사 기준에 따라 (미납요금 혹은
                    가입기간 미달) 인증이 실패한 경우입니다.<br />
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="인증번호를 5회이상 시도하였습니다."
                caption="[인증/비밀번호]"
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
                label="[기기변경/번호변경] 기기변경/번호변경을 하였습니다. 잔액은 어떻게 하나요?"
                caption="[기기변경/번호변경]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 군밤앱의 내정보 메뉴에서 비밀번호를 변경 할 수
                    있습니다.<br />
                    2. 비밀번호를 분실/변경이 필요한 경우 군밤 앱의 설정에서
                    본인인증 절차를 진행 후 비밀번호를 변경 할 수 있습니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="기기변경시 비밀번호 분실을 하였습니다."
                caption="[기기변경/번호변경]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 비밀번호를 분실한 경우 재가입 후 비밀번호 찾기를 통하여
                    비밀번호를 재설정 하시면 가입이 가능합니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel class="no-padding" name="account">
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="군밤를 출금하고 싶습니다."
                caption="[출금/계좌등록]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    군밤의 경우 출금 가능합니다.<br />
                    1. 회원가입 후 본인 계좌등록<br />
                    2. 계좌 관리에서 본인 소유의 계좌를 등록<br />
                    3. 홈 화면-> 군밤센터 에서 출금 버튼으로 출금 요청 시 즉시
                    현금 입금됩니다. 단, 1회 최대 출금 한도는 1천만 원입니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="출금한도는 어떻게 되나요?"
                caption="[출금/계좌등록]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 출금 최소금액은 10,000원부터이며, 1,000원 단위로 출금이
                    가능합니다.<br />
                    2. 1회출금 최대한도는 1000만 원 / 하루 출금한도 1000만 원 /
                    출금한도 내에서 출금 횟수 관계없음.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="출금이 안되요?"
                caption="[출금/계좌등록]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 군밤는 24시간 서비스가 가능하나 각 은행의 점검 시간에는
                    은행 네크워크와 연동이 불가능하여 출금이 어려우며 점검 시간
                    이후 출금이 가능합니다.<br />
                    * 각 은행 점검 시간은 앱의 안내 페이지를 참고해주세요
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="출금계좌를 변경 할수 있나요?"
                caption="[출금/계좌등록]"
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
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="휴대폰 명의와 계좌소유주가 다르게 등록 되나요?"
                caption="[출금/계좌등록]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    그렇지않습니다. 본인 소유 계좌만 등록가능합니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel class="no-padding" name="charging">
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="충전했던 금액을 취소하고 싶습니다."
                caption="[충전/사용]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    이미 충전된 금액은 취소가 불가능합니다. 군밤 출금 처리를
                    통해 계좌로 입금 받으셔야 합니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel class="no-padding" name="error">
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="[기타오류] 출금에 실패하였습니다."
                caption="[기타오류]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 출금이 실패하였을 경우 은행 일일 서버 점검 시간일 경우에
                    해당되며 은행 서버 점검 이후 시도해주세요<br />
                    2. 출금 시 포인트는 차감되었으나 계좌로 입금이 안된 경우
                    은행 전산의 누락이므로 군밤 고객센터로 문의하시면 빠르게
                    해결해드리겠습니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="앱이 실행이 안되요?"
                caption="[기타오류]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 앱이 실행이 안될 경우는 군밤에서 긴급 서버 점검인
                    경우이며 이는 서버 점검 이후 시도해주시면 사용
                    가능합니다.<br />
                    (사전에 공지사항으로 군밤 서버 점검 시간을 공지해 드리니
                    확인 부탁드립니다.)<br />
                    2. 기타 앱이 다운되거나, 실행이 안 되시는 경우 군밤
                    고객센터로 문의하시면 빠르게 해결해드리겠습니다.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-list style="border-bottom: solid 1px #d0cece">
              <q-expansion-item
                class="q-mt-xs main_font_size mobile_font_size"
                expand-separator
                icon="quora"
                label="장애 및 신고"
                caption="[기타오류]"
              >
                <q-card class="text-weight-thin">
                  <q-card-section
                    style="border-top: solid 1px #d0cece"
                    class="q-py-lg main_font_size_T mobile_font_size_T"
                  >
                    <div class="text-h6 text-bold q-mb-sm">A.</div>
                    1. 일반적인 사용 패턴에서 벗어난 경우 정지 처리 됩니다.
                    (고객상태 이력 체크 / 특히 기기변경과 휴대폰 변경)<br />
                    2. 정상적인 방법을 통하여 개통된 휴대폰만 사용이 가능하며
                    컴퓨터 에뮬레이터인(블루스택/녹스)등으로 설치 및 사용은
                    불가능합니다.<br />
                    3. 비정상적인 방법으로 앱이 실행되거나 사용이 될 경우 앱이
                    일시정지되며 사이버수사대로 자동 신고됩니다.
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
  height: 435px;
}

.logoImg {
  width: 200px;
  margin-top: 30px;
}

.topFont {
  font-size: 2rem;
  margin-top: 30px;
}

.topFont1 {
  font-size: 1.5rem;
  margin-top: 30px;
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
    margin-top: 30px;
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
