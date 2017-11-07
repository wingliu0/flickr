/**
 * @namespace flickrApp
 */
angular.module('flickrApp', [])
    /**
     * Feeds Factory
     * @desc Factory that consolidated jsonp calls of feeds
     * @memberOf flickrApp
     */
    .factory('feedsFactory', ['$http', '$q', '$sce',
        function ($http, $q, $sce) {
            var obj = {};
            var jsonUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'

            obj.getFeed = function (option) {
                if (option.tag) {
                    jsonUrl += ('&tags=' + option.tag)
                }
                var trustedUrl = $sce.trustAsResourceUrl(jsonUrl);
                var deferred = $q.defer();
                $http.jsonp(trustedUrl, { jsonpCallbackParam: 'callback' })
                    .catch(function (e) { });
                window.jsonFlickrFeed = function (data) {
                    deferred.resolve(data);
                }

                return deferred.promise;
            };
            return obj;
        }
    ])
    /**
     * @class feedController
     * @desc load feeds into items
     * @namespace flickrApp
     */
    .controller('feedController', ['feedsFactory',
        function (feedsFactory) {
            var feedCtrl = this;


            var tag = getParameterByName('text');

            feedsFactory.getFeed({ tag: tag }).then(function (data) {
                feedCtrl.items = data.items;
            });

        }
    ])
    /**
     * @class navController
     * @desc update search text according to query string
     * @namespace flickrApp
     */
    .controller('navController', [function () {
        var navCtrl = this
        navCtrl.text = getParameterByName('text') || ''
    }])