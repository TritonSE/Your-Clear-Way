const energyMonitoringSystemXML = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="70" height="70" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00195312)"/>
</pattern>
<image id="image0" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

export default energyMonitoringSystemXML;