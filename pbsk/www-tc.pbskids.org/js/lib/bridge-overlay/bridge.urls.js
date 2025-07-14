var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function( require, define, factory ){
  //AMD support for {Global}.requireJS
  if( typeof define === "function" && define.amd ){
    define(factory);
  }
  else{
    factory();
  }
}( PBS.KIDS.require, PBS.KIDS.define, function(){
  
  var bridgeURLs = function (hostname, pathname) {
    return ( hostname != 'www-tc.pbskids.org' )
              && ( pathname.indexOf('/redir/http') == -1 )
              && ( hostname != 'pbskids.org' )
              && ( hostname != 'www.pbskids.org' )
              && ( hostname != 'pbskidsgo.org' )
              && ( hostname != 'pbskidsplay.org' )
              && ( hostname != 'www.pbskidsplay.org' )
              && ( hostname != 'dipsy.pbs.org' )
              && ( hostname != 'soup.pbskids.org' )
              && ( hostname != 'ernie.pbskids.org' )
              && ( hostname != 'video.pbs.org' )
              && ( hostname != 'm-dev.pbskids.org' )
              && ( hostname != 'renzo.pbskids.org' )
              && ( hostname != 'galen.pbskids.org' )
              && ( hostname != 'statler.pbskids.org' )
              && ( hostname != 'm.pbskids.org' )
              && ( hostname != 'dev.pbskids.org')
              && ( hostname != 'qa.pbskids.org')
              && ( hostname != 'demo.pbskids.org')
              && ( hostname != 'stage.pbskids.org')
              && ( hostname != 'grownups.pbskids.org' )
              && ( hostname != 'merge.pbskids.org' )
              && ( hostname.length > 0 || pathname.length > 0 )
              // Relative URLs cause hostname to be blank in IE 8 or lower. These should not cause bridge overlay to appear.
              && ( !(navigator.appName == 'Microsoft Internet Explorer' && hostname.length === 0) )
              && ( pathname.indexOf('openVideoWin') == -1 )
              && ( pathname.indexOf('history.back') == -1 )
              || ( pathname.indexOf('parentsteachers') != -1 )
              || ( pathname.indexOf('caregiver') != -1 )
              || ( pathname.indexOf('itsmylife/parents') != -1 )
              || ( pathname.indexOf('animalia/parents_and_teachers') != -1 )
              || ( pathname.indexOf('parentsTeachers') != -1 )
              || ( pathname.indexOf('mamamirabelle/parents') != -1 )
              || ( pathname.indexOf('barney/pareduc') != -1 )
              || ( pathname.indexOf('zoom/grownups') != -1 )
              || ( pathname.indexOf('readingrainbow/parents_and_teachers') != -1 )
              || ( pathname.indexOf('wordgirl/parentsandteachers') != -1 )
              || ( pathname.indexOf('electriccompany/parentseducators') != -1 )
              || ( pathname.indexOf('wordworld/parentsandteachers') != -1 )
              || ( pathname.indexOf('wordworld/sitemap') != -1 )
              || ( pathname.indexOf('wordworld/contactus') != -1 )
              || ( pathname.indexOf('wordworld/activities') != -1 );
  };//end bridgeURLs()


  var bridgeURLTemplates = function (hostname, pathname, linkClass) {
      if ( (hostname == 'pbsparents.org' || hostname == 'www.pbsparents.org') || ( (hostname == 'pbs.org' || hostname == 'www.pbs.org') && bridgeLinkPathname.substring(0,9) == '/parents/' ) ) { return 'parents'; }
      if ( ( pathname.indexOf('animalia/parents_and_teachers') != -1 ) || ( pathname.indexOf('parentsteachers') != -1 ) || ( pathname.indexOf('itsmylife/parents') != -1 ) || ( pathname.indexOf('readingrainbow/parents_and_teachers') != -1 ) || ( pathname.indexOf('barney/pareduc') != -1 ) || ( pathname.indexOf('grownups') != -1 ) || ( pathname.indexOf('/caregiver') != -1 ) || ( pathname.indexOf('parents') != -1 ) ) { return 'parentsSection'; }
      else if ( (hostname == 'pbslearningmedia.org' || hostname == 'www.pbslearningmedia.org') || ( (hostname == 'pbs.org' || hostname == 'www.pbs.org') ) ) { return 'teachers'; }
      else if (linkClass == 'sponsor-link') { return 'sponsor'; }
      else { return 'default'; }
  };//end bridgeURLTemplates()


  var  bridgeCursorFix = function (hostname, pathname) {
    if ( ( pathname.indexOf('teletubbies') != -1 ) ||
      ( pathname.indexOf('sesame') != -1 ) ||
      ( pathname.indexOf('panwapa') != -1 ) ||
      ( pathname.indexOf('mamamirabelle') != -1 ) ||
      ( pathname.indexOf('caillou') != -1 ) ||
      ( pathname.indexOf('toopyandbinoo') != -1 ) ||
      ( pathname.indexOf('/zoom/games/goldburgertogo/') != -1) )
    {
      return true;
    }
      
    return false;
  };//end bridgeCursorFix()


  var bridgeNoConflict = function (hostname, pathname) {
    if ( ( pathname.indexOf('curiousgeorge') != -1 ) ){
      return true;
    }

    return false;
  };//end bridgeNoConflict()


  //Create Globals
  var exports = ( typeof exports !== 'undefined' ) ? exports : window ;
  exports.bridgeURLs         = bridgeURLs;
  exports.bridgeURLTemplates = bridgeURLTemplates;
  exports.bridgeCursorFix    = bridgeCursorFix;
  exports.bridgeNoConflict   = bridgeNoConflict;
  
  return (
    "Created : \r\n" +
    "  - window.bridgeURLs() \r\n" +
    "  - window.bridgeURLTemplates() \r\n" +
    "  - window.bridgeCursorFix() \r\n" +
    "  - window.bridgeNoConflict() \r\n"
  );

}));


}
/*
     FILE ARCHIVED ON 18:32:41 Feb 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:01 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.595
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 44.535
  LoadShardBlock: 141.795 (3)
  PetaboxLoader3.datanode: 164.037 (5)
  load_resource: 429.46 (2)
  PetaboxLoader3.resolve: 168.902 (2)
*/