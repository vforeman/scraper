// Deferring the ad rendering until window.onload ensures that the utag script has been loaded before we try to call it.
$(window).load(function() {
  function renderAds( first ) {

    if ( typeof( liveFlight ) !== 'undefined' ){
      runFlightAds( first );
    }
    else{
      refreshAdJquery("ad728x90", "&PG=SPTBB1&AP=1390", 728, 90);
      refreshAdJquery("ad300x250regular", "&PG=SPTBB4&AP=1089", 300, 250);
      refreshAdJquery("ad300x250contextual", "&PG=SPTCPA&AP=1089", 300, 250);
      if (!first) {
        utag.view({
          autorefresh:"true",
          page_type:"gametrax",
          trax_pagename:"fscom:nba:scores:gametrax:landing"
        });
      }
    }
  };

  function refreshAdJquery(divID, adString, adWidth, adHeight) {
    //Clear out the div at #divID
    $("#" + divID).empty("");
    // call new ad request
    dapMgr.renderAd(divID, adString, adWidth, adHeight);
  }

  // TODO: Get this value from DB
  renderAds.call( this, true );
  setInterval(renderAds, 60*1000);
});
