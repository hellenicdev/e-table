# E-Table

[![Live demo](https://img.shields.io/badge/demo-live-19336e?style=flat-square)](https://hellenicdev.eu/e-table/) [![License: BSD 3-Clause](https://img.shields.io/badge/license-BSD%203--Clause-blue?style=flat-square)](LICENSE)

A mock restaurant table-reservation app: pick a restaurant, a date and time, and confirm your booking.

**Live site:** <https://hellenicdev.eu/e-table/>

> **Note:** this is a front-end mock-up. No reservation is actually sent anywhere.

## Features

- Step-by-step flow: restaurant, date and time, your details, confirmation
- Dates in the past are blocked, and email addresses are checked
- Keyboard and screen-reader friendly (focus moves to each new step)
- Responsive layout for phones and desktops

## Run locally

No build step. Serve the folder with any static server:

```sh
git clone https://github.com/hellenicdev/e-table.git
cd e-table
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Tech

- HTML5, CSS3 and vanilla JavaScript

## License

BSD 3-Clause. See [LICENSE](LICENSE).

## Credits

Made by [HellenicDev](https://hellenicdev.eu). More projects at <https://hellenicdev.eu>.

If you enjoy it, you can support the work here:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S31XB030)
