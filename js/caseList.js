$(function () {
    var str = "";
    $.get("http://120.26.136.41:8080/meeting/casedetails", {}).done(function (data) {

        console.log(data.rows)

        const url = window.location.href;
        const urlData = new GetUrlData(url)
        const dataRow = data.rows[urlData.rowIndex]


        /*  str += `     
             <p class="tit">${dataRow.news.news_webpageTitle}</p>
             <div>
                 <span>发布时间：${dataRow.publishTime}</span>
                 <span>发布人：${dataRow.publishPeople}</span>
                 <span>新闻来源：${dataRow.newsSource}</span>
             </div>
             
             <p>${dataRow.news.news_categoryIntro}</p>
         `
         */
        str += `     
        <div class="title">
            <h3>案例展示</h3>
        </div>
        <p>
            <a href="../index.html">首页 </a>
            >
            <a href="anli.html"> 案例展示 </a>
            >
            <a href="">${ data.rows[0].case1.case_webpageTitle}</a>
        </p>
        <div class="box-con">
            <p>${ data.rows[0].case1.case_webpageTitle}</p>
            <div>
            ${ data.rows[0].case1.case_categoryIntro}
            </div>
        </div>
        `
        $("#caseBox").html(str);
    })


    function GetUrlData(url) {
        let key, val, num, res;
        num = url.indexOf('?');

        if (num != -1) {
            res = url.substring(num + 1);

            res = res.split('&');

            for (let i = 0; i < res.length; i++) {
                num = res[i].indexOf('=');

                key = res[i].substring(0, num);

                val = res[i].substring(num + 1);

                this[key] = val

            }
        }
    }
})