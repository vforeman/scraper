//tealium universal tag - utag.31 ut4.0.201405012136, Copyright 2014 Tealium.com Inc. All Rights Reserved.
var s_account="sportsfscomprod";var s_analytics=s_gi(s_account);s_analytics.dynamicAccountSelection=true;s_analytics.dynamicAccountList="sportsfscomdev=qa.foxsports.com,qa1.foxsports.com,qa2.foxsports.com,stg.foxsports.com,stg1.foxsports.com,stg2.foxsports.com";s_analytics.trackDownloadLinks=true;s_analytics.trackExternalLinks=true;s_analytics.trackInlineStats=true;s_analytics.linkDownloadFileTypes="zip,exe,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s_analytics.linkInternalFilters="javascript:,localhost,foxsports.com,lacesoutblog.com,blog.foxsoccer.com,speed.com,speed2.com,foxsoccerplus.com,ufc.com,fuel.tv,nhl.test.onetwosee.com,outkickthecoverage.com";s_analytics.linkLeaveQueryString=false;s_analytics.linkTrackVars="prop21,prop22,prop23,prop24";s_analytics.linkTrackEvents="None";s_analytics.usePlugins=false;s_analytics.currencyCode="USD";s_analytics.visitorNamespace="foxsports";s_analytics.trackingServer="a.foxsports.com";s_analytics.trackingServerSecure="";s_analytics.dc=122;var s_siteID;s_siteID=document.domain.split('.').splice(0,1).join('.');if(s_siteID=='www'||s_siteID=='msn'||s_siteID=='blog')
{s_siteID="fscom";}
else
{s_siteID="fs"+s_siteID;}
s_analytics.siteID=s_siteID
s_analytics.defaultPage=""
s_analytics.queryVarsList=""
s_analytics.pathExcludeDelim=";"
s_analytics.pathConcatDelim=":"
s_analytics.pathExcludeList=""
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.24.4';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+"{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+" s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l="
+"s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilitySta"
+"te;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,"
+"c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'"
+"}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){v"
+"ar s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf"
+"('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':"
+"s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='N"
+"ONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString"
+"()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i"
+"].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.a"
+"pv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.w"
+"d,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c"
+"=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tf"
+"s=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=thi"
+"s,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s."
+"trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.ne"
+"t';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mob"
+"ile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if"
+"(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;"
+"r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_"
+"il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dl"
+"n<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-"
+"b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf="
+"function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='"
+"',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+="
+"8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if"
+"(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c='"
+"'}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\""
+";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nf"
+"l.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substr"
+"ing(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f"
+".indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')s"
+"k='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=f"
+"unction(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrac"
+"kEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',e"
+"vents,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf"
+"(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=="
+"'referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visit"
+"orMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visit"
+"orNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';el"
+"se if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else i"
+"f(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=="
+"'events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSe"
+"conds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';els"
+"e if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier"
+"'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0"
+"?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s"
+".lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lf"
+"t,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','v"
+"ar s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cpp"
+"XYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=functi"
+"on(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l"
+".protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o)"
+"{var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type."
+"toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&("
+"!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o."
+"value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s="
+"this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return '"
+"'};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('="
+"'),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c"
+"_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s"
+".sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Funct"
+"ion('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0|"
+"|oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachE"
+"vent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplin"
+"gGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=fu"
+"nction(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))re"
+"turn n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLower"
+"Case)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',argument"
+"s))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s."
+"m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il"
+"','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]]"
+")r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",a"
+"rguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if(("
+"\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)f"
+"or(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){"
+"if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g["
+"i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.subs"
+"tring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_"
+"c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.m"
+"axDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.t"
+"ype=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o"
+"=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=funct"
+"ion(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}"
+"}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s."
+"dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDel"
+"ay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s"
+".track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt="
+"tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',v"
+"b=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn"
+"=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new "
+"Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v"
+"=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if("
+"s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage"
+"(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}i"
+"f(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidt"
+"h=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.documen"
+"t.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o"
+"),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.o"
+"nclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.link"
+"Name;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageUR"
+"L;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape("
+"t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referre"
+"r=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if("
+"s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,"
+"i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i"
+"];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml"
+")for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if"
+"(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.loc"
+"ation.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6"
+"=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer')"
+";s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=par"
+"seFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpp"
+"erCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServer"
+"Secure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,"
+"deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,"
+"lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',"
+"prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,jav"
+"ascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,tra"
+"ckingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExte"
+"rnalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s."
+"sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t("
+")};s.wd.s_dc=function(un){s_gi(un,1).t()}}",w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1,'link':1,'video':1};u.o=s_analytics;u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};u.varlist={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(var i=1;i<76;i++){u.varlist['prop'+i]='c'+i;u.varlist['eVar'+i]='v'+i};u.map={"content":"prop16,eVar16","social_share_event:social media share":"event44","fb_name":"prop56,eVar56","event:event3":"event3","link_name:newsletter submit_gen_interstitial":"event23","link_name:newsletter submit_nfl_interstitial":"event23","link_name:newsletter submit_nba_interstitial":"event23","link_name:newsletter submit_mlb_interstitial":"event23","link_name:newsletter submit_big east_interstitial":"event23","link_name:newsletter submit_nhl_interstitial":"event23","link_name:newsletter submit_nhl":"event23","link_name:newsletter submit_nba":"event23","link_name:newsletter submit_mlb":"event23","link_name:newsletter submit_big east":"event23","link_name:newsletter submit_nfl":"event23","link_name:newsletter submit_gen":"event23","link_name:newsletter submit":"event23","link_name":"prop71,eVar71","photo_title":"prop52","gallery_name":"prop51","page_type":"prop15,eVar15","story_title":"eVar35","slide_num":"prop45","link_id:show more":"event23","link_id":"prop71,eVar71","tool_name":"prop71,eVar71","tool_event:gallery show hide caption":"event23","tool_event:gallery show hide thumb":"event23","tool_event:gallery auto play":"event23","sc_page_name":"pageName","lead_name":"eVar17","lead_step":"prop17","lead_complete:bracket created":"event35","trax_pagename":"pageName","trax_pagetype":"prop15","author":"prop37,evar37"};u.extend=[function(a,b){if(typeof fsAnalyticsPageType=="undefined"){fsAnalyticsPageType="undefined";}
},function(a,b){s_analytics.channelExtractCust=new Function("d","sp","p","u","pv","ep",""
+"var s=this,v='';var i,n,a=s.split(u+'',d),al=a.length;if(al<p){if(p"
+"v==1)p=al;else return'';}for(i=sp;i<=p;i++){if(ep!=i){v+=a[i-1];if("
+"i<p)v+=d;}}return v");s_analytics.exitLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+"e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+"nkType='e';else h='';s[n]=t;return h;");s_analytics.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");s_analytics.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");s_analytics.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");s_analytics.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");s_analytics.setupLinkTrack=new Function("vl","c",""
+"var s=this;var l=s.d.links,cv,cva,vla,h,i,l,t,b,o,y,n,oc,d='';cv=s."
+"c_r(c);if(vl&&cv!=''){cva=s.split(cv,'^^');vla=s.split(vl,',');for("
+"x in vla)s._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}s.c_w(c,'',0);if(!s.e"
+"o&&!s.lnk)return '';o=s.eo?s.eo:s.lnk;y=s.ot(o);n=s.oid(o);if(s.eo&"
+"&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement"
+":o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);}for(i=0;i<4;i++"
+")if(o.tagName)if(o.tagName.toLowerCase()!='a')if(o.tagName.toLowerC"
+"ase()!='area')o=o.parentElement;}b=s._LN(o);o.lid=b[0];o.lpos=b[1];"
+"if(s.hbx_lt&&s.hbx_lt!='manual'){if((o.tagName&&s._TL(o.tagName)=='"
+"area')){if(!s._IL(o.lid)){if(o.parentNode){if(o.parentNode.name)o.l"
+"id=o.parentNode.name;else o.lid=o.parentNode.id}}if(!s._IL(o.lpos))"
+"o.lpos=o.coords}else{if(s._IL(o.lid)<1)o.lid=s._LS(o.lid=o.text?o.t"
+"ext:o.innerText?o.innerText:'');if(!s._IL(o.lid)||s._II(s._TL(o.lid"
+"),'<img')>-1){h=''+o.innerHTML;bu=s._TL(h);i=s._II(bu,'<img');if(bu"
+"&&i>-1){eval(\"__f=/ src\s*=\s*[\'\\\"]?([^\'\\\" ]+)[\'\\\"]?/i\")"
+";__f.exec(h);if(RegExp.$1)h=RegExp.$1}o.lid=h}}}h=o.href?o.href:'';"
+"i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l"
+"=s.linkName?s.linkName:s._hbxln(h);t=s.linkType?s.linkType.toLowerC"
+"ase():s.lt(h);oc=o.onclick?''+o.onclick:'';cv=s.pageName+'^^'+o.lid"
+"+'^^'+s.pageName+' | '+(o.lid=o.lid?o.lid:'no &lid')+'^^'+o.lpos;if"
+"(t&&(h||l)){cva=s.split(cv,'^^');vla=s.split(vl,',');for(x in vla)s"
+"._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}else if(!t&&oc.indexOf('.tl(')<"
+"0){s.c_w(c,cv,0);}else return ''");s_analytics._IL=new Function("a","var s=this;return a!='undefined'?a.length:0");s_analytics._II=new Function("a","b","c","var s=this;return a.indexOf(b,c?c:0)");s_analytics._IS=new Function("a","b","c",""
+"var s=this;return b>s._IL(a)?'':a.substring(b,c!=null?c:s._IL(a))");s_analytics._LN=new Function("a","b","c","d",""
+"var s=this;b=a.href;b+=a.name?a.name:'';c=s._LVP(b,'lid');d=s._LVP("
+"b,'lpos');r"
+"eturn[c,d]");s_analytics._LVP=new Function("a","b","c","d","e",""
+"var s=this;c=s._II(a,'&'+b+'=');c=c<0?s._II(a,'?'+b+'='):c;if(c>-1)"
+"{d=s._II(a,'&',c+s._IL(b)+2);e=s._IS(a,c+s._IL(b)+2,d>-1?d:s._IL(a)"
+");return e}return ''");s_analytics._LS=new Function("a",""
+"var s=this,b,c=100,d,e,f,g;b=(s._IL(a)>c)?escape(s._IS(a,0,c)):esca"
+"pe(a);b=s._LSP(b,'%0A','%20');b=s._LSP(b,'%0D','%20');b=s._LSP(b,'%"
+"09','%20');c=s._IP(b,'%20');d=s._NA();e=0;for(f=0;f<s._IL(c);f++){g"
+"=s._RP(c[f],'%20','');if(s._IL(g)>0){d[e++]=g}}b=d.join('%20');retu"
+"rn unescape(b)");s_analytics._LSP=new Function("a","b","c","d","var s=this;d=s._IP(a,b);return d"
+".join(c)");s_analytics._IP=new Function("a","b","var s=this;return a.split(b)");s_analytics._RP=new Function("a","b","c","d",""
+"var s=this;d=s._II(a,b);if(d>-1){a=s._RP(s._IS(a,0,d)+','+s._IS(a,d"
+"+s._IL(b),s._IL(a)),b,c)}return a");s_analytics._TL=new Function("a","var s=this;return a.toLowerCase()");s_analytics._NA=new Function("a","var s=this;return new Array(a?a:0)");s_analytics._hbxm=new Function("m","var s=this;return (''+m).indexOf('{')<0");s_analytics._hbxln=new Function("h","var s=this,n=s.linkNames;if(n)return s.pt("
+"n,',','lnf',h);return ''");s_analytics.getPercentPageViewed=new Function("",""
+"var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var"
+" v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}");s_analytics.getPPVCalc=new Function("",""
+"var s=s_c_il["+s_analytics._in+"],dh=Math.max(Math.max(s.d.body.scrollHeight,"
+"s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s."
+"d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d."
+"documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentE"
+"lement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s"
+".wd.document.documentElement.scrollTop||s.wd.document.body.scrollTo"
+"p),vh=st+vph,pv=Math.round(vh/dh*100),cp=s.c_r('s_ppv');if(pv>100){"
+"s.c_w('s_ppv','');}else if(pv>cp){s.c_w('s_ppv',pv);}");s_analytics.getPPVSetup=new Function("",""
+"var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s"
+".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals"
+"e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd"
+".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv"
+"ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa"
+"lc);}");s_analytics.getPPVSetup();s_analytics.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");s_analytics.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");s_analytics.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");s_analytics.getTimeParting=new Function("t","z","y",""
+"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+"estring}if(t=='d'){return daystring};if(t=='w'){return en"
+"dstring}}};");s_analytics.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");s_analytics.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");s_analytics.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");if(!s_analytics.__ccucr){s_analytics.c_rr=s_analytics.c_r;s_analytics.__ccucr=true;s_analytics.c_r=new Function("k",""
+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+"urn v;");}
if(!s_analytics.__ccucw){s_analytics.c_wr=s_analytics.c_w;s_analytics.__ccucw=true;s_analytics.c_w=new Function("k","v","e",""
+"this.new2 = true;"
+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");}
s_analytics.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");s_analytics.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");s_analytics.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");s_analytics.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");s_analytics.join=new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");s_analytics.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullY"
+"ear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[ar"
+"ry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new"
+" Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var "
+"td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.roun"
+"d((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arr"
+"y[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{deli"
+"m:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join"
+"(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");s_analytics.loadModule("Media")
s_analytics.Media.autoTrack=false
s_analytics.Media.trackWhilePlaying=true
s_analytics.Media.trackVars="None"
s_analytics.Media.trackEvents="None"
s_analytics.loadModule("Integrate")
s_analytics.m_Media_c="var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new "
+"Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(m.playerName"
+"?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.lm=0;i.lom=0;m.l[n"
+"]=i}};m._delete=function(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,"
+"sl);if(i&&!i.m){i.m=new Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m("
+")}};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.contextDataMapping=0;m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev"
+"3,c=vo.contextData,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1"
+"}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMileston"
+"e']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==n"
+"s)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y){if(y=='view'||y=='s"
+"egmentView'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c["
+"x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d"
+"[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i."
+"vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):''"
+");vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trac"
+"kOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,sc=0,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.l"
+"t>0)o=(ts-i.lt)+i.lo;else o=i.lo;if(i.l>0)o=o<i.l?o:(i.l-1);if(o<0)o=0}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=o;if(w.length>0){w.pe"
+"rcent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:w.percent}w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x"
+"==4?'TRACK':(x==5?'FLUSH':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if(x<=3&&i.to>=0)"
+"{t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l+1)/i.l<c/100&&(o+1)/i.l>=c/100){"
+"t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w.mediaEven"
+"t=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c){if("
+"(o+1)/i.l<c/100){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=="
+"'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if(x!=5){if((sx||i.sx)&&sx!=i.sx)sc=1;if(sc){if(i.to>=0)m.e(n,5,o,0,0,-1,pd);if(sc){i.sn=sn;i.sx=sx;i.sc=1}}}if(x>=2&&i"
+".lo<o){i.t+=o-i.lo;i.ts+=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}"
+"}if(x==5)v=e=\"None\";i.lt=ts;i.lo=o}else{m.e(n,2,-1,0,0,-1,pd);v=e=\"None\"}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fe"
+"l[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n)"
+";if(t&&i.tc==tc){vo=new Object;vo.contextData = new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUs"
+"ingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);i.e = \"\";if(i.ts>0)i.sc=0;i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this"
+",r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.i"
+"d?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._i"
+"n+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','v"
+"ar e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p'"
+");p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media P"
+"layer '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1"
+";if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javas"
+"cript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime "
+"Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetD"
+"uration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\","
+"0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]"
+"=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o"
+".GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.a"
+"e(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b"
+"',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getEleme"
+"ntsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener"
+")s.wd.addEventListener('load',m.as,false)";s_analytics.m_i("Media");s_analytics.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!s.wd[o])s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disab"
+"le=0;p.get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){"
+"p=m[m.l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._f"
+"u=function(p,u){var m=this,s=m.s,x,v,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*100"
+"00000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;for(x in p)if(x&&x.substring(0,1)!='_'&&(!Object||!Object.prototype||!Object.prototype[x])){v=''+p[x];if(v==p[x]||parseFloat(v"
+")==p[x])u=s.rep(u,'['+x+']',s.rep(escape(v),'+','%2B'))}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.l"
+"oadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;"
+"for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x"
+"]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)"
+"){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";s_analytics.m_i("Integrate");},function(a,b){s_analytics.usePlugins=true
function s_doPlugins(s)
{s_analytics.eVar75=document.URL.toLowerCase();s_analytics.prop75="D=v75";if(!s_analytics.pageType&&!s_analytics.pageName)
{s_analytics.pageName=s_analytics.getPageName().toLowerCase();}
if(s_analytics.pageType)
{s_analytics.pageType="errorPage";}
if(!s_analytics.firstLoad)
{if((s_analytics.pageName==s_analytics.siteID||s_analytics.pageName==s_analytics.siteID+':?')&&document.URL.indexOf('laces')==-1&&document.URL.indexOf('blog.foxsoccer.com')==-1)
{s_analytics.pageName=s_analytics.siteID+":home:home";s_analytics.prop15="home";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf('.asp')>-1||s_analytics.pageName.indexOf('.htm')>-1)
{s_analytics.pageNameStop=s_analytics.pageName.indexOf('.');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop).toLowerCase();}
if(document.URL.indexOf('blog.foxsoccer.com')>-1)
{if(s_analytics.pageName==s_analytics.siteID)
{s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="blog";}
if(s_analytics.pageName!=s_analytics.siteID)
{s_analytics.pageName=s_analytics.pageName.replace(s_analytics.siteID,s_analytics.siteID+':foxsoccer:blog');}
if(s_analytics.pageName.indexOf(':tagged')>-1)
{s_analytics.pageName=s_analytics.pageName.split('-').join(' ')+":catelog";}
else if(s_analytics.pageName.indexOf(':search')>-1)
{s_analytics.pageName=s_analytics.pageName.split('+').join(' ')+":catelog"}
else if(s_analytics.pageName.indexOf(':post')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':post','');s_analytics.pageNameStop=s_analytics.pageName.indexOf(':blog:')+6;s_analytics.eVar35Start=s_analytics.pageName.lastIndexOf(':');s_analytics.prop36=s_analytics.pageName.slice(s_analytics.pageNameStop,s_analytics.eVar35Start);if(s_analytics.prop36.length==0)
{s_analytics.prop36=s_analytics.pageName.slice(s_analytics.eVar35Start+1,s_analytics.pageName.length)
s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" blog: no blog title"}
else
{s_analytics.eVar43=s_analytics.pageName.slice(s_analytics.eVar35Start+1,s_analytics.pageName.length).split('-').join(' ');s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" blog: "+s_analytics.pageName.slice(s_analytics.eVar35Start+1,s_analytics.pageName.length).split('-').join(' ');s_analytics.prop36=s_analytics.pageName.slice(s_analytics.pageNameStop,s_analytics.eVar35Start);}
s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop)+":blog detail";}
if(!s_analytics.prop15)
{s_analytics.prop15="blog";}
s_analytics.firstLoad=1}
if(document.URL.indexOf('/laces-out')>-1||document.URL.indexOf('/shakeandbake')>-1||document.URL.indexOf('/speed')>-1||document.URL.indexOf('/haymaker')>-1)
{s_analytics.prop15="blog";s_analytics.firstLoad=1;}
if(document.URL.indexOf('foxsports1')>-1||(document.URL.indexOf('/foxsports')>-1&&document.URL.indexOf('/other')>-1))
{if(s_analytics.pageName.indexOf(':foxsports1')>-1&&s_analytics.pageName.indexOf(':foxsports1:'==-1)&&s_analytics.pageName.indexOf('other')==-1)
{s_analytics.pageName=s_analytics.pageName+':section front';s_analytics.prop15="section front";s_analytics.firstLoad=1;}
else if(s_analytics.pageName.indexOf('other')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':other:page',':foxsports1');s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="foxsports1";s_analytics.firstLoad=1;}}
if(s_analytics.eVar75.indexOf('com/video')>-1||s_analytics.eVar75.indexOf('/foxsoccer/video')>-1||s_analytics.eVar75.indexOf('/boysinthehall')>-1||s_analytics.eVar75.indexOf('/garniermens')>-1&&(s_analytics.eVar75.indexOf('/story')==-1||s_analytics.eVar75.indexOf('/lists')==-1||s_analytics.eVar75.indexOf('/gallery')==-1||s_analytics.pageName.indexOf(':topics')==-1))
{if(s_analytics.pageName.indexOf(':video')>-1&&s_analytics.pageName!=s_analytics.siteID+":video")
{if(s_analytics.pageName.indexOf(':video-central')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':video-central',':video');}
else if(s_analytics.pageName.indexOf(':most-')>-1||s_analytics.pageName==s_analytics.siteID+":video:shows"||s_analytics.pageName==s_analytics.siteID+":video:foxsoccer:shows")
{s_analytics.pageName=s_analytics.pageName+":catelog";}
else
{s_analytics.pageName=s_analytics.pageName+":channel";}
s_analytics.prop15="video";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':college-')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':college-',':college');}
if(s_analytics.pageName.indexOf(':foxsoccer')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':foxsoccer:video',':video:foxsoccer');}
if(s_analytics.pageName.indexOf(':speed_channel')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':speed_channel',':motor:speed');}
if(s_analytics.pageName.indexOf(':garniermens')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':garniermens',':video:shows:garniermens')+":channel";s_analytics.prop15="video";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':boysinthehall')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':boysinthehall',':video:shows:boysinthehall');s_analytics.pageName=s_analytics.pageName+":channel";s_analytics.prop15="video";s_analytics.firstLoad=1;}
s_analytics.prop15="video";s_analytics.firstLoad=1;}
if(document.URL.indexOf('press')>-1)
{if(s_analytics.pageName.indexOf(':press')>-1&&s_analytics.pageName.indexOf(':press:'==-1))
{s_analytics.pageName=s_analytics.pageName+':section front';s_analytics.prop15="section front";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/rssfeeds')>-1||document.domain=='feeds.foxsports.com')
{if(s_analytics.pageName.indexOf(':rssfeeds')>-1&&s_analytics.pageName.indexOf(':rssfeeds:'==-1))
{s_analytics.pageName=s_analytics.pageName+':section front';s_analytics.prop15="feeds";s_analytics.firstLoad=1;}
}
if(document.URL.indexOf('morenews')>-1)
{if(s_analytics.pageName.indexOf(':morenews')>-1&&!s_analytics.getQueryParam("categoryId"))
{s_analytics.pageName=s_analytics.pageName+":section front";s_analytics.prop15="morenews";s_analytics.firstLoad=1;}
else
{if(s_analytics.getQueryParam("categoryId"))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam("categoryId")+':catelog';}
else
{s_analytics.pageName=s_analytics.pageName+':landing';}
s_analytics.prop15="morenews"
s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/feedback')>-1)
{if(s_analytics.pageName.indexOf(':feedback')>-1&&s_analytics.pageName.indexOf(':feedback:'==-1))
{s_analytics.pageName=s_analytics.pageName.replace(':feedback',':about:feedback');s_analytics.pageName=s_analytics.pageName+':form input page';s_analytics.prop15="about"
s_analytics.firstLoad=1;}}
if(document.URL.indexOf('leaderboard')>-1&&document.URL.indexOf('.com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':leaderboard')>-1&&s_analytics.pageName.indexOf(':leaderboard:')==-1)
{s_analytics.pageName=s_analytics.pageName+":pga-tour:landing";}
else if(s_analytics.pageName.indexOf(':leaderboard')>-1)
{s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop68=s_analytics.pageName.split(':').slice(3,4).join(':').split('-').join(' ');s_analytics.prop15="leaderboard";s_analytics.firstLoad=1;}
if(document.URL.indexOf('matchtrax')>-1||document.URL.indexOf('matchStats')>-1||document.URL.indexOf('raceTrax')>-1)
{if(s_analytics.pageName.indexOf(':matchtrax')>-1)
{if(s_analytics.pageName.indexOf(':matchtrax')>-1&&s_analytics.pageName.indexOf(':matchtrax:')==-1)
{s_analytics.pageName=s_analytics.pageName+":section front";s_analytics.prop68="default content";}
else
{if(s_analytics.getQueryParam('gameId'))
{s_analytics.prop68=s_analytics.getQueryParam('gameId').toLowerCase();}
else
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.prop68=s_analytics.pageName.slice(s_analytics.pageNameStop+1,s_analytics.pageName.length).split('-').join(' ').split('%20').join(' ').toLowerCase();s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);}
s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="matchtrax";s_analytics.firstLoad=1;}
else if(s_analytics.pageName.indexOf(':matchstats')>-1)
{if(!s_analytics.getQueryParam('gameid')&&!s_analytics.getQueryParam('form'))
{s_analytics.pageName=s_analytics.pageName+":section front";s_analytics.prop68="default content";}
else
{if(s_analytics.getQueryParam('gameId')&&s_analytics.getQueryParam('form'))
{s_analytics.prop68=s_analytics.getQueryParam('gameId').toLowerCase()+':'+s_analytics.getQueryParam('form').toLowerCase();}
else
{s_analytics.prop68=s_analytics.getQueryParam('gameId').toLowerCase();}
s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="matchstats";s_analytics.firstLoad=1;}
else if(s_analytics.pageName.indexOf(':racetrax')>-1)
{if(!s_analytics.getQueryParam('gameid')&&!s_analytics.getQueryParam('state'))
{s_analytics.pageName=s_analytics.pageName+":section front";s_analytics.prop68="default content";}
else
{if(s_analytics.getQueryParam('gameId')&&s_analytics.getQueryParam('state'))
{s_analytics.prop68=s_analytics.getQueryParam('gameId').toLowerCase()+':'+s_analytics.getQueryParam('state').toLowerCase();}
else
{s_analytics.prop68=s_analytics.getQueryParam('gameId').toLowerCase()+":default content";}
s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="racetrax";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('story')>-1)
{if((s_analytics.pageName.indexOf(':story:')>-1))
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);s_analytics.pageName=s_analytics.pageName+':'+'story page';s_analytics.prop15="story";s_analytics.events=s_analytics.apl(s_analytics.events,"event46,event24",",",2);s_analytics.firstLoad=1;}}
if(document.URL.indexOf('photo-gallery')>-1)
{if((s_analytics.pageName.indexOf(':photo-gallery')>-1))
{s_analytics.pageName=s_analytics.pageName.replace(':photo-gallery',':gallery');s_analytics.pageName=s_analytics.pageName+':catelog';s_analytics.prop15="gallery";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/gallery')>-1)
{if(s_analytics.pageName.indexOf(':gallery')>-1&&s_analytics.pageName.indexOf(':tennis')==-1)
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);s_analytics.pageName=s_analytics.pageName+':photo page';s_analytics.prop15="gallery";s_analytics.firstLoad=1;}
else
{s_analytics.pageName=s_analytics.pageName+':photo page';s_analytics.prop15="gallery";s_analytics.firstLoad=1;}}
if(document.URL.toLowerCase().indexOf('/top10gallery')>-1)
{if(s_analytics.pageName.indexOf(':top10gallery')>-1)
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);s_analytics.pageName=s_analytics.pageName.replace(':top10gallery',':gallery:top10');s_analytics.pageName=s_analytics.pageName+':photo page';s_analytics.prop15="gallery";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('list-gallery')>-1)
{if(s_analytics.pageName.indexOf(':list-gallery')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':list-gallery',':lists');s_analytics.pageName=s_analytics.pageName+':catelog';s_analytics.prop15="lists";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('lists')>-1)
{if((s_analytics.pageName.indexOf(':lists')>-1))
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);s_analytics.pageName=s_analytics.pageName+':'+'photo page';s_analytics.prop15="lists";s_analytics.firstLoad=1;}}
if((document.URL.indexOf('/stats')>-1&&document.URL.indexOf('/team')==-1&&(document.URL.indexOf('/player')==-1)||s_analytics.eVar75.indexOf('teamstats')>-1||s_analytics.eVar75.indexOf('sortabletracktypestats')>-1||s_analytics.eVar75.indexOf('sortabletrackstats')>-1||s_analytics.eVar75.indexOf('sortablestats')>-1||s_analytics.eVar75.indexOf('sortableracestats')>-1||s_analytics.eVar75.indexOf('/nba/dailyleaders')>-1||s_analytics.eVar75.indexOf('/weeklyleaders')>-1))
{if(s_analytics.pageName.indexOf(':stats')>-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
if(s_analytics.pageName.indexOf(':statsteam')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':statsteam',':stats:team')}
if(s_analytics.pageName.indexOf(':sortablestats')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':sortablestats',':stats')+":catelog";}
if(s_analytics.pageName.indexOf(':sortableracestats')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':sortableracestats',':stats:race')+":catelog";}
if(s_analytics.pageName.indexOf(':sortabletracktypestats')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':sortabletracktypestats',':stats:track type')+":catelog";}
if(s_analytics.pageName.indexOf(':sortabletrackstats')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':sortabletrackstats',':stats:track')+":catelog";}
if(s_analytics.pageName.indexOf(':teamstats')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':teamstats',':stats:team')+":catelog";}
if(s_analytics.pageName.indexOf(':weeklyleaders')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':weeklyleaders',':stats:weeklyleaders')+":catelog";}
if(s_analytics.pageName.indexOf(':nascar:national')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':national',':nationwide');}
if(s_analytics.pageName.indexOf(':nba:dailyleaders')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':dailyleaders',':stats:dailyleaders')+":catelog";}
s_analytics.prop15="stats";s_analytics.firstLoad=1;}
if(s_analytics.eVar75.indexOf('/powerrankings')>-1)
{if(s_analytics.pageName.indexOf(':powerrankings')>-1)
{if(s_analytics.getQueryParam('powerRankingsType')&&s_analytics.pageName.indexOf(':powerrankings:')==-1)
{s_analytics.pageName=s_analytics.pageName+":"+s_analytics.getQueryParam('powerRankingsType').toLowerCase();}
else
{s_analytics.pageName=s_analytics.pageName.replace(':powerrankings',':powerrankings:foxsports1')}
if(s_analytics.pageName.indexOf(':20')>-1)
{s_analytics.pageName=s_analytics.pageName+":landing";}
else
{s_analytics.pageName=s_analytics.pageName+":catelog";}
s_analytics.prop15="power rankings";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/standings')>-1)
{if(s_analytics.pageName.indexOf(':standings')>-1&&s_analytics.pageName.indexOf(':standings:')==-1&&s_analytics.pageName.indexOf(':olympics')==-1)
{s_analytics.pageName=s_analytics.pageName+":division:current year:landing";s_analytics.firstLoad=1;}
else if(s_analytics.pageName.indexOf(':olympics')==-1)
{s_analytics.pageName=s_analytics.pageName+":current year:landing";s_analytics.firstLoad=1;}
else
{s_analytics.pageName=s_analytics.pageName+":landing";s_analytics.firstLoad=1;}
if(s_analytics.getQueryParam('year'))
{s_analytics.pageName=s_analytics.pageName.replace('current year:landing',s_analytics.getQueryParam('year')+':landing')}
if(s_analytics.pageName.indexOf(':standings')>-1&&s_analytics.pageName.indexOf(':fantasy')==-1)
{s_analytics.prop15="standings"
s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/teams')>-1&&document.URL.indexOf('.com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':teams')>-1&&s_analytics.pageName.indexOf(':teams:')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="team";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/team')>-1&&document.URL.indexOf('/teams')==-1&&document.URL.indexOf('.com/fantasy')==-1&&s_analytics.pageName.indexOf(':foxsoccer')==-1)
{if(s_analytics.pageName.indexOf(':team')>-1)
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);if(s_analytics.pageName.split(':').length==4)
{s_analytics.pageName=s_analytics.pageName+":front:landing";}
else
{s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="team";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/teams')>-1&&document.URL.indexOf('/foxsoccer')>-1&&document.URL.indexOf('.com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':teams')>-1&&s_analytics.pageName.split(':').length>=6)
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop)+":landing";if(s_analytics.pageName.split(':').length==5)
{s_analytics.pageName=s_analytics.pageName+":front:landing";}
if(s_analytics.pageName.indexOf(':teamstats')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':teamstats',':stats:team')+":landing";}
s_analytics.prop15="team";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/foxsoccer')>-1&&document.URL.indexOf('.com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':transfers')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':transfers',':teams:transfers')+":landing";s_analytics.prop15="transfers";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/driver')>-1&&document.URL.indexOf('.com/fantasy')==-1&&document.URL.indexOf('.asp')==-1)
{if(s_analytics.pageName.indexOf(':drivers')>-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
if(s_analytics.pageName.indexOf('national:drivers')>-1)
{s_analytics.pageName=s_analytics.pageName.replace('national:','nationwide:');}
if(s_analytics.pageName.indexOf(':driver')>-1&&s_analytics.pageName.indexOf(':drivers')==-1)
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);if(s_analytics.pageName.split(':').length==5)
{s_analytics.pageName=s_analytics.pageName+":front:landing";}
else
{s_analytics.pageName=s_analytics.pageName+":landing";}}
s_analytics.prop15="driver";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/golf')>-1&&document.URL.indexOf('com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':playerdirectory')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':page',':players')
s_analytics.pageName=s_analytics.pageName.replace(':playerdirectory',':directory')
if(s_analytics.getQueryParam('sport'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('sport').toLowerCase();}
else
{s_analytics.pageName=s_analytics.pageName+':pga';}
s_analytics.firstLoad=1;}
else if(s_analytics.pageName.indexOf(':page')>-1)
{s_analytics.pageName=s_analytics.pageName+":landing";s_analytics.prop15="golf";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/player')>-1&&document.URL.indexOf('.com/fantasy')==-1&&document.URL.indexOf('.asp')==-1)
{if(s_analytics.pageName.indexOf(':player-directory')>-1&&s_analytics.pageName.indexOf(':player:')==-1)
{if(s_analytics.getQueryParam('sport'))
{s_analytics.pageName=s_analytics.pageName.replace(s_analytics.siteID+':',s_analytics.siteID+':'+s_analytics.getQueryParam('sport')+':').toLowerCase();if(s_analytics.getQueryParam('sport').toLowerCase()=='cup')
{s_analytics.pageName=s_analytics.pageName.replace(':cup',':nascar:cup');}
if(s_analytics.getQueryParam('sport').toLowerCase()=='truck')
{s_analytics.pageName=s_analytics.pageName.replace(':truck',':nascar:truck');}
if(s_analytics.getQueryParam('sport').toLowerCase()=='national')
{s_analytics.pageName=s_analytics.pageName.replace(':national',':nascar:nationwide');}
if(s_analytics.getQueryParam('sport').toLowerCase()=='cfb')
{s_analytics.pageName=s_analytics.pageName.replace(':cfb',':collegefootball');}
if(s_analytics.getQueryParam('sport').toLowerCase()=='cbk')
{s_analytics.pageName=s_analytics.pageName.replace(':cbk',':collegebasketball');}}
if(s_analytics.getQueryParam('letter'))
{s_analytics.pageName=s_analytics.pageName.replace(':player-directory',':directory:'+s_analytics.getQueryParam('letter')).toLowerCase()+':catelog';}
else
{s_analytics.pageName.replace(':player-directory',':directory')
s_analytics.pageName=s_analytics.pageName+":a:catelog";}
s_analytics.prop15="directory";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':players')>-1)
{if(s_analytics.pageName.indexOf(':tennis')>-1)
{if(s_analytics.getQueryParam('league')&&s_analytics.getQueryParam('league').toLowerCase()=='wta')
{s_analytics.pageName=s_analytics.pageName+":women";}
else
{s_analytics.pageName=s_analytics.pageName+":men";}}
else if(s_analytics.getQueryParam('sp_q'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('sp_q').toLowerCase()+":catelog";}
else if(s_analytics.pageName.indexOf(':golf')>-1)
{s_analytics.prop15="directory";s_analytics.pageName=s_analytics.pageName+":catelog";}
else
{s_analytics.pageName=s_analytics.pageName+":catelog";}}
if(s_analytics.pageName.indexOf(':player')>-1&&s_analytics.pageName.indexOf(':playerDirectory')==-1&&s_analytics.pageName.indexOf(':players')==-1)
{s_analytics.pageNameStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop);if(s_analytics.pageName.split(':').length>=5)
{s_analytics.pageName=s_analytics.pageName+":landing";}
else
{s_analytics.pageName=s_analytics.pageName+":profile:landing";}}
if(!s_analytics.prop15)
{s_analytics.prop15="player";}
s_analytics.firstLoad=1;}
if(document.URL.indexOf('.com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':drivechart')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':drivechart',':scores:drivechart');s_analytics.prop15="drivechart";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':gametrax')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':gametrax',':scores:gametrax');s_analytics.prop15="gametrax";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':boxscore')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':boxscore',':scores:boxscore');s_analytics.prop15="boxscore";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':playbyplay')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':playbyplay',':scores:playbyplay');s_analytics.prop15="play by play";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':depthchart')>-1&&s_analytics.pageName.indexOf(':team')==-1)
{s_analytics.pageName=s_analytics.pageName.replace(':depthchart',':scores:depthchart')+":landing";s_analytics.prop15="depth chart";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':odds')>-1&&s_analytics.pageName.indexOf(':team')==-1)
{s_analytics.pageName=s_analytics.pageName.replace(':odds',':scores:odds');s_analytics.prop15="odds";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':headtoheadteamresults')>-1&&s_analytics.pageName.indexOf(':team')==-1)
{s_analytics.pageName=s_analytics.pageName.replace(':headtoheadteamresults',':scores:headtohead');s_analytics.prop15="head to head";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':scores')>-1&&s_analytics.pageName.indexOf(':team')==-1&&s_analytics.pageName.indexOf(':depthchart')==-1&&s_analytics.pageName.indexOf(':player')==-1)
{if(s_analytics.pageName==s_analytics.siteID+":scores")
{s_analytics.pageName=s_analytics.pageName.replace(s_analytics.siteID+':',s_analytics.siteID+':all:');}
if(s_analytics.pageName.indexOf('collegefootball')>-1&&s_analytics.getQueryParam('conference'))
{s_analytics.pageName=s_analytics.pageName.replace('collegefootball:','collegefootball:conf '+s_analytics.getQueryParam('conference')+':');}
else if(s_analytics.pageName.indexOf('collegefootball')>-1&&s_analytics.pageName.indexOf(':drivechart')==-1)
{s_analytics.pageName=s_analytics.pageName.replace('collegefootball:','collegefootball:conf all:');}
if(s_analytics.pageName.indexOf('collegebasketball')>-1&&s_analytics.getQueryParam('conference'))
{s_analytics.pageName=s_analytics.pageName.replace('collegebasketball:','collegebasketball:conf '+s_analytics.getQueryParam('conference')+':');}
else if(s_analytics.pageName.indexOf('collegebasketball')>-1&&s_analytics.pageName.indexOf(':drivechart')==-1)
{s_analytics.pageName=s_analytics.pageName.replace('collegebasketball:','collegebasketball:conf all:');}
s_analytics.pageName=s_analytics.pageName+":landing";if(!s_analytics.prop15)
{s_analytics.prop15="scoreboard";}
s_analytics.firstLoad=1;}}
if(document.URL.indexOf('.com/fantasy')==-1&&document.URL.indexOf('/schedule')>-1&&document.URL.indexOf('/team')==-1)
{if(s_analytics.pageName.indexOf(':olympics')>-1)
{if(s_analytics.getQueryParam('sport'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('sport').toLowerCase();}
else
{s_analytics.pageName=s_analytics.pageName+':all';}}
else if(s_analytics.pageName.indexOf(':golf')>-1)
{if(s_analytics.getQueryParam('league'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('league').toLowerCase()}
else
{s_analytics.pageName=s_analytics.pageName+":pga"}}
else if(s_analytics.pageName.indexOf(':tennis')>-1&&s_analytics.getQueryParam('league').toLowerCase()=='wta')
{s_analytics.pageName=s_analytics.pageName+":women";}
else if(s_analytics.pageName.indexOf(':tennis')>-1)
{s_analytics.pageName=s_analytics.pageName+":men";}
if(s_analytics.pageName.indexOf(':schedule')>-1&&s_analytics.pageName.split(':').length!=5)
{s_analytics.pageName=s_analytics.pageName+":schedule page";}
s_analytics.prop15="schedule";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/tvschedule')>-1)
{if(s_analytics.pageName.indexOf(':tvschedule')>-1)
{s_analytics.pageName=s_analytics.pageName+":schedule page";s_analytics.prop15="schedule";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/fixtures')>-1)
{if(s_analytics.pageName.indexOf(':foxsoccer')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':fixtures',':schedule');if(s_analytics.pageName.indexOf(':teams')==-1)
{if(s_analytics.getQueryParam('month')&&s_analytics.getQueryParam('year'))
{if(s_analytics.getQueryParam('year'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('year');}
if(s_analytics.getQueryParam('month'))
{s_analytics.pageName=s_analytics.pageName+'_'+s_analytics.getQueryParam('month');}}
s_analytics.pageName=s_analytics.pageName+":schedule page";s_analytics.prop15="schedule";}}
s_analytics.firstLoad=1;}
if(document.URL.indexOf('/transactions')>-1)
{if(s_analytics.pageName.indexOf(':team')==-1&&s_analytics.pageName.indexOf(':fantasy')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="transactions";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/writer')>-1)
{if(s_analytics.pageName.indexOf(':index')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':index','');}
else if(s_analytics.pageName.indexOf(':foxsoccer')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':foxsoccer','');}
else(s_analytics.pageName.indexOf(':index')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
s_analytics.prop15="writer";s_analytics.firstLoad=1;}
if(document.URL.indexOf('foxsports.com')>-1)
{if(s_analytics.pageName.split(':').length==2&&s_analytics.pageName.indexOf(':garniermens')==-1&&s_analytics.pageName.indexOf(':boysinthehall')==-1&&s_analytics.pageName.indexOf(':speed')==-1)
{s_analytics.pageName=s_analytics.pageName+":section front";s_analytics.prop15="section front";s_analytics.firstLoad=1;}
else if(s_analytics.pageName.indexOf(':foxsoccer')>-1&&s_analytics.pageName.split(':').length==3)
{s_analytics.pageName=s_analytics.pageName+":section front";s_analytics.prop15="section front";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('.com/fantasy')>-1)
{if(s_analytics.pageName!=s_analytics.siteID+":fantasy:section front"&&!s_analytics.prop15)
{s_analytics.prop15="fantasy";}
else if(s_analytics.prop15!="section front")
{s_analytics.prop15="fantasy "+s_analytics.prop15;}
if(s_analytics.pageName.indexOf(':commissioner')>-1&&s_analytics.pageName.indexOf(':commissioner:')==-1)
{s_analytics.pageName=s_analytics.pageName+":landing";}
if(s_analytics.pageName.indexOf(':research')>-1&&s_analytics.pageName.indexOf(':research:')==-1)
{s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.firstLoad=1;}
if(document.URL.indexOf('/press')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':press:section front',':about:press');if(s_analytics.getQueryParam('year'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('year');}
else
{s_analytics.pageName=s_analytics.pageName+':current year';}
s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="about";s_analytics.firstLoad=1;}
if(s_analytics.eVar75.indexOf('/topics')>-1)
{if(s_analytics.pageName.indexOf(':video')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':m:',':');s_analytics.pageName=s_analytics.pageName.replace(':catelog',':landing')
s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" video: "+s_analytics.pageName.split(':').slice(4,5).join(':').split('-').join(' ');s_analytics.pageName=s_analytics.pageName.split(':').slice(0,3).join(':')+":channel";s_analytics.pageName=s_analytics.pageName.replace(':topics:video',':video:topics');s_analytics.prop15="video";}
if(s_analytics.getQueryParam('mediatype')&&s_analytics.pageName.indexOf(':video')==-1)
{if(s_analytics.getQueryParam('mediatype'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('mediatype').toLowerCase()+":catelog";}
if(s_analytics.getQueryParam('mediatype').toLowerCase()=='text')
{s_analytics.pageName=s_analytics.pageName.replace(':text',':story');}}
else if(!s_analytics.getQueryParam('mediatype')&&s_analytics.pageName.indexOf(':video')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
if(s_analytics.pageName.indexOf(':section front')==-1&&s_analytics.eVar75.indexOf('.htm')==-1&&s_analytics.pageName.indexOf(':video:topics')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
if(s_analytics.pageName.indexOf(':?')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':?','');}
if(!s_analytics.prop15)
{s_analytics.prop15="topics";}
if(s_analytics.pageName.indexOf(':catelog:catelog')>-1||s_analytics.pageName.indexOf(':section front:catelog')>-1)
{s_analytics.pageName=s_analytics.pageName.split(':').slice(0,-1).join(':');}
s_analytics.firstLoad=1;}
if(document.URL.indexOf('/olympics')>-1&&s_analytics.pageName.indexOf('com:fantasy')==-1)
{s_analytics.siteDomain=document.domain.split('.').slice(0,1).join(':');if(s_analytics.siteDomain&&s_analytics.siteDomain.indexOf('msn')==-1&&s_analytics.siteDomain.indexOf('www')==-1)
{s_analytics.pageName=s_analytics.pageName.replace(':olympics',':olympics:'+s_analytics.siteDomain)}
if(s_analytics.pageName.indexOf(':events')>-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="events";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf('medals')>-1)
{if(s_analytics.getQueryParam('sport')||s_analytics.getQueryParam('country'))
{if(s_analytics.getQueryParam('sport'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('sport').toLowerCase();}
else if(s_analytics.getQueryParam('country'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('country').toLowerCase();}
s_analytics.pageName=s_analytics.pageName+":catelog";}
else
{s_analytics.pageName=s_analytics.pageName+":all:catelog";}
s_analytics.prop15="medals";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':athlete-directory')>-1)
{if(s_analytics.getQueryParam('letter'))
{s_analytics.pageName=s_analytics.pageName.replace(':athlete-directory',':directory:'+s_analytics.getQueryParam('letter')).toLowerCase()+':catelog';}
else
{s_analytics.pageName=s_analytics.pageName.replace(':athlete-directory',':directory')+":a:catelog";}
s_analytics.prop15="directory";s_analytics.firstLoad=1;}
if(s_analytics.pageName.indexOf(':social-media')>-1)
{s_analytics.pageName=s_analytics.pageName+":channel";s_analytics.prop15="social hub";s_analytics.firstLoad=1;}
if(s_analytics.pageName.split(':').length==3&&s_analytics.pageName.indexOf(':section front')==-1)
{s_analytics.pageName=s_analytics.pageName+":channel"
s_analytics.prop15="olympics";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/results')>-1&&document.URL.indexOf('.com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':tennis')>-1)
{if(s_analytics.getQueryParam('league')&&s_analytics.getQueryParam('league').toLowerCase()=='wta')
{s_analytics.pageName=s_analytics.pageName+":women";}
else
{s_analytics.pageName=s_analytics.pageName+":men";}
s_analytics.pageName=s_analytics.pageName+":landing";}
else if(s_analytics.pageName.indexOf(':nascar')>-1||s_analytics.pageName.indexOf(':motor')>-1)
{if(s_analytics.getQueryParam('year'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('year');}
else
{s_analytics.pageName=s_analytics.pageName+':current year'}
if(s_analytics.getQueryParam('gameId'))
{s_analytics.prop68=s_analytics.getQueryParam('gameId').toLowerCase();}
else
{s_analytics.prop68="current race";}
if(s_analytics.pageName.indexOf(':national')>-1)
{s_analytics.pageName=s_analytics.pageName.replace('national','nationwide');}
s_analytics.pageName=s_analytics.pageName+":landing";}
else if(s_analytics.pageName.indexOf(':olympics')>-1)
{if(s_analytics.getQueryParam('sport'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('sport').toLowerCase();s_analytics.prop68=s_analytics.getQueryParam('sport').toLowerCase();}
if(s_analytics.getQueryParam('id'))
{s_analytics.prop68=s_analytics.prop68+'_'+s_analytics.getQueryParam('id').toLowerCase();}
else if(!s_analytics.getQueryParam('sport')&&!s_analytics.getQueryParam('id'))
{s_analytics.pageName=s_analytics.pageName+':all'
s_analytics.prop68="all sports";}
s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="results";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/rank')>-1&&document.URL.indexOf('/tennis')>-1&&document.URL.indexOf('com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':tennis')>-1)
{if(s_analytics.getQueryParam('league')&&s_analytics.getQueryParam('league').toLowerCase()=='wta')
{s_analytics.pageName=s_analytics.pageName.replace(':rank',':ranking:women');}
else
{s_analytics.pageName=s_analytics.pageName.replace(':rank',':ranking:men')}
s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="ranking";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/injuries')>-1&&document.URL.indexOf('com/fantasy')==-1)
{if(s_analytics.pageName.indexOf(':player')==-1&&s_analytics.pageName.indexOf(':team')==-1&&s_analytics.pageName.indexOf(':story')==-1&&s_analytics.pageName.indexOf(':topics')==-1)
{if(s_analytics.pageName.indexOf(':injuries')>-1&&s_analytics.pageName.indexOf(':injuries:')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
s_analytics.prop15="injuries";s_analytics.firstLoad=1;}}
if(document.URL.indexOf('/poll')>-1&&document.URL.indexOf('com:fantasy')==-1&&document.URL.indexOf('blog')==-1)
{if(s_analytics.pageName.indexOf(':poll')>-1&&s_analytics.pageName.indexOf(':blog')==-1)
{if(s_analytics.getQueryParam('poll'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('poll').toLowerCase();}
else
{s_analytics.pageName=s_analytics.pageName+':front';}
if(s_analytics.pageName.indexOf(':poll')>-1&&s_analytics.pageName.indexOf(':polls')==-1)
{s_analytics.pageName=s_analytics.pageName.replace(':poll:',':polls:');}
s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="polls";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/draft')>-1&&document.URL.indexOf('com/fantasy')==-1&&document.URL.indexOf('laces-out')==-1)
{if(s_analytics.pageName.indexOf(':draft-tracker')>-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";}
else if(s_analytics.pageName.indexOf(':draft')>-1&&s_analytics.pageName.indexOf(':prospect')>-1)
{s_analytics.pageName=s_analytics.pageName+":landing";}
s_analytics.prop15="draft";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/other')>-1)
{if(s_analytics.pageName.indexOf(':lists')>-1||s_analytics.pageName.indexOf(':gallery')>-1||s_analytics.pageName.indexOf(':story')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':other',':sports');}
else if(s_analytics.pageName.indexOf(':privacy-policy')>-1||s_analytics.pageName.indexOf(':terms-of-use'))
{s_analytics.prop15="about";s_analytics.pageName=s_analytics.pageName.replace(':other:page',':about')+":landing";}
else if(s_analytics.pageName.indexOf(':page')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':page','')+':landing';}
s_analytics.firstLoad=1;}
if(document.URL.indexOf('com/home')>-1&&document.URL.indexOf('/story')==-1)
{if(s_analytics.pageName.indexOf(':site-index')>-1)
{s_analytics.siteIndexTemp=s_analytics.pageName.split('-').slice(-1).join(':')
s_analytics.pageName=s_analytics.pageName.split(':').slice(0,1).join(':')+":about:site map"+":"+s_analytics.siteIndexTemp+":landing";s_analytics.prop15="site map";}
else if(s_analytics.pageName==s_analytics.siteID+":home:page:fsn")
{s_analytics.pageName=s_analytics.siteID+":about:networks:fox sports:catelog";s_analytics.prop15="about";}
s_analytics.firstLoad=1;}
if(document.URL.indexOf('/event')>-1&&document.URL.indexOf('/events')==-1)
{s_analytics.pageName=s_analytics.pageName+":landing";s_analytics.prop15="event";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/track')>-1&&document.URL.indexOf('/nascar')>-1)
{if(s_analytics.pageName.indexOf(':track')>-1&&s_analytics.pageName.indexOf(':tracks')==-1)
{if(s_analytics.getQueryParam('trackId'))
{s_analytics.pageName=s_analytics.pageName+':'+s_analytics.getQueryParam('trackId');}
s_analytics.pageName=s_analytics.pageName+":landing";}
else
{s_analytics.pageName=s_analytics.pageName+":catelog";}
s_analytics.prop15="race tracks";s_analytics.firstLoad=1;}
if(document.URL.indexOf('com/games')>-1&&document.URL.indexOf('com/fantasy')==-1)
{s_analytics.pageName=s_analytics.pageName+":landing";s_analytics.prop15="games";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/tv')>-1&&document.URL.indexOf('com/fantasy')==-1&&document.URL.indexOf('tvschedule')==-1&&document.URL.indexOf('/schedule')==-1&&document.URL.indexOf('tv-')==-1)
{s_analytics.pageName=s_analytics.pageName+":landing";s_analytics.prop15="tv subscription";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/advisors')>-1&&document.URL.indexOf('com/fantasy')==-1)
{s_analytics.pageName=s_analytics.pageName+":catelog";s_analytics.prop15="advisor";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/account')>-1)
{s_analytics.pageName=s_analytics.pageName+":landing";s_analytics.prop15="member";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/watch')>-1&&document.URL.indexOf('/video')>-1)
{s_analytics.prop15="video";s_analytics.firstLoad=1;}
if(document.URL.indexOf('/super-bowl')>-1)
{s_analytics.pageName=s_analytics.pageName.replace(':super',':nfl:super')
s_analytics.firstLoad=1;}
if(document.URL.indexOf('/super-bowl')>-1&&s_analytics.pageName.indexOf(':section front')==-1)
{s_analytics.pageName=s_analytics.pageName+':landing page';s_analytics.prop15="super bowl";s_analytics.firstLoad=1;}
if(s_analytics.eVar75.indexOf('/fan-vote')>-1&&s_analytics.pageName.indexOf(':story')==-1)
{s_analytics.pageName=s_analytics.siteID+":nfl:super bowl:fan vote:landing page";s_analytics.prop15="super bowl";s_analytics.firstLoad=1;}
}
if(document.URL.indexOf('foxsports.com/search')>-1)
{s_analytics.pageName=s_analytics.siteID+":search:search results";s_analytics.prop15="search";if(s_analytics.getQueryParam('sp_q')||s_analytics.getQueryParam('q'))
{s_analytics.prop1=s_analytics.getQueryParam('sp_q,q').toLowerCase().split('%20').join(' ');}
if((s_analytics.getQueryParam('sp_q')||s_analytics.getQueryParam('q'))&&document.getElementsByClassName('ez-error').length)
{s_analytics.prop1='zero:'+s_analytics.getQueryParam('sp_q,q').toLowerCase().split('%20').join(' ');}
if(s_analytics.getQueryParam('mediaType')||s_analytics.getQueryParam('f3')||s_analytics.getQueryParam('daterange'))
{s_analytics.prop18=s_analytics.getQueryParam('mediaType,daterange,f3',':').toLowerCase().split('%20').join(' ');}
if(s_analytics.getQueryParam('start'))
{s_analytics.prop19='page: '+(Number(s_analytics.getQueryParam('start'))/10+1);}
else
{s_analytics.prop19="page: 1";}}
if(s_analytics.pageName.indexOf('.asp')>-1||s_analytics.pageName.indexOf('.htm')>-1)
{s_analytics.pageNameStop=s_analytics.pageName.indexOf('.');s_analytics.pageName=s_analytics.pageName.slice(0,s_analytics.pageNameStop).toLowerCase();}
s_analytics.pageName=s_analytics.pageName.split('-').join(' ');if(document.URL.indexOf(".com/pageNotFound")>-1||document.URL.indexOf('.com/maintenance/maintenance.html')>-1)
{s_analytics.pageName="";s_analytics.pageType="errorPage";s_analytics.prop15="error page"}
if(s_analytics.pageName.indexOf(':photo page')>-1)
{if(s_analytics.eVar75.indexOf('#photo-title')>-1&&s_analytics.eVar75.indexOf('&photo')>-1)
{if(s_analytics.pageName.indexOf(':lists')>-1)
{s_analytics.prop51Start=s_analytics.eVar75.indexOf('lists/')+6;s_analytics.prop51Stop=s_analytics.eVar75.indexOf('#photo-');s_analytics.prop51=s_analytics.eVar75.slice(s_analytics.prop51Start,s_analytics.prop51Stop).split('-').join(' ');s_analytics.prop52Start=s_analytics.eVar75.indexOf('&photo')+7;s_analytics.prop52Stop=s_analytics.eVar75.length;s_analytics.prop52=s_analytics.eVar75.slice(s_analytics.prop52Start,s_analytics.prop52Stop);s_analytics.prop52Start=s_analytics.eVar75.indexOf('#photo')+13;s_analytics.prop52Stop=s_analytics.eVar75.indexOf('&photo');s_analytics.prop52=s_analytics.prop52+':'+s_analytics.eVar75.slice(s_analytics.prop52Start,s_analytics.prop52Stop).split('-').join(' ').split('%25').join('%').split('+').join(' ');}
else if(s_analytics.pageName.indexOf(':gallery')>-1)
{s_analytics.prop51Start=s_analytics.eVar75.indexOf('gallery/')+8;s_analytics.prop51Stop=s_analytics.eVar75.indexOf('#photo-');s_analytics.prop51=s_analytics.eVar75.slice(s_analytics.prop51Start,s_analytics.prop51Stop).split('-').join(' ');s_analytics.prop52Start=s_analytics.eVar75.indexOf('&photo')+7;s_analytics.prop52Stop=s_analytics.eVar75.length;s_analytics.prop52=s_analytics.eVar75.slice(s_analytics.prop52Start,s_analytics.prop52Stop);s_analytics.prop52Start=s_analytics.eVar75.indexOf('#photo')+13;s_analytics.prop52Stop=s_analytics.eVar75.indexOf('&photo');s_analytics.prop52=s_analytics.prop52+':'+s_analytics.eVar75.slice(s_analytics.prop52Start,s_analytics.prop52Stop).split('-').join(' ').split('%25').join('%').split('+').join(' ');}
else if(s_analytics.pageName.indexOf(':tennis')>-1&&(typeof fsAnaSplit!="undefined"))
{var eVar35Stop=fsAnaSplit[10];var eVar35StopArray=eVar35Stop.split('=');if(eVar35StopArray[1]&&s_analytics.pageName.indexOf(s_analytics.siteID+':fantasy')==-1)
{s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" gallery: "+eVar35StopArray[1].toLowerCase();s_analytics.prop51=eVar35StopArray[1].toLowerCase();}}}
else
{if(s_analytics.pageName.indexOf(':lists')>-1)
{s_analytics.prop51Start=s_analytics.eVar75.indexOf('lists/')+6;s_analytics.prop51Stop=s_analytics.eVar75.indexOf('#photo-');s_analytics.prop51=s_analytics.eVar75.slice(s_analytics.prop51Start,s_analytics.prop51Stop).split('-').join(' ');s_analytics.prop52="default photo";}
else if(s_analytics.pageName.indexOf(':gallery')>-1)
{s_analytics.prop51Start=s_analytics.eVar75.indexOf('gallery/')+8;s_analytics.prop51Stop=s_analytics.eVar75.indexOf('#photo-');if(s_analytics.prop51Stop==-1){s_analytics.prop51=s_analytics.descFileName.split('-').join(' ');}
else{s_analytics.prop51=s_analytics.eVar75.slice(s_analytics.prop51Start,s_analytics.prop51Stop).split('-').join(' ');}
s_analytics.prop52="default photo";}
}}
if(s_analytics.prop51||s_analytics.prop52)
{if(s_analytics.prop51)
{s_analytics.prop51=s_analytics.prop51.toLowerCase();s_analytics.eVar51="D=c51";s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" gallery: "+s_analytics.prop51;}
else
{s_analytics.prop51="no gallery id";s_analytics.eVar51="D=c51";}
if(s_analytics.prop52)
{s_analytics.prop52=s_analytics.prop52.toLowerCase();s_analytics.eVar52="D=c52";}
else
{s_analytics.prop52="no photo id";s_analytics.eVar52="D=c52";}
s_analytics.events=s_analytics.apl(s_analytics.events,"event58",",",2)}
if(!s_analytics.eVar35&&(typeof fsAnalyticsDescription!="undefined")&&s_analytics.pageName.indexOf(':writer')==-1&&s_analytics.pageName.indexOf(s_analytics.siteID+':fantasy')==-1&&s_analytics.pageName.indexOf(':team')==-1&&s_analytics.pageName.indexOf(':player')==-1)
{var eVar35Stop=fsAnalyticsDescription[10];var eVar35StopArray=eVar35Stop.split('=');if(eVar35StopArray[1]&&s_analytics.pageName.indexOf(s_analytics.siteID+':fantasy')==-1)
{s_analytics.eVar13=eVar35StopArray[1].toLowerCase();s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" story: "+eVar35StopArray[1].toLowerCase();}}
if(s_analytics.eVar13)
{s_analytics.prop13="D=v13";}
if(s_analytics.eVar43)
{s_analytics.prop43="D=v43";}
if(typeof fsAnalyticsDescription!="undefined")
{s_analytics.contentArray=fsAnalyticsDescription.split('&');}
if(s_analytics.eVar35&&(!s_analytics.prop36||!s_analytics.prop37||!s_analytics.prop38||!s_analytics.prop39)&&(typeof fsAnalyticsDescription!="undefined"))
{s_analytics.eVar35=s_analytics.eVar35.split('-').join(' ').toLowerCase();if(s_analytics.pageName.indexOf(s_analytics.siteID+':fantasy')==-1&&s_analytics.pageName.indexOf(':story')>-1)
{s_analytics.eVar13=s_analytics.eVar35;s_analytics.eVar35=s_analytics.pageName.split(':').slice(1,2).join(':')+" story: "+s_analytics.eVar35.toLowerCase();}
if(s_analytics.eVar35)
{s_analytics.eVar35=s_analytics.eVar35.split('-').join(' ').toLowerCase();s_analytics.prop35="D=v35";}
if(s_analytics.eVar13)
{s_analytics.prop13="D=v13";}
if(s_analytics.eVar43)
{s_analytics.prop43="D=v43";}
if(s_analytics.pageName.indexOf(':photo')==-1&&s_analytics.pageName.indexOf(':haymaker')==-1)
{var eVar36Stop=s_analytics.contentArray[6];var eVar36StopArray=eVar36Stop.split('=');s_analytics.eVar36=eVar36StopArray[1];if(s_analytics.eVar36)
{s_analytics.eVar36=s_analytics.eVar36.toLowerCase();s_analytics.prop36="D=v36";}
else
{s_analytics.eVar36="no content id";s_analytics.prop36="D=v36";}
if(typeof fsAnalyticsDescription!="undefined")
{var eVar38Stop=s_analytics.contentArray[10];var eVar38StopArray=eVar38Stop.split('=');}
s_analytics.eVar38=eVar38StopArray[1];if(s_analytics.eVar38)
{s_analytics.prop38="D=v38";}
else
{s_analytics.eVar38="no pub date";s_analytics.prop38="D=v38";}
if(typeof fsAnalyticsDescription!="undefined")
{var eVar39Stop=s_analytics.contentArray[9];var eVar39StopArray=eVar39Stop.split('=');}
s_analytics.eVar39=eVar39StopArray[1].toLowerCase();if(s_analytics.eVar39)
{s_analytics.eVar39=s_analytics.eVar39.toLowerCase();s_analytics.prop39="D=v39";}
else
{s_analytics.eVar39="no content source";s_analytics.prop39="D=v39";}}
else
{var eVar36Stop=s_analytics.contentArray[6];var eVar36StopArray=eVar36Stop.split('=');s_analytics.eVar36=eVar36StopArray[1];if(s_analytics.eVar36)
{s_analytics.eVar36=s_analytics.eVar36.toLowerCase();s_analytics.prop36="D=v36";}
else
{s_analytics.eVar36="no content id";s_analytics.prop36="D=v36";}
if(typeof fsAnalyticsDescription!="undefined")
{var eVar38Stop=s_analytics.contentArray[11];var eVar38StopArray=eVar38Stop.split('=');}
s_analytics.eVar38=eVar38StopArray[1];if(s_analytics.eVar38)
{s_analytics.prop38="D=v38";}
else
{s_analytics.eVar38="no pub date";s_analytics.prop38="D=v38";}
if(typeof fsAnalyticsDescription!="undefined")
{var eVar39Stop=s_analytics.contentArray[10];var eVar39StopArray=eVar39Stop.split('=');}
s_analytics.eVar39=eVar39StopArray[1].toLowerCase();if(s_analytics.eVar39)
{s_analytics.eVar39=s_analytics.eVar39.toLowerCase();s_analytics.prop39="D=v39";}
else
{s_analytics.eVar39="no content source";s_analytics.prop39="D=v39";}}}
if(s_analytics.pageName.indexOf(':watch')>-1&&s_analytics.pageName.indexOf(':videos')>-1)
{s_analytics.eVar35="video: "+s_analytics.pageName.split(':').slice(2,3).join(':').split('-').join(' ');}
if(s_analytics.pageName.indexOf(':watch')>-1&&s_analytics.pageName.indexOf(':section front')>-1)
{s_analytics.eVar35="";s_analytics.prop36="";s_analytics.prop37="";s_analytics.prop38="";s_analytics.prop39="";s_analytics.prop35="";s_analytics.eVar36="";s_analytics.eVar37="";s_analytics.eVar38="";s_analytics.eVar39="";}
if(s_analytics.pageName.indexOf('::')>-1)
{s_analytics.pageName=s_analytics.pageName.replace('::',':');}
if(s_analytics.pageName.indexOf(':player-directory')&&s_analytics.getQueryParam('position'))
{s_analytics.prop40="page: "+((Number(s_analytics.getQueryParam('position'))/50)+1);}
s_analytics.eVar2="D=pageName";s_analytics.serverStop=s_analytics.pageName.indexOf(':');s_analytics.channelStop=s_analytics.pageName.lastIndexOf(':');s_analytics.server=s_analytics.pageName.slice(0,s_analytics.serverStop);s_analytics.channel=s_analytics.pageName.slice(0,s_analytics.channelStop);s_analytics.hier1="D=pageName";if(!s_analytics.events)
{s_analytics.events="event2";}
else
{s_analytics.events=s_analytics.apl(s_analytics.events,"event2",",",2)}
s_analytics.prop6=s_analytics.channelExtractCust(":",1,2,s_analytics.channel,1);s_analytics.eVar6="D=c6";s_analytics.prop7=s_analytics.channelExtractCust(":",1,3,s_analytics.channel,1);s_analytics.eVar7="D=c7";s_analytics.prop8=s_analytics.channelExtractCust(":",1,4,s_analytics.channel,1);s_analytics.eVar8="D=c8";s_analytics.prop9=s_analytics.channelExtractCust(":",1,10,s_analytics.channel,1);s_analytics.eVar9="D=c9";s_analytics.hbx_lt="auto"
s_analytics.setupLinkTrack("prop21,prop22,prop23,prop24","SC_LINKS");s_analytics.downloadURL=s_analytics.downloadLinkHandler()
if(s_analytics.downloadURL)
{s_analytics.setupLinkTrack("prop21,prop22,prop23,prop24","SC_LINKS");s_analytics.linkTrackVars=s_analytics.apl(s_analytics.linkTrackVars,"prop5,eVar5,events",",",2);s_analytics.linkTrackEvents=s_analytics.apl(s_analytics.events,"event45",",",2);s_analytics.linkName=s_analytics.prop22.toLowerCase();s_analytics.prop22='download: '+s_analytics.prop22+' | '+s_analytics.downloadURL;s_analytics.prop5=s_analytics.prop22;s_analytics.eVar5='D=c5';s_analytics.events=s_analytics.linkTrackEvents;}
s_analytics.exitURL=s_analytics.exitLinkHandler()
if(s_analytics.exitURL)
{s_analytics.setupLinkTrack("prop21,prop22,prop23,prop24","SC_LINKS");s_analytics.linkTrackVars=s_analytics.apl(s_analytics.linkTrackVars,"prop21,prop22,prop23,prop24",",",2);s_analytics.linkName=s_analytics.prop22.toLowerCase();s_analytics.prop22='exit: '+s_analytics.prop22+' | '+s.exitURL;;}
if(!s_analytics.campaign)
{s_analytics.campaign=s_analytics.getQueryParam('rss,exid,cmp,cmpid');s_analytics.campaign=s_analytics.getValOnce(s_analytics.campaign,'s_campaign',0);}
else
{s_analytics.campaign=s_analytics.getValOnce(s_analytics.campaign,'s_campaign',0);}
if(s_analytics.campaign)
{s_analytics.events=s_analytics.apl(s_analytics.events,'event43',',',2);s_analytics.hier5=s_analytics.crossVisitParticipation(s_analytics.campaign,'s_campaign_stack','30','15','>','',1);}
if(!s_analytics.eVar23)
{s_analytics.eVar23=s_analytics.getQueryParam('intcmp');s_analytics.eVar23=s_analytics.getValOnce(s_analytics.eVar23,'s_evar23',0);}
else
{s_analytics.eVar23=s_analytics.getValOnce(s_analytics.eVar23,'s_evar23',0);}
if(s_analytics.eVar23)
{s_analytics.events=s_analytics.apl(s_analytics.events,'event42',',',2);}
if(!s_analytics.prop55)
{s_analytics.prop55="no sponsor";s_analytics.eVar55="D=c55";}
else
{if(s_analytics.prop55!='no sponsor')
{s_analytics.prop55=s_analytics.prop55.toLowerCase();s_analytics.eVar55="D=c55";s_analytics.events=s_analytics.apl(s_analytics.events,"event82",",",2);}}
if(s_analytics.prop1)
{s_analytics.events=s_analytics.apl(s_analytics.events,"event1",",",2);s_analytics.eVar1='D=c1';s_analytics.prop4=s_analytics.getPreviousValue(s_analytics.pageName,'gpv_pagename','');if(!s_analytics.prop4)
{s_analytics.prop4="no previous page value";}
s_analytics.eVar4="D=c4";}
if(s_analytics.prop18)
{s_analytics.events=s_analytics.apl(s_analytics.events,"event8",",",2);s_analytics.eVar18='D=c18';}
if(s_analytics.prop19)
{s_analytics.events=s_analytics.apl(s_analytics.events,"event9",",",2);s_analytics.eVar19='D=c19';}
if(!s_analytics.prop15)
{if(typeof fsAnalyticsPageType!="undefined")
{s_analytics.prop15=fsAnalyticsPageType.toLowerCase();}
else
{s_analytics.prop15="no page type";}}
var currentDate=new Date()
var year=currentDate.getFullYear()
s_analytics.prop11=s_analytics.getTimeParting('h','-8',year).toLowerCase();s_analytics.eVar11="D=c11";s_analytics.prop12=s_analytics.getTimeParting('d','-8',year).toLowerCase();s_analytics.eVar12="D=c12";if(s_analytics.pageName.indexOf(':team:')>-1)
{s_analytics.prop67=s_analytics.getQueryParam('q').split('-').join(' ').toLowerCase();s_analytics.eVar67="D=c67";}
if(s_analytics.pageName.indexOf(':teams:')>-1&&s_analytics.pageName.indexOf('foxsoccer')==-1)
{s_analytics.prop67Start=s_analytics.pageName.indexOf(':teams:')+7;s_analytics.prop67Stop=s_analytics.pageName.lastIndexOf(':');s_analytics.prop67=s_analytics.pageName.slice(s_analytics.prop67Start,s_analytics.prop67Stop).split('-').join(' ').toLowerCase();}
else if(s_analytics.pageName.indexOf(':teams:')>-1&&s_analytics.pageName.indexOf('foxsoccer')>-1)
{s_analytics.prop67Start=s_analytics.pageName.indexOf(':teams:')+7;s_analytics.pageNameTempStop=s_analytics.pageName.lastIndexOf(':');s_analytics.pageNameTemp=s_analytics.pageName.slice(0,s_analytics.pageNameTempStop);s_analytics.prop67Stop=s_analytics.pageNameTemp.lastIndexOf(':');s_analytics.prop67=s_analytics.pageName.slice(s_analytics.prop67Start,s_analytics.prop67Stop).split('-').join(' ').toLowerCase();}
if((s_analytics.pageName.indexOf(':driver:')>-1||s_analytics.pageName.indexOf(':player:'))>-1&&!s_analytics.prop54)
{if(s_analytics.getQueryParam('q'))
{s_analytics.prop54=s_analytics.getQueryParam('q').toLowerCase().split('-').join(' ');}
else if(s_analytics.pageName.indexOf(':driver')>-1||s_analytics.pageName.indexOf(':olympics')>-1||s_analytics.pageName.indexOf(':golf')>-1)
{s_analytics.prop54=s_analytics.pageName.split(':').slice(3,4).join(':').split('-').join(' ');}}
if(s_analytics.prop6&&!s_analytics.eVar6)s_analytics.eVar6="D=c6";if(s_analytics.prop7&&!s_analytics.eVar7)s_analytics.eVar7="D=c7";if(s_analytics.prop8&&!s_analytics.eVar8)s_analytics.eVar8="D=c8";if(s_analytics.prop9&&!s_analytics.eVar9)s_analytics.eVar9="D=c9";if(s_analytics.prop13&&!s_analytics.eVar13)s_analytics.eVar13="D=c13";if(s_analytics.prop15&&!s_analytics.eVar15)s_analytics.eVar15="D=c15";if(s_analytics.prop35&&!s_analytics.eVar35)s_analytics.eVar35="D=c35";if(s_analytics.prop36&&!s_analytics.eVar36)s_analytics.eVar36="D=c36";if(s_analytics.prop37&&!s_analytics.eVar37)s_analytics.eVar37="D=c37";if(s_analytics.prop38&&!s_analytics.eVar38)s_analytics.eVar38="D=c38";if(s_analytics.prop39&&!s_analytics.eVar39)s_analytics.eVar39="D=c39";if(s_analytics.prop42&&!s_analytics.eVar42)s_analytics.eVar42="D=c42";if(s_analytics.prop43&&!s_analytics.eVar43)s_analytics.eVar43="D=c43";if(s_analytics.prop54&&!s_analytics.eVar54)s_analytics.eVar54="D=c54";if(s_analytics.prop68&&!s_analytics.eVar68)s_analytics.eVar68="D=c68";if(s_analytics.prop13&&s_analytics.prop13.toLowerCase()!="no content title")
{s_analytics.events=s_analytics.apl(s_analytics.events,"event24",",",2)}
if(s_analytics.prop16)
{s_analytics.prop16=s_analytics.getValOnce(s_analytics.prop16,'s_prop16',0);}
if(s_analytics.prop16)
{s_analytics.eVar16="D=c16";s_analytics.events=s_analytics.apl(s_analytics.events,'event44',',',2)}
if(s_analytics.prop17)
{s_analytics.prop17=s_analytics.getValOnce(s_analytics.prop17,'s_prop17',0);}
if(s_analytics.prop17&&(s_analytics.prop17==s_analytics.eVar17||!s_analytics.eVar17))
{s_analytics.eVar17="D=c17";s_analytics.events=s_analytics.apl(s_analytics.events,'event34',',',2)}
if(s_analytics.prop35&&s_analytics.prop35.toLowerCase()!="no content title")
{s_analytics.events=s_analytics.apl(s_analytics.events,"event46",",",2)}
if(s_analytics.prop43&&s_analytics.prop43.toLowerCase()!="no blog title")
{s_analytics.events=s_analytics.apl(s_analytics.events,"event25",",",2)}
s_analytics.prop70="D=v70";s_analytics.eVar70=s_analytics.c_r('s_vi');s_analytics.prop14="D=User-Agent";s_analytics.eVar14="D=User-Agent";if(s_analytics.prop25)
{s_analytics.prop25=s_analytics.getValOnce(s_analytics.prop25,'s_prop25',0);if(s_analytics.prop25)
{s_analytics.eVar25="D=c25";s_analytics.events=s_analytics.apl(s_analytics.events,"event20",",",2);if(s_analytics.prop26)
{s_analytics.eVar26="D=c26";}
else
{s_analytics.prop26=s_analytics.eVar26='na';}}}}
s_analytics.doPlugins=s_doPlugins}];u.send=function(a,b,c,d,e,f,g,h,ev,evt){if(u.ev[a]||typeof u.ev.all!="undefined"){utag.DB("send:31");b.sc_events=b.sc_events||{};u.addEvent=function(v){var t=[];if(v instanceof Array){t=v.slice(0);}else{t.push(v);}
for(var i=0;i<t.length;i++){b.sc_events[t[i]]=1;u.pushlt(u.lte,t[i])}
return b.sc_events};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};if(a=="link"){u.ltflag=true;if(typeof b.linkTrackVars=="undefined"){u.ltv=[]}
if(typeof b.linkTrackEvents=="undefined"){u.lte=[]}}
if(typeof b._cprod!="undefined"&&b._cprod!=""){c=[];d={};ev={};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for(g=0;g<f.length;g++){if(f[g].indexOf("PRODUCTS_evar")==0){d[f[g].substring(9)]=b[e].split(",")}else if(f[g].indexOf("PRODUCTS_event")==0){ev[f[g].substring(9)]=b[e]}}}}
e="";for(f in utag.loader.GV(d)){for(g=0;g<d[f].length;g++){if(e!="")e+="|"+f+"="+d[f][g];else e=f+"="+d[f][g];}}
h="";for(f in utag.loader.GV(ev)){if(h)h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);else h=f+"="+((isNaN(ev[f]))?"1":ev[f]);}
b.sc_prodevents=b.sc_prodevents||{};for(d=0;d<b._cprod.length;d++){var h2=h;if(typeof b.sc_prodevents[d]!="undefined"){for(f in utag.loader.GV(b.sc_prodevents[d])){if(h2)h2+="|"+f+'='+b.sc_prodevents[d][f];else h2=f+'='+b.sc_prodevents[d][f];}}
c.push((b._ccat[d]?b._ccat[d]:"")+";"+b._cprod[d]+";"+(b._cquan[d]?b._cquan[d]:"")+";"+(b._cprice[d]?((b._cquan[d]?parseInt(b._cquan[d]):1)*parseFloat(b._cprice[d])).toFixed(2):"")+";"+h2+";"+e);}
u.o.products=c.join(",");}
evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;for(c in utag.loader.GV(b)){d=[];if(typeof u.map[c+":"+b[c]]!="undefined"){b[c+":"+b[c]]=b[c];d=u.map[c+":"+b[c]].split(",");}else if(typeof u.map[c]!="undefined")d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])&&b[c]!=""){if(d[e].indexOf("ONCE_")==0){f=d[e].substring(5);if(utag.handler.ONCE("ev_"+b[c])){u.addEvent(f);}}else{u.addEvent(d[e]);}}}}
for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e].indexOf("ONCE_")==0){f=d[e].substring(5);if(utag.loader.ONCE("map_"+b[c])){u.o[f]=b[c];u.pushlt(u.ltv,f)}}else if(d[e]=="doneAction"){b.doneAction=b[c];if(b.doneAction!="navigate"){b.doneAction=eval(b[c]);}}else{u.o[d[e]]=b[c];if(d[e]=="s_account"){u.o.dynamicAccountList=b[c]+"=."}
else if(d[e]=="linkTrackVars"){u.ltflag=false}
else u.pushlt(u.ltv,d[e])}}}}
d=[];for(c in utag.loader.GV(b.sc_events)){if(b.sc_events[c])d.push(c)};if(d.length>0){u.o.events=d.join(",");u.pushlt(u.lte,u.o.events);}
if(b._corder){u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);u.o.events=((u.o.events)?u.o.events:"purchase");if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase"};}
if(a=="view"){try{var t=u.o;var q={},l={};c={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(d=1;d<76;d++){c['prop'+d]='c'+d;c['eVar'+d]='v'+d;}
for(d in c){if(typeof c[d]!='function'){if(typeof t[d]!='undefined'&&t[d]!=''&&t[d].toString().indexOf('D=')!=0)
{if(typeof l[t[d]]=='undefined')l[t[d]]=c[d];else if(l[t[d]]!="ch")t[d]='D='+l[t[d]];}}}}catch(e){};u.o.t();}else if(a=="link"){if(typeof u.ltv!="undefined"&&u.ltflag){if(u.o.events){u.ltv.push("events")};b.linkTrackVars=u.ltv.join(',')}
if(typeof u.lte!="undefined"&&u.ltflag)b.linkTrackEvents=u.lte.join(',');u.o.linkTrackVars=(b.linkTrackVars)?b.linkTrackVars:"None";u.o.linkTrackEvents=(b.linkTrackEvents)?b.linkTrackEvents:"None";if(!u.o.linkType)u.o.linkType='o';if(b.link_name)b.link_text=b.link_name;b.link_text=(b.link_text)?b.link_text:"no link_name";if(b.link_type=='exit link'){u.o.linkType='e'}
else if(b.link_type=='download link')u.o.linkType='d';u.o.tl(((b.link_obj)?b.link_obj:true),u.o.linkType,b.link_text,null,(b.doneAction?b.doneAction:null));}
u.o.events="";u.o.products="";for(d in utag.loader.GV(u.varlist)){if(d!="pageName")u.o[d]=""}
utag.DB("send:31:COMPLETE");}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('31','foxsports.main');}catch(e){};