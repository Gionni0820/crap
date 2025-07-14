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

(function( require ){

    function loadSpringrollJSON(href, callback) {
      var xobj = new XMLHttpRequest();
      if(xobj.overrideMimeType) xobj.overrideMimeType("application/json");
      xobj.open('GET', href.split("?")[0] + '../.springrollrc', true);
      xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
        }
      };
      xobj.send(null);
    };
  require.config( function(){
    var href = ( window.top != window ) ? document.referrer : window.location.href;
    var cdn  = href.match(/soup\.pbskids\.org/) ? "soup-tc.pbskids.org" : href.match(/ernie\.pbskids\.org\//) ? "ernie-tc.pbskids.org" : href.match(/^http:\/\/((?!www(\-tc)?\.).+)pbskids\.org/) ? "" : "www-tc.pbskids.org";

    var shell_root    = cdn + (href.match(/\/~.*\/site\/?/) ? href.substring(0,href.indexOf("site") + 4) + "/" : "/shell/");
    var carson_root   = cdn + (function( m ){ return ( m ? m[0] : "/shell/" ); }( href.match(/(\/~([a-zA-Z0-9]+)\/)|\/cms/) ));
    var messages_root = cdn + '/messages/scripts/';
    var faye_root     = href.match(/chip\.pbskids\.org/) ? 'chip.pbskids.org:8080' : href.match(/super-vision-dev\.pbskids\.org/) ? 'super-vision-dev.pbskids.org:9000' : href.match(/(soup|bert|ernie|statler|waldorf|animal|merge)\.pbskids/) ? "sv-broker-stg.pbskids.org:9000" : "supervision.pbskids.org:9100";
    
    if (typeof window.springroll === 'undefined'){
        window.springroll = {};
    }
    window.springroll.env = {};
    loadSpringrollJSON(href, function(response) {
    window.springroll.env = JSON.parse(response);
    });

    require.cdn = cdn;
    return{
      baseUrl: cdn + '/js/',
      urlArgs: "version=1.67",
      shim: {
        'sound': {
          exports: 'createjs'
        },
        'Handlebars': {
          exports: 'Handlebars'
        },
        'faye': {
          exports: 'Faye'
        }
      },
      paths: {
        //jQuery and jQuery Plugins
        'jquery'          : 'loader/lib/jquery/jquery-1.10.2',
        'jquery-easing'   : shell_root + 'js/lib/jquery/plugins/jquery-easing-1.3',
        'jquery-touch'    : shell_root + '../../../shell/js/lib/jquery/jquery.mobile-1.3.1-touch-swipe-only.min',
        'jquery-mobile'   : shell_root + 'js/lib/jquery/jquery.mobile.custom',
        'jquery-bxslider' : shell_root + 'js/lib/jquery/plugins/jquery.bxSlider.min',

        //PBS KIDS HEADBAND MODULES
        'headband'            : shell_root + '../../../shell/js/headband/producer-headband',
        'login'               : 'lib/login/login',
        'login-compatibility' : 'lib/login/login-compatibility',
        'localization'        : 'lib/localization/localization',

        //PBS KIDS MESSAGING SYSTEM
        'uuid'              : 'lib/PBS.KIDS.uuid',
        'jquery-noconflict' : messages_root + '../../../../messages/scripts/jquery/jquery-noconflict',
        'messages'          : messages_root + 'messages',
        'pubsub'            : messages_root + 'PubSubJS/PBS.KIDS.pubsub',

        //PBS KIDS Supervision
        'super-vision'        : 'pikachu/browser-client',
        'super-vision-overlay': 'pikachu/overlay',
        'socket.io'           : 'lib/PBS.KIDS.socket.io',
        'lodash'              : 'lib/PBS.KIDS.lodash.compat.min',
        'text'                : 'lib/PBS.KIDS.text',
        'Handlebars'          : 'lib/handlebars-v1.3.0',
        'hbars'               : 'lib/PBS.KIDS.hbars',
        'simple-storage'      : 'lib/PBS.KIDS.simple-storage',

        //Faye real-time communication client
        'event-emitter' : 'lib/PBS.KIDS.EventEmitter',
        'faye'          : faye_root + '/faye/client',
        'faye-client'   : cdn + '/super-vision/faye-client/connection',

        //Page Views
        'shell' : shell_root + 'js/shell',

        //Other Plugins and Libs
        'images-loaded'   : shell_root + 'js/lib/imagesloaded',
        'sound'           : shell_root + 'js/lib/Sound',
        'howler'          : shell_root + 'audio/howler',
        'swf-object'      : shell_root + 'js/lib/swfobject-2.2.min',

        'kinetic'         : shell_root  + 'js/lib/kinetic-v5.0.1.min',
        'the-wheel'       : shell_root  + 'js/the-wheel/the-wheel',
        'carson'          : carson_root + 'carson/carson',

        'bridge-overlay'  : "lib/bridge-overlay/bridge",
        'bridge-urls'     : "lib/bridge-overlay/bridge.urls",

        'jquery-video'    : 'www-tc.pbskids.org/pbsk/video/lib/jquery.pbskidsvideo.min-latest',
        'progress-tracker': 'progress-tracker url has not yet been defined'
      }
    };
  }());



  //Loaders for Supervision
  (function(){
    var getCookie = function(a){var b=document.cookie,c=b.indexOf(" "+a+"=");if(-1==c&&(c=b.indexOf(a+"=")),-1==c)b=null;else{c=b.indexOf("=",c)+1;var d=b.indexOf(";",c);-1==d&&(d=b.length),b=unescape(b.substring(c,d))}return b}
    var isIE7 = Boolean( navigator.appVersion.indexOf("MSIE 7.") != -1 );
    var hasSupervision = !isIE7;
    if( hasSupervision ) require( ["super-vision", "super-vision-overlay"] );
  })();

  //Loaders
  require( ["messages", "headband"] );//require headband AFTER supervision

}( PBS.KIDS.require ));


}
/*
     FILE ARCHIVED ON 00:09:22 Feb 04, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:56 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.48
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 15.535
  LoadShardBlock: 256.111 (3)
  PetaboxLoader3.datanode: 255.826 (4)
  load_resource: 80.092
  PetaboxLoader3.resolve: 53.711
*/