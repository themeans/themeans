'use strict';

/**
 * @ngdoc service
 * @name airplayPutioApp.localstorage
 * @description
 * # localstorage
 * Service in the airplayPutioApp.
 */
angular.module('tm.localstorage',[])
  .service('tmLocalStorage', function tmLocalStorage($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        var ret;
        try
        {
          ret = angular.fromJson($window.localStorage[key]);
        }
        catch(e)
        {
          ret = $window.localStorage[key];
        }
        return ret || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = angular.toJson(value);
      },
      getObject: function(key, defaultValue) {
        return angular.fromJson($window.localStorage[key]) || defaultValue || {};
      },
      getKeys: function(){
        var keys = [], i;
        for (i = 0; i < $window.localStorage.length; ++i)
        {
          keys.push($window.localStorage.getItem($window.localStorage.key(i)));
        }
        return keys;
      },
      removeItem: function(key) {
        $window.localStorage.removeItem(key);
      },
      clear: function () {
        $window.localStorage.clear();
      }
    };
  });
