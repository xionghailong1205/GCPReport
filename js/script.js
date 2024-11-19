const mockData = {
  ptdetailList: [
    {
      ptdeid: 2,
      ptdt_checkDate: "2022-05-25",
      ptdt_weight: 62,
      ptdt_height: 155,
      ptdt_dosage: "5.95",
      ptdt_dosageunit: "mCi",
      ptdt_ReportDate2: "/Date(1653438486000)/",
      ptdt_imageingTime: "/Date(1653441126000)/",
      ptdt_bloodglucose: "/",
      ptdt_djDoctor: "",
      Id: null,
    },
    {
      ptdeid: 3,
      ptdt_checkDate: "2022-07-20",
      ptdt_weight: 45.5,
      ptdt_height: 155,
      ptdt_dosage: "5.55",
      ptdt_dosageunit: "mCi",
      ptdt_ReportDate2: "/Date(1658288287000)/",
      ptdt_imageingTime: "/Date(1658290869000)/",
      ptdt_bloodglucose: "小孩免检",
      ptdt_djDoctor: "",
      Id: null,
    },
    {
      ptdeid: 1,
      ptdt_checkDate: "2023-04-11",
      ptdt_weight: 55,
      ptdt_height: 173,
      ptdt_dosage: "9.8",
      ptdt_dosageunit: "mCi",
      ptdt_ReportDate2: "/Date(1719537300000)/",
      ptdt_imageingTime: "/Date(1567647532000)/",
      ptdt_bloodglucose: "  4.5",
      ptdt_djDoctor: "注射护士",
      Id: null,
    },
  ],
  iymphomaList: [
    {
      pk_gcp_iymphoma: "GCP123456",
      research_unit_code: "ZZYY333",
      fk_tab_ptdetail: 2,
      mediastinum_suv: 2.1,
      liver_suv: 2.6,
      evidence: 2,
      lesion_location: "耳廓的周围",
      lesion_suv: 2,
      iugano_5ps: 4,
      lesion_compare: 1,
      is_new_lesion: 0,
      is_lesion_consistent: 4,
      comment: "因为其他部位的肿瘤所造成的。",
      based_pet_scan: 2,
      ass_yirc: 3,
      ass_overall_response: 4,
      op_code: "2912",
      op_name: "张三",
      ass_date: "/Date(1731600000000)/",
      Id: null,
    },
    {
      pk_gcp_iymphoma: "GCP234567",
      research_unit_code: "ZZYY444",
      fk_tab_ptdetail: 1,
      mediastinum_suv: 1.8,
      liver_suv: 2.4,
      evidence: 3,
      lesion_location: "颈部和锁骨",
      lesion_suv: 2.2,
      iugano_5ps: 2,
      lesion_compare: 1,
      is_new_lesion: 1,
      is_lesion_consistent: 3,
      comment: "主要和自身基因缺陷,免疫力异常,电力辐射的接触,感染等有关。",
      based_pet_scan: 3,
      ass_yirc: 2,
      ass_overall_response: 3,
      op_code: "2129",
      op_name: "李四",
      ass_date: "/Date(1731600000000)/",
      Id: null,
    },
  ],
};

const emptyEvaluationTableData = {
  isEditing: false,
  mediastinumSuv: "",
  liverSuv: "",
  evidence: 0,
  lesionLocation: "",
  lesionSuv: "",
  // 这里有一个简单的交互
  iugano5ps: 0,
  lesionCompare: 0,
  isNewLesion: 3,
  isLesionConsistent: 5,
  // 这里有一个简单的交互
  comment: "",
  basedPetScan: 0,
  assYirc: 0,
  assOverallResponse: 0,
};

// 之后可以导入 module 目前还不需要

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

class NetWorkService {
  ptdeid;

  // 创建 网络帮手类
  constructor(ptdeid) {
    this.ptdeid = ptdeid;
  }

  async fetchData() {
    // let headersList = {
    //   Accept: "*/*",
    // };

    // let response = await fetch(
    //   "http://localhost:42818/Home/GetPtDetailList?ptdeid=1",
    //   {
    //     method: "GET",
    //     headers: headersList,
    //   }
    // );

    const mockFetch = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, 1000);
    });

    let data = await mockFetch;
    return data;
  }
}

var app = new Vue({
  el: "#app",
  data: {
    activingTabIndex: 0,
    count: "你好",
    gcpDataList: [],
  },
  created: async function () {
    const netWorkService = new NetWorkService(1);
    const result = await netWorkService.fetchData();
    console.log(result);
  },
  computed: {
    tagList: function () {
      return this.gcpDataList.map((gcpData) => {
        const hasEvaluated = gcpData.evaluationData ? true : false;
        // 之后继续添加逻辑

        return {
          ptdtTabName: gcpData.examinationData.ptdtTabName,
        };
      });
    },
  },
  methods: {
    changeTabs: function (indexOfClickedTab) {
      this.activingTabIndex = indexOfClickedTab;
    },
    doSomething: function () {
      // alert(this.activingTabIndex);

      this.gcpDataList[this.activingTabIndex].evaluationData =
        emptyEvaluationTableData;
    },
  },
});
