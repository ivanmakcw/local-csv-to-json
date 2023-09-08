# Locale csv to json

This is a open source project that allow user to use CSV file to store locale text of different language and automatically generate corresponding locale json file.

## Installation

```sh
npm install
```

## Usage

```sh
node ./main.mjs <csvFilePath> <exportPath>
```

## Csv Example

```txt
 key,en-US,zh-CN,zh-HK
 hello,hello,你好,你好

```

## Histroy

Version 0.1 (2023-09-07) - creating main functionality

## Credits

Lead Developer - Ivan Mak (@ivanmakcw)

## License

The MIT License (MIT)

Copyright (c) 2023 Ivan Mak

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
