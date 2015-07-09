# J.Crew Summer Hackathon

## Description

This is a Sinatra app written in Ruby. The app scrapes several categories on the J.Crew website to allow the user to generate random outfits and click on those outfits to purchase at jcrew.com.

## Usage

Presently, this app must be used on CHROME ONLY. 

User should navigate to <a href="http://help-me-jcrew.herokuapp.com" target="_blank">Help me, J.Crew!</a> and wait for site to load. 

User should click "female" or "male" button. 

User will be directed to outfits page where user can generate additional random outfits. 

User can also switch from female to male outfits.

User can click on all images which will redirect user to the appropriate product page on the J.Crew website so user can purchase item. 

## Known Issues

Some browsers, such as Firefox, do not recognize certain JavaScript functions and will not load. Please use this app on CHROME ONLY.

Site takes several seconds to load due to the scraping. Ideally, a chron job would be used to seed the database, but this app was built in less than one day so there was no time.

Needs media queries.

## Author

Help me, J.Crew! was built by Koren Leslie Cohen.

<a href="http://linkedin.com/in/korenlesliecohen/" target="_blank">LinkedIn</a><br>
<a href="http://twitter.com/korenlc" target="_blank">Twitter</a><br>
<a href="http://korenlc.com" target="_blank">Blog</a><br>
<a href="http://klcohen.com" target="_blank">Portfolio</a>