# UIUC Chapter Website - uiuc.hack4impact.org

This website uses the server-rendered react framework, [Next.js](http://nextjs.org) for the best of both worlds, react usable components and faster page loads (since this is mostly a static website). We are also able to load configurations, text, etc based on config files (possibly json).

To start development, first install node.js and yarn. Look at the [H4I wiki](https://github.com/hack4impact-uiuc/wiki/wiki/Mac-Setup) for instructions. Then,
```
yarn
yarn dev
```

For the optimal development environment, edit your code with [vscode](https://code.visualstudio.com/) and install the [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) then press `Cmd + Shift + P` to open the command palette and then search and click `Eslint: Enable Eslint`. Then, go to the settings (`Cmd + Shift + P` then type `open user settings`) and search for `Eslint`. Afterwards, click the checkbox for `Eslint: Auto Fix On Save`. This would automatically format your code as you go.