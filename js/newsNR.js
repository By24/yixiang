$(function () {
    var str = "";
    const url = window.location.href;
    const urlData = new GetUrlData(url);
    //console.log(urlData);
	const dataRow = urlData.rowIndex;
	//alert(dataRow);
	var picurl='http://120.26.136.41:8080/meeting';
    $.get("http://120.26.136.41:8080/meeting/api/newsdetail/id" , {
    	id:dataRow
    }).done(function (data) {
        console.log(data)
        str += `     
            <p class="tit">${data.newsTitle}</p>
            <div>
                <span>发布时间：${data.publishTime}</span>
                <span>发布人：${data.publishPeople}</span>
                <span>新闻来源：${data.newsSource}</span>
            </div>
            <div class="newsImg">             
	            <img src="${picurl+data.nd_img}" />
	        </div>
            <p>${data.nd_introContent}</p>
        `
        $(".box-con").html(str);
    })


    function GetUrlData(url) {
    	let key, val, num, res;
    	num = url.indexOf('?');

    	if(num != -1) {
    		res = url.substring(num + 1);

    		res = res.split('&');

    		for(let i = 0; i < res.length; i++) {
    			num = res[i].indexOf('=');

    			key = res[i].substring(0, num);

    			val = res[i].substring(num + 1);

    			this[key] = val

    		}
    	}
    }
})