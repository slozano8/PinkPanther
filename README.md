<h1>README</h1>
<h2>Notes</h2>
<ul>
  <li>I have the project set to use "@expo/metro-runtime": "~4.0.0" and it works locally for both web and Expo GO</li>
  <li>We are using expo version 52+</li>
  <li>
      If you want to use this download, and run npx expo snack.expo will work sort of if you go into the package.json and replace "@expo/metro-runtime": "~4.0.0" with "@expo/metro-runtime": "^3.0.0"
      However, even then images will not load on mobile and the api call will not work.
  </li>
</ul>
<h2>Known Issues</h2>
<ol>
  <li>metro-runtime "~4.0.0" is not resolving in snack.expo</li>
  <li>Images in snack.expo are not loading</li>
  <li>The API call in snack.expo is not triggering, therefore no content for our second screen.</li>
</ol>


