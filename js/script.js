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

// 需要构造的数据
const test = [
  {
    examinationData: {
      researchUnitCode: undefined,
      ptdtTabName: "SCREENING",
      ptdeid: 2,
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
      isEditing: false,
      mediastinumSuv: 10.1,
      liverSuv: 10.2,
      evidence: 2,
      lesionLocation: "简单的位置",
      lesionSuv: 10.3,
      // 这里有一个简单的交互
      iugano5ps: 4,
      lesionCompare: 2,
      isNewLesion: 0,
      isLesionConsistent: 0,
      // 这里有一个简单的交互
      comment: "placeHolder",
      basedPetScan: 4,
      assYirc: 2,
      assOverallResponse: 4,
    },
  },
  {
    examinationData: {
      researchUnitCode: undefined,
      ptdtTabName: "WEEK 1",
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
    evaluationData: undefined,
  },
  {
    examinationData: {
      researchUnitCode: undefined,
      ptdtTabName: "WEEK 2",
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
      isEditing: false,
      mediastinumSuv: 10.1,
      liverSuv: 10.2,
      evidence: 1,
      lesionLocation: "week 2",
      lesionSuv: 10.3,
      // 这里有一个简单的交互
      iugano5ps: 3,
      lesionCompare: 6,
      isNewLesion: 0,
      isLesionConsistent: 0,
      // 这里有一个简单的交互
      comment: "placeHolder",
      basedPetScan: 4,
      assYirc: 2,
      assOverallResponse: 2,
    },
  },
];

const constructHHMMTime = (string) => {
  function extractNumberFromDateString(dateString) {
    const regex = /\d+/;
    const match = dateString.match(regex);

    return match ? parseInt(match[0]) : null;
  }

  function formatTimeHHmm(date) {
    // 获取小时，使用两位数表示，不足两位补0
    const hours = date.getHours().toString().padStart(2, "0");

    // 获取分钟，使用两位数表示，不足两位补0
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // 将小时和分钟拼接成 HHmm 格式的字符串
    return `${hours}:${minutes}`;
  }

  const extractedNumber = extractNumberFromDateString(string);

  const result = formatTimeHHmm(new Date(extractedNumber));

  return result;
};

const emptyEvaluationTableData = {
  isEditing: true,
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

const getPtdtTabName = (index) => {
  if (index === 0) {
    return "SCREENING";
  } else {
    return `WEEK ${index}`;
  }
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
    activingTabIndex2: 0,
    count: "你好",
    gcpDataList: [],
  },
  created: async function () {
    const netWorkService = new NetWorkService(1);
    const result = await netWorkService.fetchData();

    const ptdetailList = result.ptdetailList;
    const iymphomaList = result.iymphomaList;

    // 我们在这里进行构造
    const initData = ptdetailList.map((ptDetail, index) => {
      const relatedIymphoma = iymphomaList.find((iymphoma) => {
        return ptDetail.ptdeid === iymphoma.fk_tab_ptdetail;
      });

      if (relatedIymphoma) {
        return {
          examinationData: {
            researchUnitCode: relatedIymphoma.research_unit_code,
            ptdtTabName: getPtdtTabName(index),
            ptdeid: ptDetail.ptdeid,
            ptdtCheckDate: ptDetail.ptdt_checkDate,
            ptdtWeight: ptDetail.ptdt_weight,
            ptdtHeight: ptDetail.ptdt_height,
            ptdtDosage: `${ptDetail.ptdt_dosage} ${ptDetail.ptdt_dosageunit}`,
            ptdtInjectionTime: constructHHMMTime(ptDetail.ptdt_ReportDate2),
            ptdtScanTime: constructHHMMTime(ptDetail.ptdt_ReportDate2),
            ptdtBloodglucose: ptDetail.ptdt_bloodglucose,
            ptdtDjDoctor: ptDetail.ptdt_djDoctor,
          },
          evaluationData: {
            isEditing: false,
            mediastinumSuv: relatedIymphoma.mediastinum_suv,
            liverSuv: relatedIymphoma.liver_suv,
            evidence: relatedIymphoma.evidence,
            lesionLocation: relatedIymphoma.lesion_location,
            lesionSuv: relatedIymphoma.lesion_suv,
            // 这里有一个简单的交互
            iugano5ps: relatedIymphoma.iugano_5ps,
            lesionCompare: relatedIymphoma.lesion_compare,
            isNewLesion: relatedIymphoma.is_new_lesion,
            isLesionConsistent: relatedIymphoma.is_lesion_consistent,
            // 这里有一个简单的交互
            comment: relatedIymphoma.comment,
            basedPetScan: relatedIymphoma.based_pet_scan,
            assYirc: relatedIymphoma.ass_yirc,
            assOverallResponse: relatedIymphoma.ass_overall_response,
          },
        };
      } else {
        return {
          examinationData: {
            researchUnitCode: undefined,
            ptdtTabName: getPtdtTabName(index),
            ptdeid: ptDetail.ptdeid,
            ptdtCheckDate: ptDetail.ptdt_checkDate,
            ptdtWeight: ptDetail.ptdt_weight,
            ptdtHeight: ptDetail.ptdt_height,
            ptdtDosage: `${ptDetail.ptdt_dosage} ${ptDetail.ptdt_dosageunit}`,
            ptdtInjectionTime: constructHHMMTime(ptDetail.ptdt_ReportDate2),
            ptdtScanTime: constructHHMMTime(ptDetail.ptdt_ReportDate2),
            ptdtBloodglucose: ptDetail.ptdt_bloodglucose,
            ptdtDjDoctor: ptDetail.ptdt_djDoctor,
          },
          evaluationData: undefined,
        };
      }
    });

    console.log(initData);

    this.gcpDataList = initData;
  },
  computed: {
    tagList: function () {
      return this.gcpDataList.map((gcpData) => {
        const hasEvaluated = gcpData.evaluationData ? true : false;
        // 之后继续添加逻辑

        return {
          ptdtTabName: gcpData.examinationData.ptdtTabName,
          hasEvaluated,
        };
      });
    },
  },
  methods: {
    changeTabs: function (indexOfClickedTab) {
      this.activingTabIndex = indexOfClickedTab;
    },
    changeTabs2: function (indexOfClickedTab) {
      this.activingTabIndex2 = indexOfClickedTab;
    },
    createEvaluation: function () {
      this.gcpDataList[this.activingTabIndex].evaluationData =
        emptyEvaluationTableData;
    },
    createEvaluation2: function () {
      this.gcpDataList[this.activingTabIndex2].evaluationData =
        emptyEvaluationTableData;
    },
  },
});
