// utils/downloadPdf.ts
export const downloadPdf = (fileName: string, path: string) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Set the href to the PDF path
    link.href = path;
    
    // Set the download attribute with the desired filename
    link.download = fileName;
    
    // Ensure the link is not displayed
    link.style.display = 'none';
    
    // Append to the body
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  }