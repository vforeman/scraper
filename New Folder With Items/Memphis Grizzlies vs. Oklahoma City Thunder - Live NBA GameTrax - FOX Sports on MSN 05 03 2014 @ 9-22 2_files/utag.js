//tealium universal tag - utag.loader ut4.0.201405012136, Copyright 2014 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("utag_env_foxsports_main=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){ul(RegExp.$1);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/foxsports/main/prod/';}}})();}catch(e){};try{utag_ntptQueue=[];if(typeof ntptEventTag=="undefined"){ntptEventTag=function(a){utag_ntptQueue.push({evt:"event",param1:a});}}
if(typeof ntptSubmitTag=="undefined"){ntptSubmitTag=function(a,b){utag_ntptQueue.push({evt:"submit",param1:a,param2:b});}}
if(typeof ntptLinkTag=="undefined"){ntptLinkTag=function(a,b){utag_ntptQueue.push({evt:"link",param1:a,param2:b});}}}catch(e){};if(typeof utag=="undefined"&&!utag_condload){var utag={id:"foxsports.main",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],ft:0,rf:0,ri:0,rp:0,rq:[],lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d){utag.DB('WQ:'+utag.loader.wq.length);c=true;try{utag.loader.GET()}catch(e){};var lq=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load>0&&b.send){c=false;utag.send[b.id]=b;}
if(b.load!=0&&b.load!=4){lq.push(b);this.f[b.id]=0;}}
if(c){d=false;for(b in utag.loader.GV(utag.send))d=true;if(c&&d)this.LOAD('WAIT_FORCE');}
this.wq=[];for(a=0;a<lq.length;a++){utag.DB('utag.loader.WAIT: loading '+lq[a].id);utag.loader.AS(lq[a])}
if(lq.length==0)utag.handler.INIT();},AS:function(a,b,c,d){utag.sender[a.id]=a;if(typeof a.src=='undefined'){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'utag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+utag.cfg.v;utag.rpt['l_'+a.id]=a.src;b=document;if(a.load==2){b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')}else if(a.load==1||a.load==3){if(b.createElement){c='utag_foxsports.main_'+a.id;if(!b.getElementById(c)){if(a.load==3){d=b.createElement('iframe');d.setAttribute('height','1');d.setAttribute('width','1');d.setAttribute('style','display:none');d.setAttribute('src',a.src);d.id=c;b.getElementsByTagName('head')[0].appendChild(d)}else{utag.ut.libloader(a.src,c,utag.loader.cfg[a.id].loc);}}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},RD:function(o,a,b,c,d,e,f,g){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){if(a[b].name&&a[b].name!="")o["meta."+a[b].name.toLowerCase()]=a[b].content.toLowerCase();}
a=location.search.toLowerCase();if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");o["qp."+c[0]]=utag.ut.decode(c[1])}}
a=(new Date()).getTime();b=utag.loader.RC();c=a+parseInt(utag.cfg.session_timeout);d=a+(Math.ceil(Math.random()*1000000));if((b.utag_main&&(typeof b.utag_main._st=="undefined"||(typeof b.utag_main._st!="undefined"&&parseInt(b.utag_main._st)<a)))||!b.utag_main){if(b.utag_main){b.utag_main._st=c;b.utag_main.ses_id=d;}else{b.utag_main={_st:c,ses_id:d}}
utag.loader.SC("utag_main",{"_st":c,"ses_id":d+";exp-session"});}else{utag.loader.SC("utag_main",{"_st":c})}
for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
o["dom.referrer"]=eval("document."+"referrer");o["dom.title"]=""+document.title;o["dom.domain"]=""+location.hostname;o["dom.query_string"]=""+(location.search).substring(1);o["dom.url"]=""+document.URL;o["dom.pathname"]=""+location.pathname;},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];for(c=0;c<b.length;c++){if(b[c].match(/^(.*?)=(.*)$/)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"&&(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0)){e=e.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){};}
o[ck]={};e=(new Date()).getTime();for(f in utag.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);if(k>e)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(/^(.*);exp-(.*)$/)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:e-1):parseInt(RegExp.$2);j[f]=(k<e)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";x="Thu, 31 Dec 2099 00:00:00 GMT";if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=(new Date()).getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push(g+":"+encodeURIComponent(d[g]))};if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){utag.DB('utag.loader.LOAD:add sender-'+a);this.f[a]=1;if(utag.loader.wq.length>0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0)return};utag.DB('CLEAR FORCE');clearTimeout(utag.loader.ft);utag.handler.INIT()}},EV:function(a,b,c,d){if(b=="ready"){if(document.readyState==="complete")setTimeout(c,1);else{if(typeof utag.loader.ready_q=="undefined"){utag.loader.ready_q=[];utag.loader.run_ready_q=function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){};}}}
utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){try{console.log(a)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]));}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')));}},view:function(a,c){return this.track('view',a,c);},link:function(a,c){return this.track('link',a,c);},track:function(a,b,c){for(var i in utag.loader.GV(utag.o)){try{utag.o[i].handler.trigger(a,b)}catch(e){};}
if(c)try{c()}catch(e){};return true;},handler:{base:"dom.domain",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){this.iflag=1;utag.DB('utag.handler.INIT');a=utag.loader.q.length;if(a>0){for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b)}}
if(utag.cfg.noview!=true)utag.handler.trigger('view',utag.data);},test:function(){return 1},trigger:function(a,b,c,d){utag.DB('trigger:'+a);b=b||{};if(!this.iflag){utag.loader.q.push({a:a,b:b});return;}
for(c in utag.loader.GV(this.df)){if(typeof this.df[c]!="function"&&typeof b[c]=="undefined")b[c]=this.df[c]}
utag.DB('All Tags EXTENSIONS');if(typeof this.extend!="undefined"){for(c=0;c<this.extend.length;c++){try{this.extend[c](a,b);utag.rpt['ex_'+c]=0}catch(e){utag.rpt['ex_'+c]=1;utag.ut.error({e:e.message,s:utag.cfg.path+'utag.js',l:c,t:'ge'});}}}
for(c in utag.loader.GV(utag.send)){if(typeof utag.sender[c]!="undefined"){try{utag.sender[c].send(a,utag.handler.C(b));utag.rpt['s_'+c]=0}catch(e){utag.rpt['s_'+c]=1};utag.rpt.ts['s']=new Date();for(var r in utag.loader.GV(utag.cond)){if(utag.cond[r])utag.rpt['r_'+r]=1;}
utag.RP(utag.rpt);}}
c=this.base.split(",");for(d=0;d<c.length;d++){if(typeof b[c[d]]!="undefined")this.df[c[d]]=b[c[d]]};for(d in utag.loader.GV(b)){if(d.indexOf('dom.')==0)this.df[d]=b[d]};this.o=b;},C:function(a,b,c,d){b={};for(c in utag.loader.GV(a)){if(typeof a[c]!="function")b[c]=a[c]}
return b}},ut:{decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){};if(b==""){b=unescape(a)};return b;},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}
c='';for(b in a){c+=b+':'+a[b]+" , "};utag.DB(c);},libloader:function(src,id,h,l,a,b,c){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(id){b.id=id};if(typeof h=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;h()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;h()}}}else{l=l||h;}
l=l||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+src)}}}};utag.o['foxsports.main']=utag;utag.cfg={v:"ut4.008.201405012136",session_timeout:1800000,readywait:0,noload:0,forcetimeout:3000,domain:utag.loader.lh(),path:"//tags.tiqcdn.com/utag/foxsports/main/prod/",utid:"foxsports/main/201405012136"};try{var _gaq=_gaq||[];var pageTracker=pageTracker||{_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={11:0,9:0,2:0,12:0,4:0,10:0,5:0};utag.pagevars=function(){try{utag.data['js_page.social_media']=social_media}catch(e){};try{utag.data['js_page.content']=content}catch(e){};try{utag.data['js_page.link_text']=link_text}catch(e){};};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(){try{utag.cond[11]|=(utag.data['dom.domain']=='msn.foxsports.com'&&utag.data['dom.pathname']=='/')||(utag.data['dom.domain']=='qa1.foxsports.com'&&utag.data['dom.pathname']=='/')||(utag.data['dom.domain']=='stg1.foxsports.com'&&utag.data['dom.pathname']=='/')}catch(e){};try{utag.cond[9]|=(utag.data['dom.referrer'].toString().indexOf('msn.com')>-1)}catch(e){};try{utag.cond[12]|=(utag.data['dom.domain']=='msn.foxsports.com'&&utag.data['dom.pathname']!='/')||(utag.data['dom.domain']=='qa1.foxsports.com'&&utag.data['dom.pathname']!='/')||(utag.data['dom.domain']=='stg1.foxsports.com'&&utag.data['dom.pathname']!='/')}catch(e){};try{utag.cond[2]|=(utag.data['dom.url'].toString().indexOf('/fse')<0)}catch(e){};try{utag.cond[4]|=(utag.data['dom.url'].toString().indexOf('/fse')<0)}catch(e){};try{utag.cond[10]|=(utag.data['dom.pathname'].toString().indexOf('/video')>-1)||(utag.data['dom.pathname'].toString().indexOf('/list')>-1)||(utag.data['dom.pathname'].toString().indexOf('/story')>-1)||(utag.data['dom.pathname'].toString().indexOf('/gallery')>-1)||(utag.data['dom.pathname'].toString().indexOf('/gametrax')>-1)||(utag.data['dom.pathname'].toString().indexOf('/scores')>-1)||(utag.data['dom.pathname'].toString().indexOf('/boxscore')>-1)||(utag.data['dom.pathname'].toString().indexOf('/playbyplay')>-1)||(utag.data['dom.pathname'].toString().indexOf('/headtohead')>-1)||(utag.data['dom.pathname'].toString().indexOf('/depthchart')>-1)||(utag.data['dom.pathname'].toString().indexOf('/racetrax')>-1)||(utag.data['dom.pathname'].toString().indexOf('/leaderboard')>-1)||(utag.data['dom.pathname'].toString().indexOf('/matchtrax')>-1)||(utag.data['dom.pathname'].toString().indexOf('/matchstats')>-1)||(utag.data['dom.pathname'].toString().indexOf('/team')>-1)||(utag.data['dom.pathname'].toString().indexOf('/player')>-1)||(utag.data['dom.pathname'].toString().indexOf('/lacesout')>-1)||(utag.data['dom.pathname'].toString().indexOf('/shakenbake')>-1)||(utag.data['dom.pathname'].toString().indexOf('/drivers')>-1)||(utag.data['dom.pathname'].toString().indexOf('/stats')>-1)||(utag.data['dom.pathname'].toString().indexOf('/standings')>-1)||(utag.data['dom.pathname'].toString().indexOf('/polls')>-1)||(utag.data['dom.pathname'].toString().indexOf('/results')>-1)||(utag.data['dom.pathname'].toString().indexOf('/odds')>-1)||(utag.data['dom.pathname'].toString().indexOf('/injuries')>-1)||(utag.data['dom.pathname'].toString().indexOf('/transactions')>-1)||(utag.data['dom.pathname'].toString().indexOf('/schedule')>-1)||(utag.data['dom.pathname'].toString().indexOf('/powerrankings')>-1)||(utag.data['dom.pathname'].toString().indexOf('/writer')>-1)||(utag.data['dom.pathname'].toString().indexOf('/article')>-1)}catch(e){};try{utag.cond[5]|=(utag.data['dom.url'].toString().indexOf('/fse')>-1)||(utag.data['dom.url'].toString().indexOf('foxdeportes.com')>-1)}catch(e){};};utag.pre=function(){utag.loader.initdata();utag.pagevars();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){if((typeof b['page_name']=='undefined'&&typeof b['trax_pagename']!='undefined'&&b['trax_pagename']!='')){b['page_name']=b['trax_pagename']}},function(a,b){if(1){b['page_url']=b['dom.url']}},function(a,b){var c=(typeof fsAnalyticsDescription!="undefined")?fsAnalyticsDescription.split("&"):[];for(var d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1];}},function(a,b){if(b["dom.pathname"]!=location.pathname){b["dom.pathname"]=location.pathname;}
if(b["dom.pathname"].indexOf("/super-bowl")>-1||b["dom.pathname"].indexOf("/olympics")>-1||b["dom.pathname"].indexOf("/fan-vote")>-1||b["dom.pathname"].indexOf("/foxsoccer")>-1||b["dom.pathname"].indexOf("/wrestlemania-part-1")>-1||b["dom.pathname"].indexOf("/wrestlemania-part-2")>-1||b["dom.pathname"].indexOf("/wrestlemania-part-3")>-1){b.sc_page_name="";}else{b.sc_page_name=b.page_name;}},function(a,b){function guid(){var S4=function(){return(((1+Math.random())*0x10000)|0).toString(16).substring(1);};return(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());}
b['temp_guid']=guid("");},function(a,b){if(typeof b['cp.utag_main_vi']=='undefined'){utag.loader.SC('utag_main',{'vi':b['temp_guid']});b['cp.utag_main_vi']=b['temp_guid'];}},function(a,b){if(1){try{b['sr_authors']=b.author.split(',');}catch(e){};try{b['sr_channels']=b.category.split(',');}catch(e){};try{b['sr_tags']=b["meta.keywords"].split(',');}catch(e){};try{b['sr_date']=new Date(utag.data.publish_date).toISOString();}catch(e){}}},function(a,b,c,d){if(1){c=[b['dom.domain'],b['dom.pathname']];b['sr_url']=c.join('')}},function(a,b){if(b['dom.pathname'].toString().indexOf('/gallery')>-1){b['sr_url']=b['dom.url']}},function(a,b){if((b['dom.pathname'].toString().indexOf('/video')>-1&&b['dom.query_string'].toString().indexOf('vid')>-1&&b['dom.query_string'].toString().indexOf('&')>-1)||(b['dom.pathname'].toString().indexOf('/boxscore')>-1&&b['dom.query_string'].toString().toLowerCase().indexOf('gameid'.toLowerCase())>-1&&b['dom.query_string'].toString().indexOf('&')>-1)){b['author']=b['_sf_async_config.authors'];try{b['sr_url']=b["dom.url"].substring(0,b["dom.url"].indexOf('&'));}catch(e){}}},function(a,b){if((b['dom.pathname'].toString().indexOf('/video')>-1&&b['dom.query_string'].toString().indexOf('vid')>-1&&b['dom.query_string'].toString().indexOf('&')<0)||(b['dom.pathname'].toString().indexOf('/boxscore')>-1&&b['dom.query_string'].toString().toLowerCase().indexOf('gameid'.toLowerCase())>-1&&b['dom.query_string'].toString().indexOf('&')<0)){b['author']=b['_sf_async_config.authors'];b['sr_url']=b['dom.url']}},function(a,b){if(typeof b['category']!="undefined"&&b['category']&&typeof b['page_type_alias']!="undefined"&&b['page_type_alias']){c=[b['category'],b['page_type_alias']];b['chartbeat_sections']=c.join(',')}},function(a,b){if(typeof b['author']=='undefined'){b['author']='none'}},function(a,b){jQuery('#buzzer-container article.buzzer-article div.buzzer-header a.buzzer-title-link').attr('name','&lpos=buzzer');jQuery('#buzzer-container article.buzzer-article div.buzzer-body a.buzzer-image-link').attr('name','&lpos=buzzer');jQuery('#buzzer-container article.buzzer-article div.buzzer-body div.buzzer-blurb-container a.buzzer-blurb-link').attr('name','&lpos=buzzer');jQuery('#fs-headlines .body ul li.article span.copy-container span.copy div.headlineListHeadline a').attr('name','&lpos=newswire');jQuery('#fs-hot-topics ul li h3 a').attr('name','&lpos=hottopics');jQuery('#thumbnailParent a.thumnailAnchor').attr('name','&lpos=featured');jQuery('article.buzzer-article div.buzzer-footer div.buzzer-tags a').attr('name','&lpos=tag');jQuery('ul#topnav-sports li a').attr('name','&lpos=main_nav');},function(a,b){jQuery('#fs-page-center-piece .fs-cp').attr('data-vr-zone','center piece');jQuery('#fs-page-center-piece .fs-cp .content').attr('data-vr-contentbox','');jQuery('#fs-hot-topics').attr('data-vr-zone','hot topics');jQuery('#fs-hot-topics ul li').attr('data-vr-contentbox','');jQuery('#more-sports').attr('data-vr-zone','buzzer');jQuery('#more-sports .fs-exclusives-story').attr('data-vr-contentbox','');jQuery('#fs-headlines').attr('data-vr-zone','headlines');jQuery('#fs-headlines .article').attr('data-vr-contentbox','');},function(a,b){jQuery('#fs-hot-topics').attr('data-vr-zone','hot topics');jQuery('#fs-hot-topics ul li').attr('data-vr-contentbox','');jQuery('#buzzer-container .buzzer').attr('data-vr-zone','buzzer');jQuery('#buzzer-container .buzzer .buzzer-article').attr('data-vr-contentbox','');jQuery('#olympicHeadlines').attr('data-vr-zone','newswire');jQuery('#olympicHeadlines li.article').attr('data-vr-contentbox','');jQuery('#thumbnailParent').attr('data-vr-zone','buzzer featured');jQuery('#thumbnailParent .thumbnailDiv').attr('data-vr-contentbox','');},function(a,b){if(jQuery("#FoxboxESIProxyContainer").length>0&&a=="view"){if(b.page_name.indexOf("big board")==-1||(b.page_name.indexOf("big board")>-1&&utag.data.event_type=="go big")){b.event="event3";var v=jQuery("table.wisfb_navTabs tbody tr td a.wisfb_navSelected").text().toLowerCase();var path=location.pathname;var cat_check=/college-football|mlb|nfl|nba|nascar|ufc|college-basketball|nhl|foxsoccer|golf|tennis|olympics|boxing|motor|horseracing/;if(cat_check.test(path)){utag.data["fb_category"]=path.match(cat_check).toString();}
b.fb_name="fscom:big board:"+((utag.data['fb_category']!="")?utag.data['fb_category']:"nfl")+":"+((v!="")?v:"summary")+":section front";if(utag.data.event_type=="go big"){b.fb_name=b.fb_name+" - full view";utag.data.fb_name=b.fb_name;}
prev_linknm=b.fb_name;}}},function(a,b){foxbox_links=function(e,lnktp){var little=jQuery("div.wisfb_goBig a.wisfb_goBigActive").text().toLowerCase();var big=jQuery("section#wisfb_mainNav div.wisfb_goSmall a span").text().toLowerCase();var appd="",event="";if(big&&!little){view="big";appd=" - full view";event="full view";}else{view="small";event="fox box";}
if(lnktp=="sport"){utag.data.fb_category=e.target.value.toLowerCase();}else if(typeof utag.data.fb_category=="undefined"||lnktp=="goSmall"){utag.data.fb_category=utag.data['category'];}
var ltx="fscom:big board:"+utag.data['fb_category']+":";var snb=":"+jQuery("table.wisfb_navTabs tbody tr td a.wisfb_navSelected").text();switch(lnktp){case"mainNav":ltx=ltx+e.target.textContent+":Section Front"+appd;console.log(ltx);break;case"sport":var t=prev_linknm.split(':');t.splice(2,1,utag.data['fb_category']);t.splice(3,1,"summary");ltx=t.join(':');event="change sport";console.log(ltx);break;case"team":ltx=ltx+"team:"+e.target.textContent+snb+appd;console.log(ltx);break;case"player":plyrnm=jQuery(e.target).parents('article.wisfb_leaderChip').find('.wisfb_playerName').text();ltx=ltx+"player:"+plyrnm+snb+appd;console.log(ltx);break;case"division":ltx=ltx+"standings:"+e.target.textContent+appd;console.log(ltx);break;case"goBig":if(typeof prev_linknm!=""&&prev_linknm!=""){ltx=prev_linknm+" - full view";}else{ltx="fscom:big board:home:Summary:Section Front - full view"}
ltx=ltx.toLowerCase();event="go big";console.log(ltx);break;case"goSmall":ltx=ltx+snb.replace(":","")+":section front";console.log(ltx);break;}
ltx=ltx.toLowerCase();prev_linknm=ltx;utag.data.fb_name=ltx;utag.data.event="event3";utag.data.event_type=event;utag.data.linkTrackEvents="event3";if(view=="small"&&event!="go big"){utag.link({fb_name:ltx,event:"event3",event_type:event,linkTrackEvents:"event3",linkTrackVars:"events,eVar56,prop56"})}
ltx="";if(lnktp=="sport"){spt_count=0;var spt_int=setInterval(function(){spt_change()},500);function spt_change(e){if(typeof jQuery("div.wisfb_dropdown select.wisfb_sportDropDown")[0]!="undefined"||spt_count>10){jQuery("div.wisfb_dropdown").on('change','select.wisfb_sportDropDown',function(e){foxbox_links(e,"sport");})
clearInterval(spt_int);}else{spt_count+=1;}}}}},function(a,b){if(b['page_name'].toString().indexOf('big board')>-1||utag.data['event_type']=='change sport'){try{b['fb_name']=utag.data.fb_name}catch(e){};b['event']='event3';try{b['event_type']=utag.data.event_type}catch(e){}}},function(a,b){var t=fsAnalyticsDescription.split('&');for(var i=0;i<t.length;i++){var e=t[i].split('=');var val=e[1];switch(e[0]){case"page_name":s_analytics.descPageName=val;break;case"category":s_analytics.descCategory=val;break;case"page_type":s_analytics.descFileName=val;break;case"cms_id":s_analytics.descCMSID=val;break;case"page_topic":s_analytics.descPageTopic=val;break;case"filename":s_analytics.descFileName=val;break;case"story_title":s_analytics.descStoryTitle=val;break;case"page_type_alias":s_analytics.descPageTypeAlias=val;break;case"source":s_analytics.descSource=val;break;case"publish_date":s_analytics.descPublishDate=val;break;case"author":s_analytics.descAuthor=(val=="not specified"?"no author":val);break;}}}];utag.loader.initcfg=function(){utag.loader.cfg={"31":{load:1,send:1,wait:1,tid:19004},"2":{load:1,send:1,wait:1,tid:3005},"7":{load:utag.cond[2],send:1,wait:1,tid:14009},"4":{load:utag.cond[4],send:1,wait:1,tid:3073},"13":{load:1,send:1,wait:1,tid:7050},"17":{load:utag.cond[9],send:1,wait:1,tid:7050},"19":{load:utag.cond[10],send:1,wait:1,tid:19041},"9":{load:utag.cond[5],send:1,wait:1,tid:7001},"5":{load:1,send:0,wait:1,tid:20010},"28":{load:utag.cond[11],send:1,wait:1,tid:22005},"29":{load:utag.cond[12],send:1,wait:1,tid:22005},"33":{load:1,send:1,wait:1,tid:20010,src:"http://content.dl-rms.com/rms/mother/821/nodetag.js"}};utag.loader.cfgsort=["31","2","7","4","13","17","19","9","5","28","29","33"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(var i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[i]=utag_cfg_ovrd[i];};utag.loader.SETFORCE=function(a){utag.DB('SETFORCE:'+a);if(utag.loader.ft>0)clearTimeout(utag.loader.ft);utag.loader.ft=(utag.cfg.forcetimeout!=0)?setTimeout(utag.loader.FORCE,utag.cfg.forcetimeout):0}
utag.loader.FORCE=function(a,b,c,d){a=utag.sender;b=utag.loader.f;utag.DB('FORCE:'+a+':'+b);for(c in utag.loader.GV(b)){d=a[c].id;if(typeof b[c]!='undefined'&&b[c]==0){utag.DB('FORCEERROR:'+d);utag.rpt['f_'+d]=1;utag.ut.error({e:'load error',s:a[c].src,l:0,t:'le'});delete utag.sender[d];delete utag.send[d];utag.loader.LOAD(d)}}}
utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;utag.rpt.ts['i']=new Date();if(!utag.cfg.noload){try{this.GET()}catch(e){};var lq=[];d=this.cfgsort||this.cfg;for(a in this.GV(d)){e=(this.cfgsort?d[a]:a);b=this.cfg[e];b.id=e;if(b.wait==1){this.wq.push(b)}else if(b.load>0){if(b.send){c=false;utag.send[b.id]=b;}
if(b.load!=4){lq.push(b);this.f[b.id]=0;}}}
for(a=0;a<lq.length;a++){utag.DB('utag.loader.INIT: loading '+b.id);utag.loader.AS(lq[a])}
if(utag.loader.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.loader.wq');utag.loader.WQ();utag.loader.SETFORCE('WAIT')}});else if(lq.length==0)utag.handler.INIT();else utag.loader.SETFORCE('INIT')}
return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{var taboola=window.setInterval(function(){tab()},500)
function tab(){a=jQuery('.videoCube a').length;if(a>0){jQuery('.videoCube a').attr('onclick','utag.link({event_name: "link",link_type: "taboola",link_to: jQuery(this).attr("href").toLowerCase(),link_ref: "taboola - " + jQuery(this).attr("title"),link_url: utag.data["dom.url"]});')
taboola=window.clearInterval(taboola)}}}catch(e){};try{jQuery("div.buzzer-load-more").live('click',function(){var udo=utag.data;udo.link_text=jQuery(this).text().replace(/[^a-z A-Z]/g,"").trim().toLowerCase();udo.link_id=jQuery(this).text().replace(/[^a-z A-Z]/g,"").trim().toLowerCase();utag.view(udo);})}catch(e){};try{jQuery("table.wisfb_navTabs").live('mousedown','tbody tr td a',function(e){foxbox_links(e,"mainNav");});jQuery("div.wisfb_dropdown").on('change','select.wisfb_sportDropDown',function(e){foxbox_links(e,"sport");})
jQuery("td.wisfb_name").live('mousedown',function(e){foxbox_links(e,"team");})
jQuery("td.wisfb_playerName a").live("mousedown",function(e){var team_id=jQuery(this).attr("data-teamid");if(typeof team_id!="undefined"){foxbox_links(e,"team");}})
jQuery("div.wisfb_goBig a.wisfb_goBigActive").live('mousedown',function(e){foxbox_links(e,"goBig");})
jQuery("div.wisfb_goSmall").live('mousedown','a',function(e){foxbox_links(e,"goSmall");})
jQuery("article.wisfb_leaderChip").live('mousedown',"div[class^='wisfb_']",function(e){foxbox_links(e,"player");});jQuery("nav div[class^='wisfb_tabNFC'],nav div[class^='wisfb_tabAFC'],div.wisfb_filterTabs a[id^='wisfb_filterTab']").live("mousedown",function(e){foxbox_links(e,"division");});jQuery("div.wisfb_toggleButtonContainer div.wisfb_buttonChain").live('mousedown','a.wisfb_toggleButton',function(e){foxbox_links(e,"division");});}catch(e){};}})
utag.cfg.readywait?utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.DB('READY:utag.cfg.readywait');utag.loader.INIT()}}):utag.loader.INIT();}