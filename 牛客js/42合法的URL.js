// 协议部分http(s)://		 表示为((https|http|ftp|rtsp|mms)?:\/\/)
// 主机名可以使用"-"符号，所以两种情况都要判断，包含"-"或不包含"-"					 //  表示为(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+
// 顶级域名 如：com cn等为2-6位   表示为([a-zA-Z]{2,6})
// 端口部分 如：8080			表示为(:\d+)?, ?表示0次或1次
// 请求路径 如: /home		表示为 (\/.*)?
// 传参及哈希值 如: ?name=a   表示为 (\?.*)?和(#.*)?
// 结束符 $
let reg = /^((https|http)?:\/\/)(([A-Za-z0-9]+)\.)+([A-Za-z]{2,6})(:\d+)?(\/.*)?(\?.*)?(#.*)?$/
const _isUrl = url => {
  return reg.test(url)
}
