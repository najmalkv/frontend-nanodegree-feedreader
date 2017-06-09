## Frontend Nanodegree Feed Reader Project

This is my solution to the feedreader project of the frontend nanodegree from Udacity. The project requirement is to write unit tests using jasmine to a Rss feeds website. The tests should be comprehensive enough to test all the functionality.



### Installation
To get the project running on your local machine firstly take a clone of this repo onto your local machine. Then `cd` into the root directory on your CLI tool(eg. CMD prompt or Terminal) and then run `npm install`. This will install all the node packages you require to run the project.

```
npm install
```

### How to Run

The project is equipped with a gulp build system. You can follow the below mentioned methods to run the website depending on the build you prefer.

 _Note:_ `cd` into the root folder on your CLI tool and then run the commands.

To run the devolopment build with auto reload use the following command:
```
gulp serve
```

To run the production build use the following command:
```
gulp serve:dist
```

### How to Build for production

To get the production build use the following command from the root folder:
```
gulp
```

This command will optimize the files and output it to the **dist** folder. Use the contents of this folder for your production hosting.

## LICENSE

MIT License

Copyright (c) 2017 Najmal K V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.