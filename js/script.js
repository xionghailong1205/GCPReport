$(".tabgroup > div").hide();
$(".tabgroup > div:first-of-type").show();
$(".tabs li").click(function (e) {
  e.preventDefault();

  // alert("代码执行");

  // const $this = $(this);
  // con  tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
  // others = $this.closest("li").siblings().children("a"),

  // 移除别的标签上的 className
  $(".tabs a").removeClass("active");
  $(this).find("a").addClass("active");
  // $(this).$("a").addClass("active");
  // console.log($(".tabs a"));

  // others.removeClass("active");

  //   target = $this.attr("href");
  // $this.addClass("active");
  // $(tabgroup).children("div").hide();
  // $(target).show();
});

// 我们这里有个对象去保存信息
