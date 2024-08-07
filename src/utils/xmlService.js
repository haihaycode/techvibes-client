// src/utils/xmlService.js
export const readXMLFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(event.target.result, 'application/xml');
            const parseError = xml.getElementsByTagName('parsererror');

            if (parseError.length > 0) {
                reject(new Error('Invalid XML content. Parsing error: ' + parseError[0].textContent));
            } else {
                resolve(xml);
            }
        };
        reader.onerror = () => reject(new Error('File could not be read.'));
        reader.readAsText(file);
    });
};
