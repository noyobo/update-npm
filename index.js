'use strict';

var updateNotifier = require('update-notifier');
var colors = require('colors');
var sl = require('string-length');

function showNotifier(name, update) {
  var message = [];
  message.push('Tips: '.green + 'Update available: ' + (update.latest).bold.green + (' (current: ' + update.current + ')').gray);
  message.push('Tips: '.green + 'Run ' + ('npm update -g ' + name).magenta + ' to update.');
  var max = sl(message[0])
  console.log(new Array(max).join('=').yellow)
  console.log(message[0])
  console.log(message[1])
  console.log(new Array(max).join('=').yellow)
};

module.exports.notify = function(name, version, time) {
  var notifier = updateNotifier({
    packageName: name,
    packageVersion: version,
    updateCheckInterval: time || (1000 * 60 * 60 * 24) // 1day
  });
  if (notifier.update) {
    showNotifier(name, notifier.update)
  };
};

module.exports.upgrade = function(name, version) {
  var n = updateNotifier({
    packageName: name,
    packageVersion: version,
    updateCheckInterval: 1, // 1ms
    callback: function(err, update) {
      if (update) {
        if (update.latest === update.current) {
          console.log('Tips:'.green, 'No update available!'.grey, ('(current: ' + update.current + ')').gray)
        } else {
          showNotifier(name, update)
        }
      };
    }
  })
}
