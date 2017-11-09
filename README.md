# flickr
flickr code challenge
(https://flickr.uilgniw.com)

# Frontend strategy
1. Load [Public feed](https://api.flickr.com/services/feeds/photos_public.gne) using JSONP format using AngularJS
2. display to the view using `ng-repeat` directive
3. A form is submitted to `/search/` when user enter keywords and click on a search button.
4. When user perform a search, `&tags=[USER_ENTERED_KEYWORDS]` is attached to the [Public feed](https://api.flickr.com/services/feeds/photos_public.gne) so that the feed will return images with the relevant tags.

# Backend strategy
1. The express.js server will listen to two end-points, `/` and `/search/`.
2. Server will send `index.html` on both end-points.

# Deployment strategy
1. The project is deployed on AWS EC2
2. Nginx is used as the reverse proxy, routing the requests from port `80`, `443` to `3000`
3. Git is used as the version control system
4. On deployment, after pushed on the local side, manually pull on the server side and run `npm run deploy` to deploy the project


# to run locally
Run `npm start`
