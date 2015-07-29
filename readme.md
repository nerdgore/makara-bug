# Makara Bug

> A sample project to demonstrate that using makara and dust-makara-helpers in an express app will render unresponsive if you use multiple includes.

## Installing the project

Make sure you have all the global dependencies installed:
- Node.js
- Nodemon

```
git clone https://github.com/nerdgore/makra-bug
npm instrall
npm run develop
```

## What is the problem

Using makara togehter with dust-makara-helpers in a project caused the express app to become unresponsive when multiple partial includes are used in a template. The problem is somehow tied to the number of includes used - the more includes the template has, the less often you can request the page using the template. To demonstrate this this project serves two pages, `/` with 5 includes and `/break` with 12 includes.

## Steps to reproduce

1. install the app locally
2. start the server
3. navigate to [localhost:3000](htp://localhost:3000)
4. click the link _break me_
5. reload the page (sometime it breaks on initial load already)
