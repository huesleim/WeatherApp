# Weather App

A small vanilla JavaScript app that summarizes a **5-day weather forecast** into a simple visual “mood” based on precipitation levels.

The app is intentionally minimal and focuses on clean data flow rather than UI complexity.

---

## Overview

Instead of reacting to a single day, the app looks at **total precipitation over five days** to provide a more stable, high‑level forecast summary.

This avoids noisy UI changes caused by very small daily rain values and results in clearer visual feedback.

---

## Features

* Fetches a 5-day forecast for a selected city using the Visual Crossing Weather API
* Sums daily precipitation values (in millimeters)
* Classifies the overall forecast as **dry**, **light rain**, or **rainy**
* Updates background color and heading text accordingly

---

## Tech Stack

* HTML
* CSS (Flexbox)
* Vanilla JavaScript
* Visual Crossing Weather API

No frameworks, no build tools, no image assets.

---

## Running the Project

Clone the repository and open `index.html` in your browser.

---

## Notes

* Small project made as an exercise on API fetching and handling

---

## License

MIT
