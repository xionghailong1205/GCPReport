function extractNumberFromDateString(dateString) {
  const regex = /\d+/;
  const match = dateString.match(regex);

  return match ? parseInt(match[0]) : null;
}

// 示例用法
const dateString = "/Date(1653438486000)/";
const extractedNumber = extractNumberFromDateString(dateString);

function formatTimeHHmm(date) {
  // 获取小时，使用两位数表示，不足两位补0
  const hours = date.getHours().toString().padStart(2, "0");

  // 获取分钟，使用两位数表示，不足两位补0
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // 将小时和分钟拼接成 HHmm 格式的字符串
  return `${hours}${minutes}`;
}

const time = formatTimeHHmm(new Date(extractedNumber));

console.log(time);

// console.log(extractedNumber); // 输出：1653438486000
