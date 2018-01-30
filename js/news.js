$(function () {
    var str1 = "";
    var str2 = "";
    $.get("http://120.26.136.41:8080/meeting/api/news", {}).done(function (data) {

   
//		let bb = data.rows[0].nd_introContent
//       $("#newsGS").html(bb);	
		for (var i = 0; i < data.rows.length; i++) {
            str1 += `    
			<li data-id="${ data.rows[i].newsId}">
                 ${ data.rows[i].news_categoryTitle}
            </li>
			`		//左边分类新闻
			str2 += `    
			<li>
                 <a href="news.html">${ data.rows[i].news_categoryTitle}</a> 
            </li>
			`		  //底部新闻链接
       }
		
		data1(data.rows[1]);
	   
   		$(".news-name").html(str1);  //分类新闻
   		$(".new").html(str2); 		//底部新闻链接

        $(".news-name>li").click(function (e) {
            $(".news-name>li").removeClass("active");
            $(this).addClass("active");
            let aa = $(this).attr("data-id")
			for (var i = 0; i < data.rows.length; i++) {
				if(aa == data.rows[i].newsId){
					data1(data.rows[i])
				}										//右边详细新闻
	        }
            
        });
        //分页
        $("#page").paging({
            pageNo: 1,
            totalPage: 9,
            totalSize: 300,
            callback: function (num) {
                //console.log(num);
            }
        })
        var index = localStorage.newIndex,
            li = $('.news-name li'),
            mod = $('.mod-li');
        li.eq(index).addClass('active').siblings().removeClass('active');
        mod.children().eq(index).show().siblings().hide();

    })
	
})

function data1(data){
	console.log((data))
	var str = "";
	var url='http://120.26.136.41:8080/meeting';
    	for(var j=0;j<data.newsDetailDTOs.length;j++){
    		if(data.newsDetailDTOs[j].id != 0){
			str += `    
			<li>
	            <a href="newsNR.html?rowIndex=${ data.newsDetailDTOs[j].id}">
	                <div class="newsImg">             
	                    <img src="${url+data.newsDetailDTOs[j].nd_img}" />
	                </div>
	                <div class="neiRong">
	                    <p>${ data.newsDetailDTOs[j].newsTitle}</p>
	                    <div>${ data.newsDetailDTOs[j].nd_keyword }</div>
	                    <div class="newsCon">
	                        ${data.newsDetailDTOs[j].nd_webpageDesc }
	                    </div>
	                    <div class="time">
	                        <img src="../img/xing3.png" alt="xing3" />
	                        <p>${data.newsDetailDTOs[j].publishTime }</p>
	                    </div>
	                </div>
	            </a>
	        </li>
	  
		`												//右边显示详细新闻
		}
    		$("#newsGS").append(str);	
    		//window.location.reload();
    }
    
}

