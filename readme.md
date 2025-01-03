# angular-architects react module federation POC

## How to start?
0. **npm** is preferable (there were issues with yarn installations). If `npm i` won't work somewhere, `npm i -f` works fine. Versions are limited explicitly
1. node `v20.17.0` (22 works as well, but 20.17 was checked)
2. **remote-1** `npm run start:rs` to start locally with `rspack`
3. **shell-nat-fed** `npm run start`
4. **remote-2** `npm run start` (has watcher) and `npm run build` (does not have watcher)

## Requirements: 
1. routes should be visible
2. lazy load should appear
3. all mfe parts should be able to share their libs (e.g. remote-1 should share its rxjs deps with host and so on)

## Challanges:
### remote-2: 
 - build process requires `esbuild` because there is no available adapter for other builders (TODO: check this);
 - once `react-router` added, it calls inside of a bundle *remote-2/dist/mfe-1/react-router* `import * as c from 'react'; ... c.createContext` and `c = undefined`, because it needs to be `c.default.createContext`. Same happens with `tanstack` router. Libs are added to shared context in **remote-2/builds/build-mfe1.ts**
