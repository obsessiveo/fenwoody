# fenwoody

## 1. Introduction

fenwoody is a simple and easy-to-use tool for generating a svg string representing the board and the pieces.

Can be used for example as a static image for a chess game.

For example the FEN string `r2qk3/pp2n1p1/2ppPp2/6p1/2B5/7r/PP2QPPP/4R1K1 w q - 0 19` generates:

![For example](/assets/example.svg)

## 2. Installation

```bash
npm install fenwoody
```

## 3. Usage

```bash
fenwoody -h
```

```bash

Usage: fenwoody [options]

Options:
  -V, --version          output the version number
  -d, --dir <dir>        directory to be parsed (default: ".")
  -e, --exclude <regex>  exclude files matching the regex (default: "node_modules")
  -h, --help             display help for command

```

## 4. Example

```bash
fenwoody -d .
```

```bash

![For example](/assets/example.svg)
## Resources
- [Great svg editor](https://editsvgcode.com/)