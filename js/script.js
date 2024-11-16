const mockData = [
  {
    examinationData: {},
  },
];

Vue.component("gcp_table", {
  template: `
    
  `,
});

Vue.component("empty_gcb_evaluation", {
  template: `
    <div class="empty_gcb_evaluation">
      <div class="create_page_container">
        <div>
          当前检查尚未进行评估
        </div>
        <div>
          <button 
            class="do_evaluation_button"
            v-on:click="$emit('create-examination')"
          >
            进行评估
          </button>
        </div>
      </div>
    </div>
  `,
});

var app = new Vue({
  el: "#app",
  data: {
    activingTabIndex: 0,
    tabList: ["Screening", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    count: "你好",
    gcpDataList: [
      {
        examinationData: {
          researchUnitCode: undefined,
          ptdtTabName: "SCREENING",
          ptdeid: 1,
          ptdtCheckDate: "2023-04-11",
          ptdtWeight: 55,
          ptdtHeight: 173,
          ptdtDosage: "85 MBq",
          ptdtInjectionTime: "18:24",
          ptdtScanTime: "22:16",
          ptdtBloodglucose: "4.5",
          ptdtDjDoctor: "注射护士",
        },
        evaluationData: {
          mediastinumSuv: 10.1,
          liverSuv: 10.2,
          evidence: 1,
          lesionLocation: "简单的位置",
          lesionSuv: 10.3,
          // 这里有一个简单的交互
          iugano5ps: 3,
          lesionCompare: 6,
          isNewLesion: 0,
          isLesionConsistent: 0,
          // 这里有一个简单的交互
          comment: "placeHolder",
          basedPetScan: 4,
          assYirc: 1,
          assOverallResponse: 1,
        },
      },
    ],
    selectedGcpData: {
      examinationData: {
        researchUnitCode: undefined,
        ptdtTabName: "SCREENING",
        ptdeid: 1,
        ptdtCheckDate: "2023-04-11",
        ptdtWeight: 55,
        ptdtHeight: 173,
        ptdtDosage: "85 MBq",
        ptdtInjectionTime: "18:24",
        ptdtScanTime: "22:16",
        ptdtBloodglucose: "4.5",
        ptdtDjDoctor: "注射护士",
      },
      evaluationData: {
        mediastinumSuv: 10.1,
        liverSuv: 10.2,
        evidence: 1,
        lesionLocation: "简单的位置",
        lesionSuv: 10.3,
        // 这里有一个简单的交互
        iugano5ps: 1,
        lesionCompare: 1,
        isNewLesion: 0,
        isLesionConsistent: 0,
        // 这里有一个简单的交互
        comment: "placeHolder",
        basedPetScan: 1,
        assYirc: 1,
        assOverallResponse: 1,
      },
    },
  },
  methods: {
    changeTabs: function (indexOfClickedTab) {
      this.activingTabIndex = indexOfClickedTab;
    },
    doSomething: function () {
      alert(this.activingTabIndex);
    },
  },
});
