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

(function() {
  'use strict';
  (function( require, define, factory ) {
    if (typeof define === "function" && define.amd) {
      define("login-compatibility", ["jquery"], factory);
    }
    else{
      factory( jQuery );
    }
  }(PBS.KIDS.require, PBS.KIDS.define, function($) {

    function init() {
      retrofitEvents();
      retrofitMethods();
    }

    function retrofitEvents() {
      PBS.KIDS.$_auth = PBS.KIDS.$_auth || $;

      $(document).on('org_pbskids_login_LoginEvent_LoggedIn', function(event) {
        PBS.KIDS.$_auth('body').trigger('cbox_closed');
      });

      $(document).on('org_pbskids_login_LoginEvent_LoginClosed', function(event) {
        PBS.KIDS.$_auth('body').trigger('cbox_closed');
      });
    }

    function retrofitMethods() {
      // Legacy headband interfaces
      if (!PBS.KIDS.Headband) PBS.KIDS.Headband = {};
      PBS.KIDS.Headband.reload = function () {};

      // Legacy Flash interfaces
      if (!window.PKG) window.PKG = {};

      PKG.prmpt = function() {
        org.pbskids.login.displayLogin({refresh: 'true'});
      }

      PKG.login = function() {
        org.pbskids.login.displayLogin(null, '/go/apps/auth/login/');
      }

      // Legacy identity interfaces
      if (!PBS.KIDS.identity) PBS.KIDS.identity = {};

      PBS.KIDS.identity.prompt = function() {
        org.pbskids.login.displayLogin();
      }

      PBS.KIDS.identity.singup = function() {
        org.pbskids.login.displayLogin(null, '/go/apps/auth/singup/');
      }

      PBS.KIDS.identity.signout = function() {
        org.pbskids.login.logout();
      }
      
      PBS.KIDS.identity.isAnonymousUser = function() {
        var userid = getCookie('pbskids.userid');
        return userid ? false: true;
      }

      PBS.KIDS.identity.getCurrentUsers = function() {
        var username = getCookie('pbskids.username');
        var userid = getCookie('pbskids.userid');
        var is_logged_in = userid ? true: false;
        var accesstoken = getCookie('pbskids.access.token');

        return [{
          username : username,
          userid : userid,
          accesstoken : accesstoken,
          isloggedin: is_logged_in,
          anonymousGuid: null
        }];
      }

      PBS.KIDS.identity.loaded = true;
    }

    function getCookie(name) {
      var cookies = document.cookie.split(";");
      for(var i=0; i<cookies.length; i++) {
        var keyValue = cookies[i].split("=");
        if ($.trim(keyValue[0]) === name) return keyValue[1];
      }
      return null;
    }

    $(document).on('org_pbskids_login_LoginEvent_LoginReady', function() {
        retrofitEvents();
        retrofitMethods();
    });
  }));
})();


}
/*
     FILE ARCHIVED ON 18:32:41 Feb 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:27:00 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.629
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 10.568
  LoadShardBlock: 166.853 (3)
  PetaboxLoader3.datanode: 192.284 (5)
  PetaboxLoader3.resolve: 196.812 (3)
  load_resource: 338.489 (2)
*/