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
  if( typeof define === "function" && define.amd ){
    //PBS.KIDS AMD support for requireJS
    define('super-vision-overlay', ['hbars!/js/pikachu/templates/play-timer-overlay', 'Handlebars'], factory);
  }
  else {
    return;//"explicity do nothing" - Sam Deng
  }
}( PBS.KIDS.require, PBS.KIDS.define, function(play_timer_template) {
    var pikachu_overlay = function(play_timer_template, option) {
        // Initialize options
        var video = null;

        if (typeof(options) != 'undefined') {
            if (typeof(options.video) != 'undefined') {
                video = options.video;
            }
        }

        // Play timer CSS injection
        var play_timer_css = document.createElement('link');
        play_timer_css.type = 'text/css';
        play_timer_css.rel = 'stylesheet';
        play_timer_css.href = '/js/pikachu/styles/companion.css';
        document.getElementsByTagName('head')[0].appendChild(play_timer_css);

        // Play timer markup injection
        var body = document.getElementsByTagName('body')[0];
        var play_timer_html = play_timer_template();

        var detached_container = document.createElement('div');
        detached_container.innerHTML = play_timer_html;

        while (detached_container.children.length > 0) {
            body.appendChild(detached_container.children[0]);
        }
    };

    return pikachu_overlay(play_timer_template);

}));


}
/*
     FILE ARCHIVED ON 18:32:38 Feb 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:57 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.989
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 83.363
  LoadShardBlock: 127.726 (3)
  PetaboxLoader3.datanode: 126.357 (5)
  PetaboxLoader3.resolve: 177.938 (3)
  load_resource: 237.512 (2)
*/