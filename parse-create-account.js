if(typeof Parse.require === "undefined"){Parse.require = require;}(function (global) {
    function require(file, parentModule) {
        if ({}.hasOwnProperty.call(require.cache, file))
            return require.cache[file];
        var resolved = require.resolve(file);
        if (!resolved)
            throw new Error('Failed to resolve module ' + file);
        var module$ = {
                id: file,
                require: require,
                filename: file,
                exports: {},
                loaded: false,
                parent: parentModule,
                children: []
            };
        if (parentModule)
            parentModule.children.push(module$);
        var dirname = file.slice(0, file.lastIndexOf('/') + 1);
        require.cache[file] = module$.exports;
        resolved.call(module$.exports, module$, module$.exports, dirname, file);
        module$.loaded = true;
        return require.cache[file] = module$.exports;
    }
    require.modules = {};
    require.cache = {};
    require.resolve = function (file) {
        return {}.hasOwnProperty.call(require.modules, file) ? require.modules[file] : void 0;
    };
    require.define = function (file, fn) {
        require.modules[file] = fn;
    };
    require.define('/packages/parse-create-account/parse-create-account.js', function (module, exports, __dirname, __filename) {
        'use strict';
        function CreateAccount(Parse, beforeProfileSave, beforeSettingsSave) {
            this.beforeUserSave = function (user) {
                var deferred = new Parse.Promise(), userACL = new Parse.ACL();
                createProfile(user).then(function (profile) {
                    user.set('profile', profile);
                    createSettings(user).then(function (settings) {
                        userACL.setPublicReadAccess(false);
                        userACL.setPublicWriteAccess(false);
                        user.set('settings', settings);
                        user.setACL(userACL);
                        deferred.resolve(user);
                    }, fail);
                }, fail);
                function fail(err) {
                    console.log(err);
                    deferred.reject(err);
                }
                return deferred;
            };
            this.afterUserSave = function (user) {
                var deferred = new Parse.Promise();
                setUserPointersToProfile(user).then(function (profile) {
                    setSettingsUserPointer(user).then(function (settings) {
                        deferred.resolve(profile, settings);
                    }, deferred.reject);
                }, deferred.reject);
                return deferred;
            };
            function createProfile(user) {
                var Profile = Parse.Object.extend('Profile'), profile = new Profile(), deferred = new Parse.Promise();
                beforeProfileSave(profile, user).then(function (profile) {
                    profile.save(profile, {
                        success: function (response) {
                            deferred.resolve(response);
                        },
                        error: function (response, error) {
                            deferred.reject(error);
                        }
                    });
                }, function (err) {
                    deferred.reject(err);
                });
                return deferred;
            }
            function createSettings(user) {
                var Settings = Parse.Object.extend('Settings'), settings = new Settings(), deferred = new Parse.Promise();
                beforeSettingsSave(settings, user).then(function (settings) {
                    settings.save({
                        success: function (response) {
                            deferred.resolve(response);
                        },
                        error: function (response, err) {
                            deferred.reject(err);
                        }
                    });
                }, function (err) {
                    deferred.reject(err);
                });
                return deferred;
            }
            function setUserPointersToProfile(parseUser) {
                Parse.Cloud.useMasterKey();
                var deferred = new Parse.Promise(), parseProfileRef = parseUser.get('profile'), profileACL;
                parseProfileRef.fetch().then(function (parseProfile) {
                    profileACL = parseProfile.get('ACL');
                    profileACL.setReadAccess(parseUser, true);
                    profileACL.setWriteAccess(parseUser, true);
                    parseProfile.set('user', parseUser);
                    parseProfile.setACL(profileACL);
                    parseProfile.save(null, {
                        success: function (response) {
                            deferred.resolve(response);
                        },
                        error: function (response, error) {
                            deferred.reject(error);
                        }
                    });
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred;
            }
            function setSettingsUserPointer(parseUser) {
                Parse.Cloud.useMasterKey();
                var deferred = new Parse.Promise(), parseSettings = parseUser.get('settings'), settingsACL = new Parse.ACL();
                settingsACL.setReadAccess(parseUser, true);
                settingsACL.setWriteAccess(parseUser, true);
                parseSettings.set('user', parseUser);
                parseSettings.setACL(settingsACL);
                parseSettings.save(null, {
                    success: function (response) {
                        deferred.resolve(response);
                    },
                    error: function (response, error) {
                        deferred.reject(error);
                    }
                });
                return deferred;
            }
            return this;
        }
        module.exports = function (Parse, beforeProfileSave, beforeSettingsSave) {
            return new CreateAccount(Parse, beforeProfileSave, beforeSettingsSave);
        };
    });
    global.exports = require('/packages/parse-create-account/parse-create-account.js');
}.call(this, module));