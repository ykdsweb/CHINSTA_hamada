/*==================================================
 * 全体共通化
 *================================================*/

$(function(){

	/*head,header,footer読み込み共通化*/

	if ($('body').hasClass('detail')) {
		$.ajax({
			type: 'GET',
			url: "../../head.html",
			dataType: 'html',
			success: function(data){
				$('head').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
		$.ajax({
			type: 'GET',
			url: "../../header.html",
			dataType: 'html',
			success: function(data){
				$('header').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
		$.ajax({
			type: 'GET',
			url: "../../footer.html",
			dataType: 'html',
			success: function(data){
				$('footer').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
	}else if($('body').hasClass('special') || $('body').hasClass('school') )  {
		$.ajax({
			type: 'GET',
			url: "../head.html",
			dataType: 'html',
			success: function(data){
				$('head').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
		$.ajax({
			type: 'GET',
			url: "../header.html",
			dataType: 'html',
			success: function(data){
				$('header').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
		$.ajax({
			type: 'GET',
			url: "../footer.html",
			dataType: 'html',
			success: function(data){
				$('footer').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
	}else{
		$.ajax({
			type: 'GET',
			url: "head.html",
			dataType: 'html',
			success: function(data){
				$('head').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
		$.ajax({
			type: 'GET',
			url: "header.html",
			dataType: 'html',
			success: function(data){
				$('header').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
		$.ajax({
			type: 'GET',
			url: "footer.html",
			dataType: 'html',
			success: function(data){
				$('footer').prepend(data);
			},
			error:function() {
				alert('問題がありました。');
			}
		});
	}



	if($("meta[name=description]").length){
		setTimeout(function(){
			var des = $("meta[name=description]").attr("content");
			rep_des = des.replace("倉敷・総社の不動産、アパート、マンションを探すなら【賃貸ステーション】へ！倉敷・水島・児島・玉島・岡山・総社・真備等、倉敷市を中心とした賃貸マンション・アパートなどのお部屋探しから土地・中古住宅・新築一戸建・マンション等の住宅まで幅広く取り扱っています。" , "倉敷の賃貸物件なら【賃貸ステーション】へ！倉敷・水島・児島・玉島・岡山・総社・真備等、倉敷市を中心とした賃貸物件(マンション・アパート・一戸建てなど)のお部屋探しはお任せ下さい。");
			$("meta[name=description]").attr("content" , rep_des);
			
		},5000);
	}



	//alert("地図から探す");

	$('#sidebar').prepend('<div class="map_banner_list"><a href="/map.html" target="_blank"><img class="img-responsive js_root" src="./img/map_banner_list.jpg" alt="地図から探す"></a></div>');



	setTimeout(function(){

		//begore_footerをトップだけ消す
		if($('body').hasClass('top') ){
			$('.before_footer').css('display','none');
		}


		/*URLの変更化*/
		var url = window.location.hostname;
		//k-bcのテスト環境の場合
		if (url.match('2do3')){
			host = "http://2do3.co.jp/kurashikisilk/demo/chinsta/" ;
			//ホームurlを挿入
			$('a.js_root').each(function(){
				var root_url =$(this).attr("href");
				root_url = host + root_url;
				$(this).attr("href",root_url);
				
			});
			$('img.js_root').each(function() {
				var url = $(this).attr("src");
				var alt_url = host + url;
				$(this).attr("src",alt_url);
			});
		}else{
			host = "http://www.chinsta.jp/" ;
			//ホームurlを挿入
			$('a.js_root').each(function(){
				var root_url =$(this).attr("href");
				root_url = host + root_url;
				$(this).attr("href",root_url);
				
			});
			$('img.js_root').each(function() {
				var url = $(this).attr("src");
				var alt_url = host + url;
				$(this).attr("src",alt_url);
			});
		}

	},2000);



	/*タイトル共通化*/
	/*
	document.title = 'New title';
	*/



	/*物件詳細へのリンクは全てtarget=_blankで*/

    setTimeout(function(){
		$('a').each(function() {
			var $href = $(this).attr('href');
			if($href){
				/*if ($href.match(/es/)){
					$(this).attr('target','_blank');
				} else */ if($href.match(/secure.es-ws.jp/)) {
					$(this).attr('onclick',"ga('send','event','contact','tap_contact');");
				} else if($href.match('tel')) {
					$(this).attr('onclick',"ga('send','event','tel','tap_tel');");
				}
			}
		});
	},20000);

});



/*==================================================
 * ヘッダー
 *================================================*/

$(function(){

	//ヘッダードロップダウンメニュー hoverで出るように
	/*メニューバウンス*/
	/*ヘッダー固定*/
	/*今見ているページのメニューの色が変わる*/
	/*トップへ戻るボタン*/

    setTimeout(function(){
		var w = $(window).width();
		var x = 768;
		var $toggle = $('li.dropdown');
		var $toggle_down = $('ul.dropdown-menu');

		if(w > x) {
			/*
			$('.navbar-nav li a').hover(function(){
				if( !$(this).hasClass('bounce animated') ) {
					$(this).addClass('bounce animated');
					//thisを変数化して渡す
					var self = this ;
					setTimeout(function(){
						console.log($(self) ) ;
						$(self).removeClass('bounce animated');
					},1000);
				}
			});
			*/

			$(window).scroll(function () {
				//if($(window).scrollTop() > offset.top) {
				if($(window).scrollTop() > 60) {
					$('nav').addClass('js_nav_fixed');
					$('.logo').addClass('js_logo_fixed');
					$('.header_tel').addClass('js_tel_fixed');
					$('.header_absolute , .header_logo_overtext').addClass('js_nav_none');
					$('.js_header_alt').css('height','186px');
				}else{
					$('nav').removeClass('js_nav_fixed');
					$('.logo').removeClass('js_logo_fixed');
					$('.header_tel').removeClass('js_tel_fixed');
					$('.header_absolute , .header_logo_overtext').removeClass('js_nav_none');
					$('.js_header_alt').css('height','auto');
				}
			});

			$toggle.hover(function(){
				$toggle_down.stop();
				$toggle_down.slideToggle('fast');
			}, function(){
				$toggle_down.stop();
				$toggle_down.slideToggle('fast');
			});
		} else {
			$('nav').addClass('js_nav_fixed');
			$('.logo').addClass('js_logo_fixed');
			$('.header_tel').addClass('js_tel_fixed');
			$('.header_absolute , .header_logo_overtext').addClass('js_nav_none');
			$('.js_header_alt').css('height','75px');

			$toggle.click(function(){
				$toggle_down.stop();
				$toggle_down.slideToggle('fast');
			}, function(){
				$toggle_down.stop();
				$toggle_down.slideToggle('fast');
			});
		}

		var body_class = $('body').attr('class');
		$('.navbar-nav > li').each(function(){
			var nav_link = $(this).attr('class');
			if ( nav_link && nav_link.match(body_class)) {
				if ( $('body').attr('class') ) {
					$(this).addClass('active');
				}
			}
		});

		var topBtn = $('.js_top_scroll');
		topBtn.hide();
		//スクロールが100に達したらボタン表示
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
		//スクロールしてトップ
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
				}, 500);
			return false;
		});

	},2000);

});



/*==================================================
 * トップページ
 *================================================*/

$(function(){

	/*トップページ　SP用マップの代わりテキスト スライドトグル*/

	$('.set_map_text .title').click(function(){
		var $parent = $(this).parent();
		$($parent).find('ul').slideToggle();
	});



	/*クリッカブルマップ色変える*/

	$('.wrapper_map a').hover(function(){
		var span = $(this).find('span');
		$(span).addClass('wrapper_map_hover');
	},function(){
		var span = $(this).find('span');
		$(span).removeClass('wrapper_map_hover');
	});



	/*スライドショー*/

	var slideCurrent = 0;
	var w_wrapper = $('.wrapper_slider').find('img').outerWidth();
	var h_wrapper = $('.wrapper_slider').find('img').outerHeight();
	var slideWidth = $('.slide_slider').outerWidth();
	var w = $(window).width();
	var slideNum = $('.slide_slider').length;
	var slideSetWidth = slideWidth * slideNum;
	var x = 768;

	$(window).on("load resize", function(){
		w_wrapper = $('.wrapper_slider').find('img').outerWidth();
		h_wrapper = $('.wrapper_slider').find('img').outerHeight();
		$('.slide_slider').css('width', w_wrapper);
		$('.slide_slider').css('height', h_wrapper);
		
		slideWidth = $('.slide_slider').outerWidth(); // .slideの幅を取得して代入
		w = $(window).width();
		slideNum = $('.slide_slider').length;  // .slideの数を取得して代入
		
		if (w < x) {//PCサイズの場合
			slideNum-- ; 
		}
		slideSetWidth = slideWidth * slideNum; // .slideの幅×数で求めた値を代入
		$('.set_slider').css('width', slideSetWidth); // .slideSetのスタイルシートにwidth: slideSetWidthを指定

		slideCurrent = 0; // 現在地を示す変数
	});



	// アニメーションを実行する独自関数

	var sliding = function(){
		// slideCurrentが0未満だったら
		if( slideCurrent < 0 ){
			slideCurrent = slideNum - 1;	
			//current = 1
		// slideCurrentがslideNumを超えたら
		}else if( slideCurrent > slideNum - 1){ // slideCUrrent >= slideNumでも可
			// 0 > 1
			slideCurrent = 0;
			//current = 0
		}
		$('.set_slider').animate({
			left: slideCurrent * -slideWidth
		},500);
		var currentNum = slideCurrent + 1;
		var activeSlider = '#slider' + currentNum ;
		/*$('.slider_slider').has(activeSlider).addClass('active');*/
	}//sliding 定義ここまで

	// 次へボタンが押されたとき
	$('.button_slider_next').click(function(){
		if (w > x) {
			slideCurrent++;
			sliding();
		}else{
			$('.wrapper_map_text').slideToggle();
			$(this).toggleClass('sp_active');
		}
	});

});



/*==================================================
 * 店舗紹介
 *================================================*/

$(function(){

	/*店舗紹介 スライドトグル*/

	$('.wrapper_shop_detail_shop_title').click(function(){
		var $parent = $(this).parent();
		$($parent).find('.wrapper_shop_detail_shop_content').slideToggle();
	});



	setTimeout(function(){

		/*ショップ名タイトル動き*/
		var w = $(window).width();
		var x = 768;
		if (w > x) {
			$('.wrapper_shop_detail_shop_title').hover(function(){
				$(this).parent().addClass('pulse animated');
			},function(){
				$(this).parent().removeClass('pulse animated');
			});
		}

		/*スタッフ紹介ページ入力 及び、アニメーション*/
		$('.wrapper_shop_detail_staff_facelist_img div.thumb').on({
			"click":function(){
				setTimeout(function(){
					$('.wrapper_shop_detail_staff').removeClass('flipInY animated');
				},1500);
				var staff_id = $(this).attr('rel');
				//スタッフ名前
				var staff_name = $("#" + staff_id + " .name").text();
				var insert_wrapper = $(this).parents('.wrapper_shop_detail_shop');
				var insert_name = $(insert_wrapper).find('.wrapper_shop_detail_staff');
				$(insert_name).addClass('flipInY animated');
				//挿入側の名前
				var insert_name = $(insert_wrapper).find('.name');
				$(insert_name).text(staff_name);

				var staff_role = $("#" + staff_id + " .role").text();
				var insert_role = $(insert_wrapper).find('.role');
				$(insert_role).text(staff_role);

				var staff_kana = $("#" + staff_id + " .kana").text();
				var insert_kana = $(insert_wrapper).find('.kana');
				$(insert_kana).text(staff_kana);

				var staff_type = $("#" + staff_id + " .type").text();
				var insert_type = $(insert_wrapper).find('.type');
				$(insert_type).text(staff_type);

				var staff_img = $("#" + staff_id + " img").attr('src');
				var insert_img = $(insert_wrapper).find('.img');
				$(insert_img).attr('src',staff_img);

				var staff_capa = $("#" + staff_id + " .capa").text();
				var insert_capa = $(insert_wrapper).find('.capa');
				$(insert_capa).text(staff_capa);

				var staff_from = $("#" + staff_id + " .from").text();
				var insert_from = $(insert_wrapper).find('.from');
				$(insert_from).text(staff_from);

				var staff_spot = $("#" + staff_id + " .spot").text();
				var insert_spot = $(insert_wrapper).find('.spot');
				$(insert_spot).text(staff_spot);
			}
		});
	},2000);

	/*ショップ名アイコン透過させず*/

	$('.wrapper_shop_detail_shop_title').hover(function(){
		$(this).find('.icon_shop_detail').css('opacity',1);
	});

});



/*==================================================
 * 物件一覧、詳細ページ
 *================================================*/

$(function(){

	/*bxスライダー数字番号振る*/

	var i = 0;
	$('#bx-pager > a').each(function() {
		$(this).attr('data-slide-index',  i );
		i++;
	});



	/*物件詳細ページの画像を天地中央揃えの方法*/

	$(window).on("load resize", function(){
		$(".js_img_centering").find("img").each(function(){
			var h = $(this).height();
			var w = $(this).width();
			var h_parent = $(this).parents(".js_img_centering").outerHeight();
			var w_parent = $(this).parents(".js_img_centering").outerWidth();
			//縦横比率の計算
			var ratio = w * 0.75 ;
			//縦長の場合
			if ( h >= ratio ) {
				$(this).css("height" ,h_parent);
				$(this).css("width","auto");
			//横長の場合
			}else{
				$(this).css("height","auto");
				$(this).css("width","100%");
				
			}
		});
	});



	/*画像クリック時に、ポップアップで表示*/

	$('.js_popup_img').click(function(){
		var src = $(this).attr('src');
		$(this).attr('href',src);
		$(this).attr('data-featherlight',"image");
	});



	$('.bx-viewport').css("height",300);



	/*物件一覧、詳細ページ　万円消す*/
	/*
	$('.price').find('span').each(function(){
		var txt = $(this).text();
		$(this).text(
			$(txt).replace(/万円/g,"")
		);
	});
	*/



	/*サイドバー エリア スライドトグル*/

	$('.sidebar_search_area .title_sidebar').click(function(){
		var $parent = $(this).parent();
		$($parent).find('.wrapper_inner_search').slideToggle();
	});



	$('.wrapper_title_sidebar').each(function(){
		$(this).click(function(){
			$(this).find("img").toggle();
		});
	});



	/*サイドバー エリア条件など、親タグ スライドトグル*/

	$('.wrapper_title_sidebar').click(function(){
		var $parent = $(this).parent();
		$($parent).find('.wrapper_content_sidebar').slideToggle();
	});



	$('#js_toggle_student_pare').click(function(){
		$('#js_toggle_student_chil').slideToggle();
	});



	// $('aside.sidebar_search_area').before('<script type="text/javascript" src="http://www.chinsta.jp/js/gsearch.js"></script>');



	var url = location.href;
	$("title").after('<link rel="canonical" href="' + url + '" />');



	setTimeout(function(){

		// タイトルと同じものをh1タグに挿入
		var title_txt = $("title").text();
		var data = title_txt.split("|");
		// console.log(title_txt + ":" + data[0]);
		$("h1").each(function(){
			$(this).text(data[0]);
		});

		$(".wrapper_article .title.h4 br").remove();

	},5000);

	/*
	var head = $('head');
	var headChildren = head.children();
	var childrenLength = headChildren.length;
	for(var i = 0;i < childrenLength;i++){
		var metaName = headChildren.eq(i).attr('name');
		if(metaName === 'description'){
			headChildren.eq(i).attr('content','取得成功');
			console.log(headChildren.eq(i).attr('content'));
		}
	}
	*/

});



//20210209追加 「閉じる」ボタンを押すと消える追尾バナーのjs
$(function() {

	/* 追尾バナーを指定オブジェクト直下に挿入 */

	// 配置先オブジェクトのセレクタ
	// ※任意で変更してください
	//var selector = "#selector";
	var selector = "body";


	// 挿入箇所 ／ 0:先頭 (prepend）or 1:末尾（append）
	// ※任意で変更してください
	var position = 1;


	// 追尾バナーのHTMLソース
	var closeButton__htmlSource = '<div class="closeBanner">'
								+ '<div class="pc">'
								+ '<div class="flex">'
								+ '<div class="mail_pc"><a href="https://secure.es-ws.jp/inquiry.html?domain=www.chinsta.jp"><img src="/img/renew_PC_li_00.jpg" width="100" height="auto"></a></div>'
								+ '<div class="tel_pc"><a href="tel:086-441-8181"><img src="/img/renew_PC_li_01.jpg" width="100"></a></div>'
								+ '</div>'
								+ '<div class="under"><img src="/img/renew_PC_li_02.jpg" width="200"></div>'
								+ '</div>'
								+ '<div class="sp">'
								+ '<a href="https://secure.es-ws.jp/inquiry.html?domain=www.chinsta.jp"><img src="/img/renew_closeBannerSP_01.jpg" alt="" /></a>'
								+ '</div>'
								+ '</div>';

	// HTMLソースをjQueryオブジェクト化
	var topBtn = $(closeButton__htmlSource);

	var closeButtonClicked = false;

	// 指定セレクタでオブジェクト抽出可であれば処理
	if($(selector).length) {

		// 追尾バナーを指定オブジェクト内に挿入
		if(position == 1) {
			topBtn.appendTo(selector);
		} else {
			topBtn.prependTo(selector);
		}

		topBtn.hide();

		//スクロールが300に達したらバナー表示
		$(window).scroll(function () {
			if (closeButtonClicked) return; // クリックされていたら以下を実行しない。
			if ($(this).scrollTop() > 500) {
				//バナーの表示方法
				topBtn.fadeIn();
			} else {
				//バナーの非表示方法
				topBtn.fadeOut();
			}
		});

		// 閉じるボタン
		topBtn.click(function () {
			$(this).css("display","none");
			closeButtonClicked = true;
		});

	}

});