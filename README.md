# Magical World of Harry Potter

Character discriptions and images from the World of Harry Potter.

Live Project at: <a href="https://brettcrafton.com/Portfolio/Harry%20Potter/index.html" target="_blank" rel="noreferrer"> https://brettcrafton.com/Portfolio/Harry%20Potter/index.html </a>

<a href="https://brettcrafton.com/Portfolio/Harry%20Potter/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Harry%20Potter%20gif.gif?raw=true" alt="project example"/> </a>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Utilized the API from http://hp-api.herokuapp.com/.

API fetch requests per house/character group that save into variable objects. Use dot notation and parsing though arrays with the carousel to render the object data to the DOM. Music, background, styling all for looks. Default image if no image provided, strings default to "Unknown" if no data/empty string.

## Optimizations:

Make code DRY by reducing redundancies, especially in the conditional section (did at first but function wasn't working properly so moved on). OOP would help here. Change simple conditional if/else statements to ternary operators. With time, make more responsive. Especially on the smaller viewports where some odd orientations may occur. Modify image data from API for more style consistency with carousel. 

## Lessons Learned:

Honed more in fetch requests. Organized my js code into a more legible format with better comments. Some new style and transparency options in CSS.

## APP Use:

Select by School House, Staff, or All.

If included in the API, will show character's:

<ul>
  <li>Name</li>
  <li>Nickname(s)</li>
  <li>Actor(s)</li>
  <br>
  <li>Species</li>
  <li>Gender</li>
  <li>Eye Color</li>
  <li>Hair Color</li>
  <li>Status (alive or dead)</li>
  <li>DOB</li>
  <li>Year of Birth</li>
  <br>
  <li>Wand material, core, and length</li>
  <li>Patronus Form</li>
</ul>

## Other Projects:

**Cocktail Recipes:** https://github.com/BrettCrafton/Cocktail-Recipes

**Rick and Morty Parasite Detector:** https://github.com/BrettCrafton/Rick-and-Morty-Parasite-Detector

**NASA APOD:** https://github.com/BrettCrafton/NASA-APOD
