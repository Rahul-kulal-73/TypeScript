type script is the improved version of javscript. type script have more features than js.
type script provide type safty.

install for type script:
npm i typescript -g

## Run PowerShell as Administrator, then type this:
`bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
`
##  If You Want to Reset It Later

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted

otherwise use 
`bash
 npx tsc app.ts
`


npx tsc --init
is used to create a `tsconfig.json` file in your TypeScript project.

📦 What is tsconfig.json?
It’s the TypeScript configuration file that tells the compiler (tsc) how to:
Find your TypeScript files
Compile them to JavaScript
Apply certain rules (like module type, target ES version, strictness, etc.)


`npx tsc --watch` automatically compiles your TypeScript code whenever you save changes.


