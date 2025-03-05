'use client'

import { DocumentArrowDownIcon } from '@heroicons/react/24/solid'

export function PDFDownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/asset/mycv.pdf';
    link.download = 'ODUNAYO_DAUDA__CV.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button 
      onClick={handleDownload}
      className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <DocumentArrowDownIcon className="h-5 w-5" />
      Download PDF
    </button>
  )
}