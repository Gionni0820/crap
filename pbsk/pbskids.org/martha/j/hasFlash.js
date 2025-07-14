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

/*
Flash Detection for redirect to Martha Mobile index page.
If no Flash support detected, redirect to mobile/index.html
*/

var hasFlash = false;

try {
  if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) hasFlash = true;

} catch(e) {

  if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;

}

//redirect:
if(!hasFlash) window.location.href = "/martha/mobile/index.html";

}
/*
     FILE ARCHIVED ON 06:15:20 Feb 05, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:50 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.523
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 16.674
  LoadShardBlock: 132.499 (3)
  PetaboxLoader3.datanode: 109.353 (5)
  load_resource: 176.326 (2)
  PetaboxLoader3.resolve: 82.336 (2)
*/