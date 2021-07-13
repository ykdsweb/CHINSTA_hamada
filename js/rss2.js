$.ajax({
    //url:'http://aqwiki.net/rss/rss_list.txt',
    success: function(data){

         var rss_url = 'http://ykdeok.com/?feed=rss2';

         var htmlstr = "";
         var n = 1;

         $.get(rss_url, function(data) {
              $(data).find("item").each(function (i) { // or "entry"
                   var el = $(this);

                   var oddeven = ( i % 2 == 0 ) ? 'lieven' : 'liodd';
                   
                   //画像の取得
                   var imgsrc;
                   imgsrc = el.find("a img").attr("src");
                   if(!imgsrc) {
                       console.log("noimage");
                       imgsrc = 'src="./common/img/no_img.png"'
                   }
                   var elimg = el.find("enclosure").attr("url");
                   
                   //日付の取得
                   var pdate = new Date(el.find("pubDate").text()); //Dateクラス
                   var pyear = pdate.getFullYear();   //年
                   var pmonth = pdate.getMonth() + 1; //月
                   var pday = pdate.getDate();        //日
   
                   //日付を2桁表示に変更
                   if (pyear < 2000) pyear += 1900;
                   if (pmonth < 10) {pmonth = "0" + pmonth;}
                   if (pday < 10) {pday = "0" + pday;}
   
                   var date = pyear + "." + pmonth + "." + pday + " ";
                   
                   var img = "";
                   var div = $("<div></div>");
                   el.find("description").appendTo(div);
                   var pHtml = $.parseHTML($(div).text());
                   img = $(pHtml).find("img").get(0);
                   
                   
                   
                   
                   /*htmlstr += '<li class="topics__news__content clearfix">';
                   htmlstr += '<a href="' + el.find("link").text() + '">';
                   htmlstr += '<div class="wrapper_thumb_rela js_img_centering">';
                   htmlstr += '<div class="wrapper_thumb_ab">';
                   htmlstr += '<div class="wrapper_thumb_table">';
                   htmlstr += '<div class="wrapper_thumb_ta_cell">';
                   htmlstr += '<img src="' + $(img).attr("src") + '" class="img-responsive topics__news__img" style="overflow: hidden; width: 100%;" alt="売買物件">';
                   htmlstr += '</div></div></div></div>';
                   htmlstr += '<p class="h5 topics__news__date">' + date + '</p>';
                   htmlstr += '<p class="h5 topics__news__title">' + el.find("title").text() + '</p></a></li>';*/
                   
                   htmlstr += '<li class="post"><ul>';
                   htmlstr += '<li class="text_m">' + date + '</li>';
                   htmlstr += '<li><h3 class="h5"><a href="' + el.find("link").text() + '" target="_blank">' + el.find("title").text() + '</a></h3></li>';
                   htmlstr += '</ul></li>';

               /*var conte = '<li>' + entry.contentSnippet + '</li>';
               var Dates = new Date(entry.publishedDate);
               var Dday = Dates.getDate();
               var Dmonth = Dates.getMonth() + 1;
               var Dyear = Dates.getFullYear();
               var Ddates = '<li class="text_m">' + Dyear +'.'+ Dmonth +'.'+ Dday + '</li>';
               $('#feed').append('<li class="post"><ul>' + Ddates + title + '</ul></li>');*/
                   
                   n++;

              });

         /*htmlstr += '</ul>';
         htmlstr += '</div>';*/
         var container = document.getElementById("feed");
         container.innerHTML = htmlstr;

         });
    }
});