$(document).ready(function() {
	var value = window.location.href.split("?")[1];
	if(value == undefined) {
		alert("您没有输入任何内容！");
	}else{
		var test = value.indexOf("value=");
		if(test == -1) {
			alert("您没有输入任何内容！");
		} else {
			value = getCharFromUtf8(value);
			value = value.split("value=")[1];
			var index = ['服饰', '鞋靴', '箱包'];
			var searchObj = new Object();
			searchObj["服饰"] = ["裙装", "毛衫", "外套", "裤装", "婚纱礼服"];
			searchObj["鞋靴"] = ["单鞋", "帆布鞋", "靴子"];
			searchObj["箱包"] = ["包"];
			searchObj["裙装"] = ["连衣裙", "半身裙", "针织裙", "丝绒裙", "打底裙", "复古裙", "短裙", "修身裙"];
			searchObj["毛衫"] = ["针织衫", "毛衣", "高领毛衫", "打底衫", "长袖T恤"];
			searchObj["外套"] = ["短外套", "夹克", "西装", "皮衣", "牛仔外套"];
			searchObj["裤装"] = ["裤子", "休闲裤", "打底裤", "牛仔裤"];
			searchObj["婚纱礼服"] = ["礼服", "旗袍", "婚纱"];
			searchObj["单鞋"] = ["高跟鞋", "厚底鞋"];
			searchObj["帆布鞋"] = ["高帮鞋", "低帮鞋"];
			searchObj["靴子"] = ["裸靴", "短靴"];
			searchObj["包"] = ["单肩包", "手提包", "贝壳包", "真皮包", "迷你包"];
			var urlObj = new Object();
			urlObj["连衣裙"] = ["lianyiqun/lianyiqun1.jpg", "lianyiqun/lianyiqun2.jpg" ,"lianyiqun/lianyiqun3.jpg", "lianyiqun/lianyiqun4.jpg", "lianyiqun/lianyiqun5.jpg", "lianyiqun/lianyiqun6.jpg"];
			urlObj["半身裙"] = ["banshenqun/banshenqun1.jpg", "banshenqun/banshenqun2.jpg", "banshenqun/banshenqun3.jpg", "banshenqun/banshenqun4.jpg", "banshenqun/banshenqun5.jpg", "banshenqun/banshenqun6.jpg"];
			urlObj["针织裙"] = ["zhenzhiqun/zhenzhiqun1.jpg", "zhenzhiqun/zhenzhiqun2.jpg", "zhenzhiqun/zhenzhiqun3.jpg", "zhenzhiqun/zhenzhiqun4.jpg", "zhenzhiqun/zhenzhiqun5.jpg", "zhenzhiqun/zhenzhiqun6.jpg"];
			urlObj["丝绒裙"] = ["sirongqun/sirongqun1.jpg", "sirongqun/sirongqun2.jpg", "sirongqun/sirongqun3.jpg", "sirongqun/sirongqun4.jpg", "sirongqun/sirongqun5.jpg", "sirongqun/sirongqun6.jpg"];
			urlObj["打底裙"] = ["dadiqun/dadiqun1.jpg", "dadiqun/dadiqun2.jpg", "dadiqun/dadiqun3.jpg", "dadiqun/dadiqun4.jpg", "dadiqun/dadiqun5.jpg", "dadiqun/dadiqun6.jpg"];
			urlObj["复古裙"] = ["fuguqun/fuguqun1.jpg", "fuguqun/fuguqun2.jpg", "fuguqun/fuguqun3.jpg", "fuguqun/fuguqun4.jpg", "fuguqun/fuguqun5.jpg", "fuguqun/fuguqun6.jpg"];
			urlObj["短裙"] = ["duanqun/duanqun1.jpg", "duanqun/duanqun2.jpg", "duanqun/duanqun3.jpg", "duanqun/duanqun4.jpg", "duanqun/duanqun5.jpg", "duanqun/duanqun6.jpg"];
			urlObj["修身裙"] = ["xiushenqun/xiushenqun1.jpg", "xiushenqun/xiushenqun2.jpg", "xiushenqun/xiushenqun3.jpg", "xiushenqun/xiushenqun4.jpg", "xiushenqun/xiushenqun5.jpg", "xiushenqun/xiushenqun6.jpg"];
			urlObj["针织衫"] = ["maoshan/zhenzhishan/zhenzhishan1.jpg", "maoshan/zhenzhishan/zhenzhishan2.jpg", "maoshan/zhenzhishan/zhenzhishan3.jpg", "maoshan/zhenzhishan/zhenzhishan4.jpg", "maoshan/zhenzhishan/zhenzhishan5.jpg", "maoshan/zhenzhishan/zhenzhishan6.jpg"];
			urlObj["毛衣"] = ["maoshan/maoyi/maoyi1.jpg", "maoshan/maoyi/maoyi2.jpg", "maoshan/maoyi/maoyi3.jpg", "maoshan/maoyi/maoyi4.jpg", "maoshan/maoyi/maoyi5.jpg", "maoshan/maoyi/maoyi6.jpg"];
			urlObj["高领毛衫"] = ["maoshan/gaolingmaoshan/gaolingmaoshan1.jpg", "maoshan/gaolingmaoshan/gaolingmaoshan2.jpg", "maoshan/gaolingmaoshan/gaolingmaoshan3.jpg", "maoshan/gaolingmaoshan/gaolingmaoshan4.jpg", "maoshan/gaolingmaoshan/gaolingmaoshan5.jpg", "maoshan/gaolingmaoshan/gaolingmaoshan6.jpg"];
			urlObj["打底衫"] = ["maoshan/dadishan/dadishan1.jpg", "maoshan/dadishan/dadishan2.jpg", "maoshan/dadishan/dadishan3.jpg", "maoshan/dadishan/dadishan4.jpg", "maoshan/dadishan/dadishan5.jpg", "maoshan/dadishan/dadishan6.jpg"];
			urlObj["长袖T恤"] = ["maoshan/changxiutxv/changxiutxv1.jpg", "maoshan/changxiutxv/changxiutxv2.jpg", "maoshan/changxiutxv/changxiutxv3.jpg", "maoshan/changxiutxv/changxiutxv4.jpg", "maoshan/changxiutxv/changxiutxv5.jpg", "maoshan/changxiutxv/changxiutxv6.jpg"];
			urlObj["短外套"] = ["waitao/duanwaitao/duanwaitao1.jpg", "waitao/duanwaitao/duanwaitao2.jpg", "waitao/duanwaitao/duanwaitao3.jpg", "waitao/duanwaitao/duanwaitao4.jpg", "waitao/duanwaitao/duanwaitao5.jpg", "waitao/duanwaitao/duanwaitao6.jpg"];
			urlObj["夹克"] = ["waitao/jiake/jiake1.jpg", "waitao/jiake/jiake2.jpg", "waitao/jiake/jiake3.jpg", "waitao/jiake/jiake4.jpg", "waitao/jiake/jiake5.jpg", "waitao/jiake/jiake6.jpg"];
			urlObj["西装"] = ["waitao/xizhuang/xizhuang1.jpg", "waitao/xizhuang/xizhuang2.jpg", "waitao/xizhuang/xizhuang3.jpg", "waitao/xizhuang/xizhuang4.jpg", "waitao/xizhuang/xizhuang5.jpg", "waitao/xizhuang/xizhuang6.jpg"];
			urlObj["皮衣"] = ["waitao/piyi/piyi1.jpg", "waitao/piyi/piyi2.jpg", "waitao/piyi/piyi3.jpg", "waitao/piyi/piyi4.jpg", "waitao/piyi/piyi5.jpg", "waitao/piyi/piyi6.jpg"];
			urlObj["牛仔外套"] = ["waitao/niuzaiwaitao/niuzaiwainao1.jpg", "waitao/niuzaiwaitao/niuzaiwaitao2.jpg", "waitao/niuzaiwaitao/niuzaiwaitao3.jpg", "waitao/niuzaiwaitao/niuzaiwaitao4.jpg", "waitao/niuzaiwaitao/niuzaiwaitao5.jpg", "waitao/niuzaiwaitao/niuzaiwaitao6.jpg"];
			urlObj["裤子"] = ["kuzhuang/kuzi/kuzi1.jpg", "kuzhuang/kuzi/kuzi2.jpg", "kuzhuang/kuzi/kuzi3.jpg", "kuzhuang/kuzi/kuzi4.jpg", "kuzhuang/kuzi/kuzi5.jpg", "kuzhuang/kuzi/kuzi6.jpg"];
			urlObj["打底裤"] = ["kuzhuang/dadiku/dadiku1.jpg", "kuzhuang/dadiku/dadiku2.jpg", "kuzhuang/dadiku/dadiku3.jpg", "kuzhuang/dadiku/dadiku4.jpg", "kuzhuang/dadiku/dadiku5.jpg", "kuzhuang/dadiku/dadiku6.jpg"];
			urlObj["休闲裤"] = ["kuzhuang/xiuxianku/xiuxianku1.jpg", "kuzhuang/xiuxianku/xiuxianku2.jpg", "kuzhuang/xiuxianku/xiuxianku3.jpg", "kuzhuang/xiuxianku/xiuxianku4.jpg", "kuzhuang/xiuxianku/xiuxianku5.jpg", "kuzhuang/xiuxianku/xiuxianku6.jpg"];
			urlObj["牛仔裤"] = ["kuzhuang/niuzaiku/niuzaiku1.jpg", "kuzhuang/niuzaiku/niuzaiku2.jpg", "kuzhuang/niuzaiku/niuzaiku3.jpg", "kuzhuang/niuzaiku/niuzaiku4.jpg", "kuzhuang/niuzaiku/niuzaiku5.jpg", "kuzhuang/niuzaiku/niuzaiku6.jpg"];
			urlObj["礼服"] = ["hunshalifu/lifu/lifu1.jpg", "hunshalifu/lifu/lifu2.jpg", "hunshalifu/lifu/lifu3.jpg", "hunshalifu/lifu/lifu4.jpg", "hunshalifu/lifu/lifu5.jpg", "hunshalifu/lifu/lifu6.jpg"];
			urlObj["旗袍"] = ["hunshalifu/qipao/qipao1.jpg", "hunshalifu/qipao/qipao2.jpg", "hunshalifu/qipao/qipao3.jpg", "hunshalifu/qipao/qipao4.jpg", "hunshalifu/qipao/qipao5.jpg", "hunshalifu/qipao/qipao6.jpg"];
			urlObj["婚纱"] = ["hunshalifu/hunsha/hunsha1.jpg", "hunshalifu/hunsha/hunsha2.jpg", "hunshalifu/hunsha/hunsha3.jpg", "hunshalifu/hunsha/hunsha4.jpg", "hunshalifu/hunsha/hunsha5.jpg", "hunshalifu/hunsha/hunsha6.jpg"];
			urlObj["高跟鞋"] = ["danxie/gaogenxie/gaogenxie1.jpg", "danxie/gaogenxie/gaogenxie2.jpg", "danxie/gaogenxie/gaogenxie3.jpg", "danxie/gaogenxie/gaogenxie4.jpg", "danxie/gaogenxie/gaogenxie5.jpg", "danxie/gaogenxie/gaogenxie6.jpg"];
			urlObj["厚底鞋"] = ["danxie/houdixie/houdixie1.jpg", "danxie/houdixie/houdixie2.jpg", "danxie/houdixie/houdixie3.jpg", "danxie/houdixie/houdixie4.jpg", "danxie/houdixie/houdixie5.jpg", "danxie/houdixie/houdixie6.jpg"];
			urlObj["高帮鞋"] = ["fanbuxie/gaobangxie/gaobangxie1.jpg", "fanbuxie/gaobangxie/gaobangxie2.jpg", "fanbuxie/gaobangxie/gaobangxie3.jpg", "fanbuxie/gaobangxie/gaobangxie4.jpg", "fanbuxie/gaobangxie/gaobangxie5.jpg", "fanbuxie/gaobangxie/gaobangxie6.jpg"];
			urlObj["低帮鞋"] = ["fanbuxie/dibangxie/dibangxie1.jpg", "fanbuxie/dibangxie/dibangxie2.jpg", "fanbuxie/dibangxie/dibangxie3.jpg", "fanbuxie/dibangxie/dibangxie4.jpg", "fanbuxie/dibangxie/dibangxie5.jpg", "fanbuxie/dibangxie/dibangxie6.jpg"];
			urlObj["裸靴"] = ["xuezi/luoxue/luoxue1.jpg", "xuezi/luoxue/luoxue2.jpg", "xuezi/luoxue/luoxue3.jpg", "xuezi/luoxue/luoxue4.jpg", "xuezi/luoxue/luoxue5.jpg", "xuezi/luoxue/luoxue6.jpg"];
			urlObj["短靴"] = ["xuezi/duanxue/duanxue1.jpg", "xuezi/duanxue/duanxue2.jpg", "xuezi/duanxue/duanxue3.jpg", "xuezi/duanxue/duanxue4.jpg", "xuezi/duanxue/duanxue5.jpg", "xuezi/duanxue/duanxue6.jpg"];
			urlObj["单肩包"] = ["bao/danjianbao/danjianbao1.jpg", "bao/danjianbao/danjianbao2.jpg", "bao/danjianbao/danjianbao3.jpg", "bao/danjianbao/danjianbao4.jpg", "bao/danjianbao/danjianbao5.jpg", "bao/danjianbao/danjianbao6.jpg"];
			urlObj["手提包"] = ["bao/shoutibao/shoutibao1.jpg", "bao/shoutibao/shoutibao2.jpg", "bao/shoutibao/shoutibao3.jpg", "bao/shoutibao/shoutibao4.jpg", "bao/shoutibao/shoutibao5.jpg", "bao/shoutibao/shoutibao6.jpg"];
			urlObj["贝壳包"] = ["bao/beikebao/beikebao1.jpg", "bao/beikebao/beikebao2.jpg", "bao/beikebao/beikebao3.jpg", "bao/beikebao/beikebao4.jpg", "bao/beikebao/beikebao5.jpg", "bao/beikebao/beikebao6.jpg"];
			urlObj["真皮包"] = ["bao/zhenpibao/zhenpibao1.jpg", "bao/zhenpibao/zhenpibao2.jpg", "bao/zhenpibao/zhenpibao3.jpg", "bao/zhenpibao/zhenpibao4.jpg", "bao/zhenpibao/zhenpibao5.jpg", "bao/zhenpibao/zhenpibao6.jpg"];
			urlObj["迷你包"] = ["bao/minibao/minibao1.jpg", "bao/minibao/minibao2.jpg", "bao/minibao/minibao3.jpg", "bao/minibao/minibao4.jpg", "bao/minibao/minibao5.jpg", "bao/minibao/minibao6.jpg"];
			var result = [];
			var result1 = [];
			var lastResult = [];
			var valueArray = value.split("");

			for(var i = 0; i < index.length; i++) {
				if(value == index[i]) {
					result = [];
					result[result.length] = "success";
					result[result.length] = index[i];
					break;
				}
				for(var n = 0; n < valueArray.length; n++) {
					var searchOk = index[i].indexOf(valueArray[n]);
					if(searchOk != -1) {
						result[result.length] = index[i];
						break;
					}
				}
			}
			if(result.length == 0) {
				result[result.length] = "unSearch";
				for(var i = 0; i < index.length; i++) {
					result[result.length] = index[i];
				}
			}

			if(result[0] == "success") {
				var temp = result[1];
				var temp1 = searchObj[temp];
				for(var i = 0; i < temp1.length; i++) {
					var temp_str = temp1[i];
					var temp2 = searchObj[temp_str];
					for(var n = 0; n < temp2.length; n++) {
						lastResult[lastResult.length] = temp2[n];
					}
				}
			}

			if(lastResult.length == 0) {
				if(result[0] == "unSearch") {
					for(var i = 0; i < result.length; i++) {
						var temp = result[i];
						if(temp == "unSearch") {
							continue;
						}
						var tempObj = searchObj[temp];
						var isBreak = 0;
						for(var n = 0; n < tempObj.length; n++) {
							if(value == tempObj[n]) {
								result1 = [];
								result1[result1.length] = "success";
								result1[result1.length] = tempObj[n];
								isBreak = 1;
								break;
							}
							for(var m = 0; m < valueArray.length; m++) {
								var searchOk = tempObj[n].indexOf(valueArray[m]);
								if(searchOk != -1) {
									result1[result1.length] = tempObj[n];
									break;
								}
							}
						}
						if(isBreak == 1) {
							break;
						}
					}
				} else {
					for(var i = 0; i < result.length; i++) {
						var temp = result[i];
						if(temp == "unSearch") {
							continue;
						}
						var tempObj = searchObj[temp];
						var isBreak = 0;
						for(var n = 0; n < tempObj.length; n++) {
							if(value == tempObj[n]) {
								result1 = [];
								result1[result1.length] = "success";
								result1[result1.length] = tempObj[n];
								isBreak = 1;
								break;
							} else {
								result1[result1.length] = tempObj[n];
							}
							/*
							for(var m = 0; m < valueArray.length; m++) {
								var searchOk = tempObj[n].indexOf(valueArray[m]);
								if(searchOk != -1) {
									result1[result1.length] = tempObj[n];
									break;
								}
							}*/
						}
						if(isBreak == 1) {
							break;
						}
					}
				}
				
				if(result1.length == 0) {
					if(result[0] == "unSearch") {
						result1[result1.length] = "unSearch";
					}
					for(var i = 0; i < result.length; i++) {
						var temp = result[i];
						if(temp == "unSearch") {
							continue;
						}
						var tempObj = searchObj[temp];
						for(var n = 0; n < tempObj.length; n++) {
							result1[result1.length] = tempObj[n];
						}
					}
				}
			}
			
			if (lastResult.length == 0) {
				if(result1[0] == "success") {
					var temp = result1[1];
					var tempObj = searchObj[temp];
					lastResult = tempObj;
				} else {
					if(result1[0] == "unSearch") {
						for(var i = 0; i < result1.length; i++) {
							var temp = result1[i];
							if(temp == "unSearch") {
								continue;
							}
							var tempObj = searchObj[temp];
							var isBreak = 0;
							for(var n = 0; n < tempObj.length; n++) {
								if(value == tempObj[n]) {
									lastResult = [];
									lastResult[lastResult.length] = tempObj[n];
									isBreak = 1;
									break;
								}
								for(var m = 0; m < valueArray.length; m++) {
									var searchOk = tempObj[n].indexOf(valueArray[m]);
									if(searchOk != -1) {
										lastResult[lastResult.length] = tempObj[n];
										break;
									}
								}
							}
							if(isBreak == 1) {
								break;
							}
						}
					} else {
						for(var i = 0; i < result1.length; i++) {
							var temp = result1[i];
							if(temp == "unSearch") {
								continue;
							}
							var tempObj = searchObj[temp];
							var isBreak = 0;
							for(var n = 0; n < tempObj.length; n++) {
								if(value == tempObj[n]) {
									lastResult = [];
									lastResult[lastResult.length] = tempObj[n];
									isBreak = 1;
									break;
								} else {
									lastResult[lastResult.length] = tempObj[n];
								}
								/*
								for(var m = 0; m < valueArray.length; m++) {
									var searchOk = tempObj[n].indexOf(valueArray[m]);
									if(searchOk != -1) {
										lastResult[lastResult.length] = tempObj[n];
										break;
									}
								}*/
							}
							if(isBreak == 1) {
								break;
							}
						}
					}
					if(lastResult.length == 0) {
						if(result1[0] == "unSearch") {
							lastResult = [];
						} else {
							for(var i = 0; i < result1.length; i++) {
								var temp = result1[i];
								var tempObj = searchObj[temp];
								for(var n = 0; n < tempObj.length; n++) {
									lastResult[lastResult.length] = tempObj[n];
								}
							}
						}
					}
				}
			}

			if(lastResult.length == 0) {
				alert("对不起，没有搜索到您需要的商品！");
				window.location.href = "index.html";
			} else {
				var last_html = document.getElementById("shopmain").innerHTML;
				var str = "";
				for(var i = 0; i < lastResult.length; i++) {
					str += "<div class='am-container '>";
					str += "<div class='shopTitle '>";
					str += "<h4>";
					str += lastResult[i];
					str += "</h4>";
					str += "</div></div>";
					var temp = urlObj[lastResult[i]];
					if(temp.length == 0) {
						str += "<div class='am-g am-g-fixed floodOne '></div><div class='clear '></div>";
					} else {
						str += "<div class='am-g am-g-fixed floodOne '>";
						for(var n = 0; n < temp.length; n++) {
							str += "<div class='am-u-sm-5 am-u-md-3 am-u-lg-4 text-one '><a href='# '><div class='outer-con '><div class='title '>";
							str += lastResult[i];
							str += "</div></div>";
							str += "<img src='";
							str += temp[n];
							str += "'/>";
							str += "</a></div>";
						}
						str += "</div><div class='clear '></div>";
					}
				}
				document.getElementById("shopmain").innerHTML = str + last_html;
			}
		}
	}
});

//将URL中的UTF-8字符串转成中文字符串  
function getCharFromUtf8(str) {  
    var cstr = "";  
    var nOffset = 0;  
    if (str == "")  
        return "";  
    str = str.toLowerCase();  
    nOffset = str.indexOf("%e");  
    if (nOffset == -1)  
        return str;  
    while (nOffset != -1) {  
        cstr += str.substr(0, nOffset);  
        str = str.substr(nOffset, str.length - nOffset);  
        if (str == "" || str.length < 9)  
            return cstr;  
        cstr += utf8ToChar(str.substr(0, 9));  
        str = str.substr(9, str.length - 9);  
        nOffset = str.indexOf("%e");  
    }  
    return cstr + str;  
}  

//将编码转换成字符  
function utf8ToChar(str) {  
    var iCode, iCode1, iCode2;  
    iCode = parseInt("0x" + str.substr(1, 2));  
    iCode1 = parseInt("0x" + str.substr(4, 2));  
    iCode2 = parseInt("0x" + str.substr(7, 2));  
    return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));  
}  