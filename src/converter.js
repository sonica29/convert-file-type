'use strict';
import * as path from 'path'
import * as fsp from 'fs/promises'
import {existsSync} from 'fs'
import libre from 'libreoffice-convert'
import util from 'util'

const __dirname = path.resolve();
libre.convertAsync = util.promisify(libre.convert);

export class converter{
    constructor() {}
    async toPdf(pathOfInputFile,outputFileName){
        if(!outputFile){
            throw new Error(`Error converting file:Specify output file name`);
        }
        try{
           
            const ext = '.pdf'
            const inputPath =  pathOfInputFile
            const outputDirectory=path.resolve(path.join(__dirname,'/convertedFiles'))
            
            // Check if directory exists where we want to save otherwise create
            if (!existsSync(outputDirectory)) {
                await fsp.mkdir(outputDirectory)
            } 
             // Create output file name with path
            
            const outputPath=path.join(outputDirectory,outputFileName+ext)
            // Read file
            const docxBuf = await fsp.readFile(inputPath);
            

        
            // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
            let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
            
            // Here in done you have pdf file which you can save or transfer in another stream
            // This will overwrite already existing file with same name
            await fsp.writeFile(outputPath, pdfBuf);
            return outputPath ;
            }
            catch(err){
                throw new Error(`Error converting file: ${err}`);
            }
    }
}







