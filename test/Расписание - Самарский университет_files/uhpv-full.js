var timg='',tf='',bd='',bd1='',bd2='',hmw='',ac=0,bbg=0,mf=15,al='',ab='',mpf='',lgs={};

	function uhpv(a){if(a){hsc('uha','a')}if(uhe&&hgc('uha')){if(hgc('uhf')){mf=hgc('uhf')}else{mf=fonts[0]}if(hgc('hpvbg')){bbg=hgc('hpvbg')}if(uhe!==1){mpf='fixed'}if(hwidth){hmw=hwidth+'px'}else{hmw='100%'};

	bd1='<div id="hpvgd" style="position:'+mpf+';"><div id="hpvdiv" class="h-mdiv" style="width:'+hmw+';"><div style="display:table-cell;" id="uhvv"><div id="fsd" class="h-ldiv">'+lg(lng,3)+' </div><div id="vimg" class="h-ldiv" style="display:none;"><span class="hswm"> | </span>'+lg(lng,4)+' </div><div id="vbg" class="h-ldiv" style="display:none;"><span class="hswm"> | </span>'+lg(lng,5)+' </div><div id="vch" class="h-rdiv" style="display:none;"><a href="javascript:uvcl()" class="uhpv-l" id="maf">'+lg(lng,6)+'</a></div></div></div></div><div id="h-f"></div>  <script type="text/javascript">$(window).load(function() {yaCounter22649012.reachGoal(\'sv_eye\')});</script>';

	if(uhe==1||uhe==2){bd=bd1}else if(uhe==3){bd=bd2}if(!$('#hpvdiv').text()){if($('#puzadpn').text()){$('#puzadpn').after(bd)}else{$('body').prepend(bd)}for(var nf=0;nf<fonts.length;nf++){if(fonts[nf]==mf){al=' h-al'}else{al=''};
	$('#fsd').append('<a href="javascript://" onclick="uHPV('+fonts[nf]+',this)" id="maf" style="font-size:'+fonts[nf]+'px !important;" class="uhpv-a'+al+'">'+lg(lng,7)+'</a> ');
	if(nf==fonts.length-1) $('#hpvdiv').show()}if(imgs){if(hgc('hpvi')){timm=lg(lng,1);
	$('img:visible').addClass('h-ni')}else{timm=lg(lng,2)}timg='<a href="javascript://" onclick="uHPI()" class="uhpv-l hvit" id="maf">'+timm+'</a>';$('#vimg').append(timg);
	$('#vimg').show()}if(bg){if(bgs.length){for(var nb=0;nb<bgs.length;nb++){if(bgs[nb]==bbg){ab=' h-ab'}else{ab=''};tf+='<a href="javascript://" onclick="uHPB('+bgs[nb]+',this)" class="h-background-'+bgs[nb]+' h-fi'+ab+'" id="maf">'+lg(lng,7)+'</a>';}tf+='<a href="javascript://" onclick="uHPB(0,this)" id="maf" class="hcmaf">'+lg(lng,8)+'</a>';$('#vbg').append(tf);$('#vbg').show()}}if(!a){$('#vch').show()}}if(hwidth<1200){mhw=1200}else{mhw=$('#hpvdiv').width()}if($(window).width()<mhw){$('.h-ldiv,.h-rdiv').css({'float':'none','text-align':'left','position':'static','padding-left':'5px'});$('.hswm').hide()};
$('body,table,div,tr,td,ul,li,a[id!=maf],p').css({'fontSize':mf+'px'}).addClass('sv');
$('.h-mdiv,.h-ldiv,.h-rdiv,.h-fdiv,.uhpv-l,.hswm').css('fontSize',fonts[fonts.length-1]+'px');
setTimeout(function(){$('.admBarCenter>div').attr({'style':'font-size:11px;'});
	if(bbg&&bbg>0){
			$('body,table,div[id!=hpvdiv][id!=fsd][id!=vimg][id!=vbg][id!=hpvgd][id!=uhvv][id!=vch],tr,td,ul,li,span[class!=hswm],a[id!=maf],p,b').addClass('h-background-'+bbg);
			$('#puzadpn .h-background-'+bbg).removeClass('h-background-'+bbg)}
				if(!hwidth){$('#fsd').css('padding-left','15px');
				$('#vch').css('padding-right','15px')}},1);
				if(uhe==2){$('#h-f').height($('#hpvdiv').height())}if(uhe==3){$('#hpvgd2').css('top',(($(window).height()-Number(200))/2)+'px')}}else{$('#uhvb').show()}}function uvcl(){if(hgc('uha')){hdc('uha');
				window.location.reload()}else{hsc('uha','a');
				$('#uhvb').hide();
				uhpv(has)}}function lg(c,n){return lgs[c][n]}function uHPV(f,t){hsc("uhf",f);$('.uhpv-a').removeClass('h-al');
				$(t).addClass('h-al');uhpv(has)}function uHPI(){if(hgc('hpvi')){hdc('hpvi');
				$('.h-ni').removeClass('h-ni');
				$('.hvit').text(lg(lng,2))}else{hsc('hpvi','v');
				$('img:visible').addClass('h-ni');
				$('.hvit').text(lg(lng,1))}}function uHPB(n,t){$('.h-ab').removeClass('h-ab');
				$(t).addClass('h-ab');
				if(hgc('hpvbg')){b=hgc('hpvbg')}else{b=0}if(n==0){hsc('hpvbg',0);
				$('.h-background-'+b+'[id!=maf]').removeClass('h-background-'+b)}else{hsc('hpvbg',n);
				if(b){$('.h-background-'+b+'[id!=maf]').removeClass('h-background-'+b)};
				$('body,table,div[id!=hpvdiv][id!=fsd][id!=vimg][id!=vbg][id!=vch][id!=hpvgd][id!=uhvv],tr,td,ul,li,span[class!=hswm],a[id!=maf],p,b').addClass('h-background-'+n);setTimeout(function(){$('#puzadpn .h-background-'+n).removeClass('h-background-'+n)},1)}}function hsc(name,value){document.cookie=name+"="+escape(value)+";expires=Mon,01-Jan-2020 00:00:00 GMT;path=/"}function hgc(fcm){var results=document.cookie.match('(^|;) ?'+fcm+'=([^;]*)(;|$)');
				if(results){return (unescape(results[2]))}else{return null}}function hdc(fcm){var cookie_date=new Date();cookie_date.setTime(cookie_date.getTime()-1);document.cookie=fcm+="=;expires="+cookie_date.toGMTString()+";path=/"};$(window).resize(function(){uhpv(has)});
lgs['ru']={1:'показать',2:'отключить',3:'Размер шрифтов:',4:'Изображения:',5:'Фон:',6:'Выключить',7:'A',8:'X'};
lgs['en']={1:'show',2:'disable',3:'Font Size:',4:'Images:',5:'Background:',6:'Switch off',7:'A',8:'X'};
lgs['ua']={1:'показати',2:'відключити',3:'Розмір шрифтів:',4:'Зображення:',5:'Фон:',6:'Вимкнути',7:'A',8:'X'}