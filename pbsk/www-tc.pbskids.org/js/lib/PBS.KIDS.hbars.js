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

// RequireJS Handlebars template plugin
// http://github.com/jfparadis/requirejs-handlebars
//
// An alternative to http://github.com/SlexAxton/require-handlebars-plugin/blob/master/hbs.js
//
// Using Handlebars Semantic templates at http://handlebarsjs.com
// Using and RequireJS text.js at http://requirejs.org/docs/api.html#text
// @author JF Paradis
// @version 0.0.2
//
// Released under the MIT license
//
// Usage:
//   require(['backbone', 'hbar!mytemplate'], function (Backbone, mytemplate) {
//     return Backbone.View.extend({
//       initialize: function(){
//         this.render();
//       },
//       render: function(){
//         this.$el.html(mytemplate({message: 'hello'}));
//     });
//   });
//
// Configuration: (optional)
//   require.config({
//     hbars: {
//       extension: '.hbar' // default = '.html'
//     }
//   });

/*jslint nomen: true */
/*global define: false */

(function(require, define) {
    define(['text', 'Handlebars'], function (text, Handlebars) {
        'use strict';

        var buildMap = {},
            buildTemplateSource = "define('{pluginName}!{moduleName}', ['Handlebars'], function (Handlebars) { return Handlebars.template({content}); });\n";

        return {
            version: '0.0.2',

            load: function (moduleName, parentRequire, onload, config) {
                if (buildMap[moduleName]) {
                    onload(buildMap[moduleName]);

                } else {
                    var ext = (config.hbars && config.hbars.extension) || '.html',
                        path = (config.hbars && config.hbars.path) || '',
                        compileOptions = (config.hbars && config.hbars.compileOptions) || {};

                    text.load(path + moduleName + ext, parentRequire, function (source) {
                        if (config.isBuild) {
                            // We store the precompiled template so we can use the
                            // handlebars.runtime after build.
                            buildMap[moduleName] = Handlebars.precompile(source, compileOptions);
                            // Don't bother doing anything else during build.
                            onload();
                        } else {
                            // We store the compiled template for reuse
                            buildMap[moduleName] = Handlebars.compile(source);
                            onload(buildMap[moduleName]);
                        }
                    }, config);
                }
            },

            write: function (pluginName, moduleName, write, config) {
                var content = buildMap[moduleName];
                if (content) {
                    write.asModule(pluginName + '!' + moduleName,
                        buildTemplateSource
                        .replace('{pluginName}', pluginName)
                        .replace('{moduleName}', moduleName)
                        .replace('{content}', content));
                }
            }
        };
    });
}(PBS.KIDS.require, PBS.KIDS.define));


}
/*
     FILE ARCHIVED ON 18:32:39 Feb 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:26:59 Feb 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.874
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 7.775
  LoadShardBlock: 115.53 (3)
  PetaboxLoader3.datanode: 935.472 (5)
  PetaboxLoader3.resolve: 222.744 (3)
  load_resource: 1046.66 (2)
*/