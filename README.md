# Phil trying to learn TypeScript for the Browser

Install these globally with `npm`.

```bash
npm install --global npx yarn
```

Then install the contents of the `package.json` to the `node_modules` directory.

```bash
yarn install
```

Then you can compile the code using:

```bash
npx tsc
```

OR use Yarn,

```bash
yarn run tsc
```

Now you can open the `index.html` using your web browser.

```bash
firefox index.html
```

I'm using:

* Vim 8.2
* coc-nvim
  * coc-tsserver
  * coc-html
  * coc-json
  * coc-eslint
* TypeScript
* NodeJS
* ESLint
* ALE
