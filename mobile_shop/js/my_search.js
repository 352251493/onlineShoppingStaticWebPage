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
			value = value.toLowerCase();
			var index = ['手机'];
			var searchObj = new Object();
			searchObj["手机"] = ["智能手机", "老年机"];
			searchObj["智能手机"] = ["iphone/苹果", "SAMSUNG/三星", "HUAWEI/华为", "MI/小米", "OPPO", "vivo"];
			searchObj["老年机"] = ["诺基亚", "中兴"];
			var urlObj = new Object();
			urlObj["iphone/苹果"] = ["zhinengshouji/iphone/iphone1.jpg", "zhinengshouji/iphone/iphone2.jpg" ,"zhinengshouji/iphone/iphone3.jpg", "zhinengshouji/iphone/iphone4.jpg", "zhinengshouji/iphone/iphone5.jpg", "zhinengshouji/iphone/iphone6.jpg"];
			urlObj["SAMSUNG/三星"] = ["zhinengshouji/samsug/samsug1.jpg", "zhinengshouji/samsug/samsug2.jpg", "zhinengshouji/samsug/samsug3.jpg", "zhinengshouji/samsug/samsug4.jpg", "zhinengshouji/samsug/samsug5.jpg", "zhinengshouji/samsug/samsug6.jpg"];
			urlObj["HUAWEI/华为"] = ["zhinengshouji/huawei/huawei1.jpg", "zhinengshouji/huawei/huawei2.jpg", "zhinengshouji/huawei/huawei3.jpg", "zhinengshouji/huawei/huawei4.jpg", "zhinengshouji/huawei/huawei5.jpg", "zhinengshouji/huawei/huawei6.jpg"];
			urlObj["MI/小米"] = ["zhinengshouji/mi/mi1.jpg", "zhinengshouji/mi/mi2.jpg", "zhinengshouji/mi/mi3.jpg", "zhinengshouji/mi/mi4.jpg", "zhinengshouji/mi/mi5.jpg", "zhinengshouji/mi/mi6.jpg"];
			urlObj["OPPO"] = ["zhinengshouji/oppo/oppo1.jpg", "zhinengshouji/oppo/oppo2.jpg", "zhinengshouji/oppo/oppo3.jpg", "zhinengshouji/oppo/oppo4.jpg", "zhinengshouji/oppo/oppo5.jpg", "zhinengshouji/oppo/oppo6.jpg"];
			urlObj["vivo"] = ["zhinengshouji/vivo/vivo1.jpg", "zhinengshouji/vivo/vivo2.jpg", "zhinengshouji/vivo/vivo3.jpg", "zhinengshouji/vivo/vivo4.jpg", "zhinengshouji/vivo/vivo5.jpg", "zhinengshouji/vivo/vivo6.jpg"];
			urlObj["诺基亚"] = ["laonianzhuanqu/nuojiya/nuojiya1.jpg", "laonianzhuanqu/nuojiya/nuojiya2.jpg", "laonianzhuanqu/nuojiya/nuojiya3.jpg", "laonianzhuanqu/nuojiya/nuojiya4.jpg", "laonianzhuanqu/nuojiya/nuojiya5.jpg", "laonianzhuanqu/nuojiya/nuojiya6.jpg"];
			urlObj["中兴"] = ["laonianzhuanqu/zhongxing/zhongxing1.jpg", "laonianzhuanqu/zhongxing/zhongxing2.jpg", "laonianzhuanqu/zhongxing/zhongxing3.jpg", "laonianzhuanqu/zhongxing/zhongxing4.jpg", "laonianzhuanqu/zhongxing/zhongxing5.jpg", "laonianzhuanqu/zhongxing/zhongxing6.jpg"];
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
								if(value == tempObj[n].toLowerCase()) {
									lastResult = [];
									lastResult[lastResult.length] = tempObj[n];
									isBreak = 1;
									break;
								} else {
									if(tempObj[n].indexOf("/") != -1) {
										if(tempObj[n].split("/")[0].toLowerCase() == value) {
											lastResult = [];
											lastResult[lastResult.length] = tempObj[n];
											isBreak = 1;
											break;
										} else {
											if(tempObj[n].split("/")[1] == value) {
												lastResult = [];
												lastResult[lastResult.length] = tempObj[n];
												isBreak = 1;
												break;
											}
										}
									}
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
								if(value == tempObj[n].toLowerCase()) {
									lastResult = [];
									lastResult[lastResult.length] = tempObj[n];
									isBreak = 1;
									break;
								} else {
									if(tempObj[n].indexOf("/") != -1) {
										if(tempObj[n].split("/")[0].toLowerCase() == value) {
											lastResult = [];
											lastResult[lastResult.length] = tempObj[n];
											isBreak = 1;
											break;
										} else {
											if(tempObj[n].split("/")[1] == value) {
												lastResult = [];
												lastResult[lastResult.length] = tempObj[n];
												isBreak = 1;
												break;
											}
										}
									} else {
										lastResult[lastResult.length] = tempObj[n];
									}
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
				//var last_html = document.getElementById("shopmain").innerHTML;
				var str = "";
				for(var i = 0; i < lastResult.length; i++) {
					var temp = urlObj[lastResult[i]];
					if(temp.length != 0) {
						for(var n = 0; n < temp.length; n++) {
							str += "<div class='col-lg-4 col-md-4 col-xs-12'><div class='product'><div class='image'><a href='#'>";
							str += "<img src='" + temp[n] + "' /></a></div>";
							str += "<div class='buttons'><a class='btn cart' href='#'><span class='glyphicon glyphicon-shopping-cart'></span></a>";
							str += "<a class='btn wishlist' href='#'><span class='glyphicon glyphicon-heart'></span></a>";
							str += "<a class='btn compare' href='#'><span class='glyphicon glyphicon-transfer'></span></a></div><div class='caption'><div class='name'><h3><a href='#'>";
							str += lastResult[i];
							str += "</a></h3></div></div></div></div>";
						}
					}
				}
				document.getElementById("shopmain").innerHTML = str;
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