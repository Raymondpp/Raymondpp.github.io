import React, { Component } from 'react';
import { Document, Page, pdfjs, PDFDownloadLink } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {

        const { pageNumber, numPages } = this.state;

        return (

            <div>

                <Document
                    file="./RaymondZhou-CV.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >

                    <Page style={{size: "A4"}} pageNumber={pageNumber}>
                        <p>Page {pageNumber} of {numPages}</p>
                    </Page>
                    <Page style={{size: "A4"}} pageNumber={2}>
                        <p>Page {2} of {numPages}</p>
                    </Page>

                </Document>
                <div className="resume-download">
                <a href="../RaymondZhou-CV.pdf" target="_blank">
                    <i className="fa fa-download" aria-hidden="true" /> 
                    Download My Resume
                </a>
                </div>
            </div>
           
                
           
        );

    }
}

export default Resume;