# Progression

Project 2 for GA's SEI

## Project Description

This app is designed to learn skateboarding tricks along with motivating users to continue learning as they get to track their progress through a video log.

## API and Data Sample

https://api.airtable.com/v0/

base('tricks').create([
{
"fields": {
"video-link": "https://www.youtube.com/watch?v=UWLiI7mL_Z4&t=152s&loop=30&start=00:53&end=00:54",
"name": "Ollie",
"description": "Foot Position\nPopping the tail\nSliding the front foot\nKicking the front foot\nPutting it all together\nLand!"
}
},
{
"fields": {
"video-link": "https://www.youtube.com/watch?v=UWLiI7mL_Z4&t=152s&loop=30&start=00:54&end=00:55",
"name": "Frontside 180",
"description": "Simply pop your ollie, slightly turned already as you pop. As your front foot slides up the board and your head and shoulders turn towards your heels,..."
}
}
]

## Wireframes

#### MVP

React:
-working react app
-use React Router
-6 seperate rendered components
-organized file system
-use either functional or class components
-use Axios to GET/POST data
-use React for DOM manipulation
Style:
-style through css, styled coomponents or component library
-use flexbox or grid with CSS
Linting:
-appropriate naming conventions with either camelCase or kebab-case in the correct environments
-remove clutter of console.logs and uneccessary comments
Deployment:
-deploy via Netlify

#### PostMVP

-Look at indivual entries after it returns new get request
-filter results of entries

## Project Schedule

| Day     | Deliverable                                                                    | Status     |
| ------- | ------------------------------------------------------------------------------ | ---------- |
| Oct 8-9 | Prompt / Wireframes / Priority Matrix / Timeframes                             | Incomplete |
| Oct 9   | Project Approval / Touch files / Implement AuthKey and Base / File Structuring | Incomplete |
| Oct 10  | Build Components/ Get Requests / Render to DOM                                 | Incomplete |
| Oct 11  | Make POST requests                                                             | Incomplete |
| Oct 12  | Route/Link Components                                                          | Incomplete |
| Oct 13  | Styling                                                                        | Incomplete |
| Oct 14  | Finish MVP                                                                     | Incomplete |
| Oct 15  | Post MVP/ Clean up project/ Update README.md                                   | Incomplete |
| Oct 16  | Presentations                                                                  | Incomplete |

## Priority Matrix

## Timeframes

| Component                                                         | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project setup                                                     |    H     |     3 hrs      |               |             |
| Build Componenets                                                 |    H     |     3 hrs      |               |             |
| Implementing API Base/Key                                         |    H     |     3 hrs      |               |             |
| Returning response from initial get request and playing with data |    H     |     3 hrs      |               |             |
| Create a POST request                                             |    H     |     3 hrs      |               |             |
| Return and render GET request of entries                          |    H     |     3 hrs      |               |             |
| Whiteboarding                                                     |    H     |     3 hrs      |               |             |
| Style desktop elements                                            |    H     |     3 hrs      |               |             |
| Style tablet elements                                             |    H     |     3 hrs      |               |             |
| Style mobile elements                                             |    H     |     3 hrs      |               |             |
| Troubleshooting and Research/Learn                                |    H     |     3 hrs      |               |             |
| Total                                                             |    H     |     33 hrs     |               |             |

## Swot

Strengths: All components are examples from lectures making the project manageable.
Weaknesses: The project implements video which could cause problems.
Opportunities: The project has the potential to have a lot of layers creating a an engaging platform.
Threats: The project has to be configured properly so that others can't access the data or manipulate it.

## Change Log
