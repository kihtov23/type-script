To run ts files easily, install package ts-note
npm i -g ts-node

than navigate (in terminal) to file location you want to run and execute

ts-node [filename].ts

This command will compile file to js and run it without storing .js files

If we don't use ts-node then we will need to do these steps:

1. Compile file with tsc [filename].ts (js file will be created)
2. Tun js file with - node [filename].js
3. 3 Remove js file
