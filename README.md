To run single typescript file use this approach:

- navigate (in terminal) to file location you want to run
- execute: ts-node [filename].ts

To install package ts-note run:
npm i -g ts-node

This command will compile file to js and run it without storing .js files

If we don't use ts-node then we will need to do these steps:

1. Compile file with: tsc [filename].ts //(js file will be created)
2. Tun js file with: node [filename].js
3. Remove js file

---

To run the whole application: npm start

---

Useful typescript links:

1. https://www.typescriptlang.org/
   -> playground tab //try typescript easily
