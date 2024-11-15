Vue.component("gcp_table", {
  data: function () {
    return {
      count: 0,
    };
  },
  template: `
    <form id="gcp_datas">
            <div class="gcp_table row">
              <div class="col-md-3 gcb_examination_table">
                <div class="examination_table_row">
                  <div>
                    <label for="research_Unit_Code">研究单位编号</label>
                  </div>
                  <div>
                    <input type="text" class="form-control-custom">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdeid">受试者编号</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdeid" value="xxxxxxxxxxxxxx">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdeid">访视名称</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdeid" value="Screening">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdeid">检查日期</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_sqdept" value="2024-11-08">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_weight">体重 (kg)</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_weight" value="86">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_height">身高 (cm)</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_height" value="180">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_dosage_and_unit">净注入核素的活性</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_dosage_and_unit" value="85 MBq">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_ReportDate2">FDG注射时间</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_ReportDate2" value="18:24">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_imageingTime">PET扫描开始时间</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_imageingTime" value="22:16">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_bloodglucose">血糖水平 (mmol/L)</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_bloodglucose" value="6.0">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_bloodglucose">空腹时长 （小时）</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_bloodglucose" value="> 6">
                  </div>
                </div>
                <div class="examination_table_row">
                  <div>
                    <label for="ptdt_djDoctor">记录人</label>
                  </div>
                  <div>
                    <input type="text" readonly class="form-control-plaintext" id="ptdt_djDoctor" value="赵本三">
                  </div>
                </div>
              </div>
              <div class="col-md">
                <div class="row row-cols-sm-auto">
                  <div class="col-12">
                    <label for="research_Unit_Code" class="col-form-label">纵隔血池 SUV=</label>
                  </div>
                  <div class="col-12 position-start-2" style="width: 10%">
                    <input type="text" class="form-control wl">
                  </div>
                  <div class="col-12">
                    <label for="ptdeid" class="col-form-label">肝脏 SUV=</label>
                  </div>
                  <div class="col-12 position-start-2" style="width: 10%">
                    <input type="text" class="form-control wl">
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">中存在 FDG 高摄取疾病的证据</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Negative</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">Positive</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Unknow</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">NE</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">代谢活性最强的病灶 （淋巴结和结外病灶）</label>
                  </div>
                  <div class="col-12">
                    <div class="row row-cols-sm-auto">
                      <div class="col-12">
                        <label for="ptdeid" class="col-form-label">具体位置：</label>
                      </div>
                      <div class="col-12 position-start-2" style="width: 48%">
                        <input type="text" class="end-0 form-control wl">
                      </div>
                      <div class="col-12">
                        <label for="ptdeid" class="col-form-label">SUV=</label>
                      </div>
                      <div class="col-12 position-start-2" style="width: 15%">
                        <input type="text" class="form-control wl">
                      </div>
                    </div>
                    <div class="row row-cols-sm-auto">
                      <div class="col-12">
                        <label for="ptdeid" class="col-form-label">Lugano 5分量表（数字从1-5分）</label>
                      </div>
                      <div class="col-12 col-form-label position-start-2">
                        <select class="form-select form-select-sm position-start-4 position-top-8"
                          aria-label=".form-select-sm example">
                          <option selected value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">2</option>
                          <option value="5">3</option>
                        </select>
                      </div>
                      <!-- <div class="col-12 position-start-2" style="width: 10%">
                      <input type="text" class="form-control wl">
                    </div> -->
                    </div>
                    <div class="row row-cols-sm-auto">
                      <div class="col-12">
                        <div class="col-sm">
                          <div class="col-sm col-form-label">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                              <label class="form-check-label" for="inlineCheckbox1">与基线相比摄取减少</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-sm-auto">
                      <div class="col-12">
                        <div class="col-sm">
                          <div class="col-sm col-form-label">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                              <label class="form-check-label" for="inlineCheckbox1">与基线相比摄取无显著变化</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row row-cols-sm-auto">
                      <div class="col-12">
                        <div class="col-sm">
                          <div class="col-sm col-form-label">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                              <label class="form-check-label" for="inlineCheckbox1">摄取量较目视测定的最低值增加</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">新的FDG显影病灶</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">No</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">FDG-avid 病灶是否与淋巴瘤一致，而不是其他原因，如感染或炎症？</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">No</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">NA</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">UNknow, Comment</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">缓解基于PET-CT扫描（采用Lugano 2014标准）</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">CMR</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">PMR</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">SMD</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">PMD</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">NE</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">ND</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">缓解基于PET-CT扫描（采用Lugano 2014标准）</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">CMR</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">PMR</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">SMD</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">PMD</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">NE</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">ND</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">根据LYRIC标准进行评估</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">IR1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">IR2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">IR1 and IR3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">IR2 and IR3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">IR3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">PD</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">NE</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">NA</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-sm-auto">
                  <div class="col-12" style="width:35%">
                    <label for="ptdeid" class="col-form-label">总体疗效评估</label>
                  </div>
                  <div class="col-12">
                    <div class="col-sm col-form-label">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">IR1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">IR2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">IR1 and IR3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">IR2 and IR3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">IR3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">PD</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">NE</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">NA</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
  `,
});

var app = new Vue({
  el: "#app",
  data: {
    message: "nihao",
    activingTabIndex: 0,
    tabList: ["Screening", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
  },
  methods: {
    changeTabs: function (indexOfClickedTab) {
      this.activingTabIndex = indexOfClickedTab;
    },
  },
});
