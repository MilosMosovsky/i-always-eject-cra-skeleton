# Almost perfect TS-React stack (aka. I-Always-Eject-CRA)

If you came across and you think that [create-react-app](https://github.com/facebook/create-react-app) just adds you an overhead and you need to `eject` immediately then continue reading. This repo kickstart new project with minimal configuration to use TypeScript, React, Router, Jest, Linting.

## Folder structure

I have been working with many projects and they always had a problem with scaling. Layouts and styles for different pages are usually very spread across application and not maintainable, therefore I came with an idea to have `Domains`, `Pages` and `Templates`.

* Domains - Domain based application split (or feature), you can split components based on their working domain (e.g. common, cart, profile ...)
* Pages - Actual page nodes which are rendering content (e.g. ***LoginPage*** )
* Templates - Page wrappers to share mutual styles (e.g. login page has different content layout than other pages)

`src/bootloader` - Main application point which is configuring routing and mounting page nodes.

`src/domains` - App domain based folder structure to easily find components based on where they are being used

**Example**
> Let's say we are creating ecommerce site with `Cart` component which is used on every page. We can create `src/domains/common/components/cart` and render component on every `ProductPage` (`src/components/pages/product-page`)


`src/components/pages` - Folder where page nodes are living

`src/components/templates` - Reusable page wrappers for different layouts

`src/components/themes` - Different theme configuration for the whole page

`src/config` - Configuration files, currently only routes definition

## Libraries

### 🚀 Bundler 

[parcel-bundler/parcel](https://github.com/parcel-bundler/parcel)
### 🎨 View layer

[facebook/react](https://github.com/facebook/react) -`react@next`

[facebook/react-dom](https://github.com/facebook/react/tree/master/packages/react-dom) - `react-dom@next`

### 🚧  Testing

[facebook/jest](https://github.com/facebook/jest) - Uses `ts-jest`

[kentcdodds/react-testing-library](https://github.com/kentcdodds/react-testing-library)

### 🛣️ Routing

[router5/router5](https://github.com/router5/router5)

### 💅 Styling

[styled-components/styled-components](https://github.com/styled-components/styled-components)

## Commands

`yarn start` - Starts the server and watch for changes

`yarn lint` - Starts the linter 

`yarn test` - Starts Jest testing suite

`yarn ts:check` - Starts typescript checker

### Watch modes

`yarn lint:watch` - Starts the linter in watch mode

`yarn test --watchAll` - Starts Jest in watch mode

`yarn ts:check -w` - Starts typescript checker in watch mode



