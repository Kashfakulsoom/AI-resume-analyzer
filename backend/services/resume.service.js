const pdfjs = require("pdfjs-dist/legacy/build/pdf.js");
const mammoth = require("mammoth");

const extractResumeText = async (buffer, mimetype, filename) => {

  try {

    
    
    if (
      mimetype.includes("pdf") ||
      filename.toLowerCase().endsWith(".pdf")
    ) {

      const uint8Array = new Uint8Array(buffer);

      const pdf = await pdfjs.getDocument({
        data: uint8Array
      }).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {

        const page = await pdf.getPage(i);

        const content = await page.getTextContent();

        const strings = content.items.map(item => item.str);

        text += strings.join(" ");

      }

      return text;

    }


    
    else if (
      mimetype.includes("word") ||
      mimetype.includes("document") ||
      filename.toLowerCase().endsWith(".docx")
    ) {

      const result = await mammoth.extractRawText({ buffer });

      return result.value;

    }


    else {

      throw new Error(
        `Unsupported file type: ${mimetype}`
      );

    }
   
  }

  catch (error) {

    console.error("Extraction error:", error);

    throw error;

  }

};

module.exports = extractResumeText;