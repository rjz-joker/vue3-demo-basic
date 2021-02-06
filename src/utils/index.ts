// 获取地址栏参数
export function AddressParameter(name: string) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 两数相加
export function Add(firstNumber: number, secondeNumber: number): number {
  return firstNumber + secondeNumber
}

// 两数相差绝对值
export function DelABS(firstNumber: number, secondeNumber: number): number {
  return Math.abs(firstNumber - secondeNumber)
}

// 获取cookie
export function getCookie(cookie_name: string): string {
  var allcookies = document.cookie;
  //索引长度，开始索引的位置
  var cookie_pos = allcookies.indexOf(cookie_name);
  var value = ''
  // 如果找到了索引，就代表cookie存在,否则不存在
  if (cookie_pos != -1) {
    // 把cookie_pos放在值的开始，只要给值加1即可
    //计算取cookie值得开始索引，加的1为“=”
    cookie_pos = cookie_pos + cookie_name.length + 1;
    //计算取cookie值得结束索引
    var cookie_end = allcookies.indexOf(";", cookie_pos);
    if (cookie_end == -1) {
      cookie_end = allcookies.length;
    }
    //得到想要的cookie的值
    value = unescape(allcookies.substring(cookie_pos, cookie_end));
  }
  return value;
}

// 设置cookie
export function setCookie(name: string, value: string): void {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); // 默认时间 24小时
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
}

// 删除cookie
export function delCookie(name: string): void {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}

// 数组去重
export function unique(arr: []) {
  if (!Array.isArray(arr)) {
    return;
  }
  arr = arr.sort()
  var arrry = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arrry.push(arr[i]);
    }
  }
  return arrry;
}

// 返回终端类型
export function template(): string {
  if (isAndroid()) {
    return 'android'
  }
  else if (isIOS()) {
    return 'ios'
  } else {
    return 'other'
  }
}
// 判断是否是android终端
export function isAndroid() {
  let ua = navigator.userAgent;
  return ua.indexOf("Android") > 0;
}

// 判断是否是ios终端
export function isIOS() {
  let ua = navigator.userAgent;
  return /(iPhone|iPad|iPod)/i.test(ua);
}

// 返回当前时间 以及前几天
export function getRangeDate(range: number, type?: string) {

  const formatDate = (time: any) => {
    // 格式化日期，获取今天的日期
    const Dates = new Date(time);
    const year: number = Dates.getFullYear();
    const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    return year + '-' + month + '-' + day;
  };

  const now = formatDate(new Date().getTime()); // 当前时间
  const resultArr: Array<any> = [];
  let changeDate: string;
  if (range) {
    if (type) {
      if (type === 'one') {
        changeDate = formatDate(new Date().getTime() + (1000 * 3600 * 24 * range));
        console.log(changeDate);
      }
      if (type === 'more') {
        if (range < 0) {
          for (let i = Math.abs(range); i >= 0; i--) {
            resultArr.push(formatDate(new Date().getTime() + (-1000 * 3600 * 24 * i)));
            console.log(resultArr);
          }
        } else {
          for (let i = 1; i <= range; i++) {
            resultArr.push(formatDate(new Date().getTime() + (1000 * 3600 * 24 * i)));
            console.log(resultArr);
          }
        }

      }
    } else {
      changeDate = formatDate(new Date().getTime() + (1000 * 3600 * 24 * range));
      console.log(changeDate);
    }
  }
}

// 返回时间格式 年-月-日
export const dateFormatter = nows => {
  if (!nows) return ""
  var now = new Date(nows)
  var year = now.getFullYear()

  var month = now.getMonth() + 1
  month = checkAddZone(month)
  var date = now.getDate()
  date = checkAddZone(date)
  return year + "-" + month + "-" + date
}

// 判断月份是否是11 12 
function checkAddZone(num: number) {
  return num < 10 ? "0" + num.toString() : num
}

// 返回时间格式 月日 时分
export function dateTimeFormatter(t, type) {
  if (!t) return ""
  t = new Date(t).getTime()
  t = new Date(t)
  // var year = t.getFullYear()
  var month = t.getMonth() + 1
  // month = checkAddZone(month)

  var date = t.getDate()
  // date = checkAddZone(date)

  var hour = t.getHours()
  hour = checkAddZone(hour)

  var min = t.getMinutes()
  min = checkAddZone(min)

  // var se = t.getSeconds()
  // se = checkAddZone(se)
  if (!type) {
    return month + "月" + date + "日" + hour + ":" + min
  }
  if (type == "m-d") {
    return month + "月" + date + "日"
  }
  if (type == "h-m") {
    return hour + ":" + min
  }
}

// 返回时间格式  年月日 时分秒
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  // console.log((time+'').length)
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}"
  let date
  if (typeof time === "object") {
    date = time
  } else {
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1]
    if (result.length > 0 && value < 10) {
      value = "0" + value
    }
    return value || 0
  })
  return time_str
}

// 深度复制参数
export function deepClone(data: any) {
  var type: string = typeof data
  var obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object' && data != null) {
    obj = {}
  } else {
    // 不再具有下一层次
    return data
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key])
    }
  }
  return obj
}

export function getMousePosition(event) {
  var posX = 0, posY = 0;
  var event = event || window.event;
  if (event.pageX || event.pageY) {
    posX = event.pageX;
    posY = event.pageY;
  } else if (event.clientX || event.clientY) {
    posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
    posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
  }
  return [posX, posY]
}










