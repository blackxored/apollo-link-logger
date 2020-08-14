# apollo-link-logger

> A logger for Apollo Link that resembles redux-logger

[![Semantically Released][semantic-release-badge]][semantic-release]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Styled with Prettier][prettier-badge]][prettier]
[![AirBnB style guide][airbnb-style-badge]][airbnb-style]

[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

Logger for Apollo Link that uses a similar format to redux-logger. Includes performance information.

## Installing / Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. 

A quick introduction of the minimal setup you need to get a hello world up & running.

```shell
npm install apollo-link-logger
```

### Prerequisites

* Apollo Link.

### Usage

```javascript
import apolloLogger from 'apollo-link-logger';

// ...
ApolloLink.from([
  apolloLogger,
  // ...
]);
```

## Screenshots

### Query (expanded):

![Query Expanded](https://github.com/blackxored/apollo-link-logger/blob/master/docs/example-output.png)

### Mutation (expanded):

![Mutation Expanded](https://github.com/blackxored/apollo-link-logger/blob/master/docs/example-output-mutation.png)

### Within other logging statements:

![Full](https://github.com/blackxored/apollo-link-logger/blob/master/docs/example-output-full.png)

## Usage with React Native and other restricted environments

We include a polyfilled version of `console.groupCollapsed` and `console.groupEnd` that
invokes `console.log` with slightly different prefix to separate output.

## Developing

### Setting up Dev

Here's a brief intro about what a developer must do in order to start 
developing the project further:

```shell
git clone https://github.com/blackxored/apollo-link-logger
cd apollo-link-logger
yarn
```

## Versioning

We use [SemVer][semver] for versioning. In addition, it's automatic via
[semantic-release][semantic-release], and our [commit convention][commit-convention].

For the versions available, see the [Releases][releases] on this repository.

## Style guide

We base our code style on [AirBnB's style guide][airbnb-style] and we check with 
[ESLint][eslint] and automatically format our code with [Prettier][prettier].

## License

This project is licensed under the MIT License - see the 
[license] file for details.

## Contributing

If you're interested in contributing to this project in any form, please read
our [Contribution Guidelines][contributing].

### Code of Conduct

We've adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][coc] so that you can understand what actions 
will and will not be tolerated.

### Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/133308?v=4" width="100px;"/><br /><sub><b>Adrian Perez</b></sub>](https://adrianperez.codes)<br />[💻](https://github.com/blackxored/apollo-link-logger/commits?author=blackxored "Code") [📖](https://github.com/blackxored/apollo-link-logger/commits?author=blackxored "Documentation") [🚇](#infra-blackxored "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/blackxored/apollo-link-logger/commits?author=blackxored "Tests") | [<img src="https://avatars3.githubusercontent.com/u/294597?s=460&v=4" width="100px;"/><br /><sub><b>Adam Savitzky</b></sub>](https://github.com/adambom)<br />[💻](https://github.com/blackxored/apollo-link-logger/commits?author=adambom "Code") | [<img src="https://avatars3.githubusercontent.com/u/3065138?v=4" width="100px;"/><br /><sub><b>Ifeanyi Oraelosi</b></sub>](https://github.com/gnerkus)<br />[💻](https://github.com/blackxored/apollo-link-logger/commits?author=gnerkus "Code") | [<img src="https://avatars0.githubusercontent.com/u/7076981?v=4" width="100px;"/><br /><sub><b>Romario</b></sub>](https://github.com/romarioraffington)<br />[🐛](https://github.com/blackxored/apollo-link-logger/issues?q=author%3Aromarioraffington "Bug reports") [🤔](#ideas-romarioraffington "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/6183943?v=4" width="100px;"/><br /><sub><b>Yuriy Kornienko</b></sub>](http://www.dinamchiki.ru)<br />[💻](https://github.com/blackxored/apollo-link-logger/commits?author=Horoshiy "Code") | [<img src="https://avatars1.githubusercontent.com/u/2717746?v=4" width="100px;"/><br /><sub><b>Dmitry Shvedov</b></sub>](https://github.com/dmt0)<br />[💻](https://github.com/blackxored/apollo-link-logger/commits?author=dmt0 "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/blackxored/apollo-link-logger.svg?style=flat-square
[build]: https://travis-ci.org/blackxored/apollo-link-logger
[coverage-badge]: https://img.shields.io/codecov/c/github/blackxored/apollo-link-logger.svg?style=flat-square
[coverage]: https://codecov.io/github/blackxored/apollo-link-logger
[version-badge]: https://img.shields.io/npm/v/apollo-link-logger.svg?style=flat-square
[package]: https://www.npmjs.com/package/apollo-link-logger
[downloads-badge]: https://img.shields.io/npm/dm/apollo-link-logger.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/apollo-link-logger
[license-badge]: https://img.shields.io/npm/l/apollo-link-logger.svg?style=flat-square
[license]: https://github.com/blackxored/apollo-link-logger/blob/master/LICENSE.md
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier 
[airbnb-style-badge]: https://img.shields.io/badge/code%20style-airbnb-green.svg?style=flat-square
[airbnb-style]: https://github.com/airbnb/javascript
[eslint]: http://eslint.org 
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[contributing]: https://github.com/blackxored/apollo-link-logger/blob/master/CONTRIBUTING.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/blackxored/apollo-link-logger/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/blackxored/apollo-link-logger.svg?style=social
[github-watch]: https://github.com/blackxored/apollo-link-logger/watchers
[github-star-badge]: https://img.shields.io/github/stars/blackxored/apollo-link-logger.svg?style=social
[github-star]: https://github.com/blackxored/apollo-link-logger/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20apollo-link-logger%20by%20%40blackxored%20https%3A%2F%2Fgithub.com%2Fblackxored%2Fapollo-link-logger%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/blackxored/apollo-link-logger.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[semver]: http://semver.org/
[releases]: https://github.com/blackxored/apollo-link-logger/releases
[commit-convention]: https://www.npmjs.com/package/@commitlint/config-conventional

