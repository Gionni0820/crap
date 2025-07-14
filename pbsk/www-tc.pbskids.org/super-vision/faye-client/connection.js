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

(function(define, require) {
  define('faye-client', ['jquery', 'event-emitter', 'faye', 'simple-storage'], function($, EventEmitter, Faye, SimpleStorage) {
    var connection = function(cached){
      var payload;
      var href = ( window.top != window ) ? document.referrer : window.location.href;
      var faye_root = href.match(/dev\.pbskids\.org/) ? "https://web.archive.org/web/20160224183238/http://automata.pbskids.org:9000" : href.match(/qa\.pbskids\.org\//) ? "https://web.archive.org/web/20160224183238/http://automata.pbskids.org:9000" : "https://web.archive.org/web/20160224183238/http://supervision.pbskids.org:9100";
      var client = new Faye.Client(faye_root + '/faye');

      var channel;

      var sync_state;
      client.addExtension({
        incoming: function(message, callback) {
          if (message.channel === '/meta/subscribe') {
            sync_state = message._channel;
            conn.emitEvent('subscribed', [message._channel]);
          }
          callback(message);
        }
      });

      var getNewChannel = function() {
        return $.post(faye_root + '/channel/create');
      };

      var deferred = $.Deferred();

      var complete = function(data) {

        var self = this;
        channel = '/' + data.channel_id;

        SimpleStorage.set('channel-metadata', data);

        // send the payload again
        if (payload) client.publish(channel, payload);
        self.emitEvent('paired', [sync_state]);

        client.subscribe(channel, function(m) {
          self.emitEvent('message-received', [m]);

          if(m.type === 'status' && m.value === 'unpaired') {
            self.disconnect();
          }
        }).then(function() {}, self.disconnect);
        if(deferred.resolve) deferred.resolve(self);
      };

      var Connection = function() {
        this.send = function(message, reliable) {
          reliable = reliable !== false;
          payload = message; 
          if (channel) {
            client.publish(channel, payload);
          }
        };
        this.recieve = function(message_type, callback) {
            client.subscribe(channel, function(data) {
                if (!!data._meta && 
                    !!data._meta.type && 
                    (data._meta.type == message_type)) {
                    callback(data);
                }
            });
        };
        this.refresh = function(){
          var self = this;
          if (channel) {
            client.unsubscribe(channel);
          }
          getNewChannel().then(function(res){
            self.emitEvent('init', [res]);
            client.subscribe('/' + res.channel_id, function(m) {
              if(m.value === 'paired') {
                complete.bind(self)(res);
              }
            });
          });
        };
        this.disconnect = function() {
          client.publish(channel, {type: 'status', value: 'unpaired'});
          if (channel) {
            client.unsubscribe(channel);
            channel = null;
          }
          SimpleStorage.deleteKey('channel-metadata');
          this.emitEvent('unpaired');
        };
        this.ready = function(cb) {
          if (channel) cb(sync_state);
          this.on('paired', function(sync_state) {
            cb(sync_state);
          });
        };
        // TODO: Evalute if this.ready should pass in sync_state, since
        // it isn't actually processed by extensions yet at that point.
        this.subscribed = function(cb) {
          this.on('subscribed', function(sync_state) {
            cb(sync_state);
          });
        }
        // Flag to turn on/off Faye functionality.
        // Set to false for maintenance/updates.
        // UI elements on pbskids.org should react accordingly.
        this.enabled = true;
      };

      Connection.prototype = new EventEmitter();

      var conn = new Connection();

      var cached = SimpleStorage.get('channel-metadata');
      if (!!cached) {
        complete.bind(conn)(cached);
      }

      return conn;

    };

    PBS.KIDS.FayeClient = connection();
    return PBS.KIDS.FayeClient;
  });
}(PBS.KIDS.define, PBS.KIDS.require));


}
/*
     FILE ARCHIVED ON 18:32:38 Feb 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:58 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.471
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 7.467
  LoadShardBlock: 129.789 (3)
  PetaboxLoader3.datanode: 141.704 (5)
  PetaboxLoader3.resolve: 220.658 (3)
  load_resource: 259.895 (2)
*/