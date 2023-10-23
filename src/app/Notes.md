# PUBLIC:
- Public folder is to keep the track of the routes available in apps so we keep those files which we want to display on a particular route
# IMAGES
- Images are components in react
# FILE BASED ROUTING
- for nested route create a sub folder in the public/pages directory and in that folder create a file so route will be localhost/folder_name_file_name
- dynamics route can be added using [] in file name like [id].js, you can fetch the url info using next router
# HEAD AND SCRIPT COMP
- you can use HEAD component to inject title and meta data for every page
- you can use next SCRIPT component to add script pages for lazy load and performance improvement instead of using embedded html script tag - use outside of HEAD
-  lazy load means images are load when the following image is in the viewport 
# SSR OR CSR 
- when creating components you shoudl see how a user will interact with them 
- If you need seo or need to keep the resource safe (hide some data from user) go for SSR
-If there's user interaction or events logging or when you need hooks you should opt for CSR
