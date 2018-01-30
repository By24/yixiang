$(function () {
    var str1 = "";
    $.get("http://120.26.136.41:8080/meeting/api/cases", {}).done(function (data) {

    console.log(data.rows);

       for (var i = 0; i < data.rows.length; i++) {
            str1 += `    
            
			<li data-id="${ data.rows[i].caseId}">
                 <a href="javascript:;" class="active">${ data.rows[i].case_categoryTitle}
                 <span></span>
                 </a>
            </li>
			`		//左边分类新闻
			
        }
       //$(".banner-nav").html(str1);
    })
    
    
    
    $(".banner-nav>li>a").click(function (e) {
            $(".banner-nav>li").removeClass("active");
            $(this).addClass("active");
            alert(11);
            let aa = $(this).attr("data-id")
			for (var i = 0; i < data.rows.length; i++) {
				if(aa == data.rows[i].caseId){
					data1(data.rows[i])
				}										//分类案例标题显示
	        }
            
        });
})

function data1(data){
	console.log((data))
	var str = "";
	var url='http://120.26.136.41:8080/meeting';
    	for(var j=0;j<data.caseDetailDTOs.length;j++){
    		if(data.caseDetailDTOs[j].id != 0){
				str += `    
	            <li>
	                <a href="caseCX.html?rowIndex=${ data.caseDetailDTOs[j].id}">
	                    <dt>
	                        <img src="${url+data.caseDetailDTOs[j].case_categoryImg}" alt="${data.caseDetailDTOs[j].cd_listImg}" />
	                    </dt>
	                    <dd>
	                        <p class="foot-name">${ data.caseDetailDTOs[j].projectTitle}</p>
	                        <div class="foot-text">
	                            <p>${ data.caseDetailDTOs[j].cd_webpageDesc}</p>
	                        </div>
	                    </dd>
	                </a>
	            </li>
				`										//显示详细案例
		}
    		
    }
    $("#anList").html(str);	
}
