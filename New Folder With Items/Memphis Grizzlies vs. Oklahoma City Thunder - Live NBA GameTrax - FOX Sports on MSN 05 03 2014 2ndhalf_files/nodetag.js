(function(){
var pfs={ "http://msn.foxsports.com/foxsoccer":{"nid":36820,"tr":1,"ex":"http://msn.foxsports.com/$|http://bundle.com|www.bundle.com|http://www.msnbc.com|http://www.scout.com|www.scout.com"},
"http://msn.foxsports.com/soccer":{"nid":36819,"tr":1,"ex":"http://msn.foxsports.com/$|http://bundle.com|www.bundle.com|http://www.msnbc.com|http://www.scout.com|www.scout.com|http://msn.foxsports.com/soccer$|http://msn.foxsports.com/soccer/$"},
"http://blog.foxsoccer.com":{"nid":36821,"tr":1,"ex":"http://msn.foxsports.com/$|http://bundle.com|www.bundle.com|http://www.msnbc.com|http://www.scout.com|www.scout.com"},
"http://msn.foxsports.com":{"nid":36818,"tr":1,"ex":"http://msn.foxsports.com/$|http://bundle.com|www.bundle.com|http://www.msnbc.com|http://www.scout.com|www.scout.com|http://msn.foxsports.com/soccer$|http://msn.foxsports.com/soccer/$"} },d=document,w=window,u=(w.gm_fake_href)?w.gm_fake_href:w.location.href;

function z(n){
var s,u;

if (Math.random()>=n['tr']) {
	return;
}



var ar_nodes = ":36818:";
if (ar_nodes.indexOf(":"+n['nid']+":") >= 0) {	// adradar only
	(new Image).src="//amch.questionmarket.com/adscgen/adrad.php?survey_num=0&aicode=0&site="+n['nid'];
	return;
}



s=d.createElement('SCRIPT');
u='//content.dl-rms.com/dt/s/'+n['nid']+'/s.js';
s.src=u;
s.type='text/javascript';
d.getElementsByTagName('head')[0].appendChild(s);
}


function r() {
	var n="",p,x;
	while (1) {
		try {
			for (p in pfs) {
			  if (u.substring(0,p.length)==p && p.length > n.length) {
				if (pfs[p].ex) {
					x=new RegExp(pfs[p].ex,"i");
					if (x.test(u)) {
						continue;
					}
				}
				n=p;
			  }
			}
			if (n.length > 0) {
				z(pfs[n]);
				return;
			}
		} catch (e) {}
	
		if (w==top) {
			break;
		}
	
		if (w==window&&u!=d.referrer) {
			u=d.referrer;
		} else {
			w=w.parent;
		}
	}
}

if (d.readyState=="complete"){
	r();
} else if (w.addEventListener){ 
	w.addEventListener("load", r, false);
} else if (w.attachEvent){ 
	w.attachEvent("onload", r);
}
})();
