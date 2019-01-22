# Doctor Finder

#### By Leilani Leach
#### 1/18/19

### Description

Search for doctors in the Portland, OR region by name or by specialty.

### Specs
| # | Spec | Input | Output |
| :-------------     | :-------------     | :------------- | :------------- |
| 1 | The program can accept the user input and create a search query from the name and/or specialty.  | Name: "Nguyen" | https://api.betterdoctor.com/2016-03-01/doctors?name=nguyen&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&skip=0&limit=10&user_key=hidden |
| 2 | Search results will display a list of doctors matching the search terms, including their address and phone number.| Name: "Nguyen" | John Nguyen, MD. 509-123-1234 1420 3rd Ave |
| 3 | Search results indicate whether the doctor is currently accepting new patients | Name: "Nguyen" | John Nguyen, MD. New Patients: True |


## Setup/Installation Requirements

1. Clone this repository
2. Create an .env file at the root level
3. Enter your own API key from the Better Doctor API into the .env file: export const API_KEY = "(your key)";
4. Run _ npm install _ in the command line
5. Run _ npm run start _ in the command line
6. Enter search terms in the browser that pops up

## Known Bugs
* Second address line displays "undefined" if the doctor office doesn't have a suite or room listed

## Technologies Used
* BetterDoctor API https://developer.betterdoctor.com/
* Node.js
* Webpack
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Support and Contact Details

_Email leilanileach@yahoo.com._


Copyright (c) 2019 **_Leilani Leach_**
