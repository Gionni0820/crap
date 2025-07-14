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
    define('super-vision',
        ['jquery-noconflict', 'faye-client', 'lodash', 'messages', 'simple-storage'],
        function($, faye_client, _, Messages) {

            // Publicly accessible object for old producer headband.
            // Temporary, until everything is converted to AMD.
            PBS.KIDS.SuperVision = factory($, faye_client, _, Messages);

            return PBS.KIDS.SuperVision;
        }
    );
  }
  else {
    return;//"explicity do nothing" - Sam Deng
  }
}( PBS.KIDS.require, PBS.KIDS.define, function($, faye_client, _, Messages) {

    var SupervisionClient = function($, faye_client, _, Messages) {
        var current_video_title = null;

        var game_message_token = null;
        var video_message_token = null;

        var sleep_timer = null;
        var video_view = null;

        var deploy_play_timer = function(mode, countdown) {
            clearTimeout(sleep_timer);

            sleep_timer = setTimeout(function() {
                // Deploy overlay
                $('.companion-overlay.full-overlay').fadeOut();
                $('#' + mode + '-overlay.full-overlay').fadeIn();

                // Pause video if player is available
                if (video_view && (typeof(video_view.player) != 'undefined')) {
                    video_view.player.pause();
                }
            }, countdown);
        }

        var teardown_play_timer = function() {
            clearTimeout(sleep_timer);
            $('.companion-overlay.full-overlay').fadeOut();
        }

        /**
         * Controller has desynced.
         * - Stop listening to PubSubJS messages.
         * - Stop play timer.
         */
        faye_client.on('unpair', function() {
            teardown_play_timer();

            if (game_message_token) {
                Messages.unsubscribe(game_message_token);
            }

            if (video_message_token) {
                Messages.unsubscribe(video_message_token);
            }
        });

        // Google Analytic sync event
        faye_client.on('init', function() {
            if (window._gat && window._gat._getTracker) {
                var pageTracker = _gat._getTracker('UA-4005001-3');
                pageTracker._trackEvent('Parents Bar', 'Settings', 'PBS KIDS Super Vision - Code Returned');
            }
        });

        var subscribe_messages = function(message, data) {
            if (data.type.toLowerCase() == 'clip' || data.type.toLowerCase() == 'episode') {
                current_video_title = data.title;
            }

            data._meta = {
              type: 'activity'
            }
            faye_client.send(data, true);
        }

        var config = function(options) {
            if (typeof(options) != 'undefined') {
                if (typeof(options.video_view) != 'undefined') {
                    video_view = options.video_view;
                }
            }
        }

        /**
         * Controller synced.
         * - Subscribe to PubSubJS messages (idempotent).
         * - Watch for controller play timer commands.
         */
        faye_client.ready(function(sync_state) {
            if( Messages ) {
                if (game_message_token) {
                    Messages.unsubscribe(game_message_token);
                }
                game_message_token = Messages.subscribe('pbskids.messages.games', subscribe_messages, false);

                if( window.location.href.match( /pbskids.org\/video\/(index.php)?$/ ) ){
                    if (video_message_token) {
                        Messages.unsubscribe(video_message_token);
                    }
                    video_message_token = Messages.subscribe('pbskids.messages.video', subscribe_messages, false);
                }

                Messages.init();
            }

            faye_client.recieve('play_timer', function(data) {
                switch(data.name) {
                    case 'sleep':
                        deploy_play_timer(data.mode, data.value);
                        break;
                    case 'cancel_sleep':
                        teardown_play_timer();
                        break;
                }
            });
        });

        /**
         * Channel subscribed.
         * - Resume/tear down existing play timer countdown.
         */
        faye_client.subscribed(function(sync_state) {
            // Play timer SST from the server
            if (typeof(sync_state) !== 'undefined') {
                if (sync_state.timer == null) {
                    teardown_play_timer();
                } else {
                    deploy_play_timer(sync_state.timer.mode, sync_state.timer.value);
                }
            }
        });

        $(document).ready(function() {
            // Video event bootstrapping
            var lazy_video_progress = window._.debounce(function(event) {
                var data = {
                    current_video_title: current_video_title,
                    time: event.time,
                    percent: event.percent
                }

                data._meta = {
                  type: 'video_progress'
                }
                faye_client.send(data, false);
            }, 1000, {leading: true, maxWait: 25});

            $(document).on('org_pbskids_video_VideoEvent_CurrentTimeChange', function(event) {
                lazy_video_progress(event);
            });

            $(document).on('org_pbskids_video_VideoEvent_VideoViewed', function(event) {
                var duration = Math.floor((event.percentViewed / 100) * event.release.duration);
                var data = {
                    title: event.release.title,
                    property: event.release.series_title,
                    image: event.release.images.littlevideothumbnail.url,
                    duration: duration
                }

                data._meta = {
                  type: 'video_view'
                }
                faye_client.send(data, true);
            });

            // Remove timer overlay on browser reload
            faye_client.send({
                _meta: {
                    type: 'play_timer'
                },
                status: 'site_refresh'
            });
        });

        return {
            config: config,
            subscribe_messages: subscribe_messages
        }
    };

    return new SupervisionClient($, faye_client, _, Messages);

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
  captures_list: 0.486
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.009
  cdx.remote: 8.394
  LoadShardBlock: 159.735 (3)
  PetaboxLoader3.datanode: 148.076 (5)
  PetaboxLoader3.resolve: 196.436 (3)
  load_resource: 223.547 (2)
*/