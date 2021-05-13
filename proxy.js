// Initialize
const proxyUrl = 'https://proxy.dev.exate.co/proxy-html?url=';
const listOfIframes = document.getElementsByTagName('iframe');
const noOfIframes = listOfIframes.length;

// Loop through all iframes
for (index = 0; index < noOfIframes; index++) {
    const i = index;
    const iframeSrc = listOfIframes[i].getAttribute('src');

    // Log iframe src value
    console.log({ iframeSrc });

    if (iframeSrc !== null) {
        fetch(proxyUrl + iframeSrc).then((response) => response.text())
            .then(rawData => listOfIframes[i].setAttribute('src', modifyIframeData(rawData)));
    }
}

modifyIframeData = (rawData) => {
    // Initialize DOM Parser
    const iframe = document.createElement('iframe');
    const parser = new DOMParser();
    const dom = parser.parseFromString(rawData, "text/html");
    const restrictedText = 'eXate | Restricted Access';

    // Modify DOM Data
    // dom.getElementsByTagName('h2')[0].innerHTML = 'eXate';

    if (document.getElementById('dicBankKey_input')?.innerText) {
        console.log({
            rawValue: document.getElementById('dicBankKey_input').innerText,
            newValue: restrictedText
        });
        document.getElementById('dicBankKey_input').innerText = restrictedText;
    }

    if (document.querySelector("table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div.bc_field_body > label[id^='AID_']")?.innerText) {
        console.log({
            rawValue: document.getElementById('dicBankKey_input').innerText,
            newValue: restrictedText
        });
        document.querySelector("table > tbody > tr:nth-child(2) > td:nth-child(3) > div > div.bc_field_body > label[id^='AID_']").innerText = restrictedText;
    }

    // Set Modified DOM Data
    const modifiedData = new XMLSerializer().serializeToString(dom);
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(modifiedData);
    return iframe.src;
}