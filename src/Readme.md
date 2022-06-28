# convert-file-type

A simple and fast node.js module for converting office documents to different formats.

## Dependency

Please install libreoffice in /Applications (Mac), with your favorite package manager (Linux), or with the msi (Windows).

## Usage example

```javascript
'use strict';

import {convert} from 'convert-file-type'
try{
    const outputPath= await convert.toPdf(pathOfInputFile,outputFileName)
    console.log(outputPath)
}
catch(err){
    console.log(err)
}
```
### Properties

* `pathOfInputFile` The complete path of input file with file name
   like /home/abc/test.docx
* `outputFileName` The output file name without extension
   like test 

## Warning

Output file will always be overwritten if file already exists with same name.

Example:
outputFileName can be combination of userId and datetimestamp
