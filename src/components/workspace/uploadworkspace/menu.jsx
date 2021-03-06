import React from 'react';

import { LogoMenu, LogoSVGDownloadButton, EmbedButton,
	 LogoSVGCopyButton, PermalinkButton, ImageDownloadButton } from '../menu/index';
import { jsCodestring } from '../../../common/codestrings';
import { hasNegatives } from '../../../common/utils';

const ITEMSTYLE = {
    logosize: "16pt",
    labelsize: "10pt",
};

const reactCode = logoinfo => `
import { Logo${hasNegatives(logoinfo.ppm) ? "WithNegatives" : ""}, loadGlyphComponents } from 'logojs-react';
const myLogoProps = {
    startpos: ${logoinfo.startpos},
    ${hasNegatives(logoinfo.ppm) ? "values" : "ppm"}: [
${logoinfo.ppm.map(x => "        " + JSON.stringify(x)).join(",\n")}
    ],
    backgroundFrequencies: ${JSON.stringify(logoinfo.backgroundFrequencies)},
    alphabet: loadGlyphComponents([
${logoinfo.alphabet.map(x => "        " + JSON.stringify({ regex: x.regex, color: x.color })).join(",\n")}
    ]),
    yAxisMax: ${logoinfo.yAxisMax},
    negativealpha: ${logoinfo.negativealpha},
    inverted: ${logoinfo.inverted}
};

export const MyLogo = props => (
    <Logo${hasNegatives(logoinfo.ppm) ? "WithNegatives" : ""} {...myLogoProps} {...props} />;
);
`.substring(1); // trim leading line break

const jsCode = logoinfo => jsCodestring(`
window.onload = function() {
  const logoProps = {
    startpos: ${logoinfo.startpos},
    ${hasNegatives(logoinfo.ppm) ? "values" : "ppm"}: [
${logoinfo.ppm.map(x => "      " + JSON.stringify(x)).join(",\n")}
    ],
    backgroundFrequencies: ${JSON.stringify(logoinfo.backgroundFrequencies)},
    alphabet: logojs.loadGlyphComponents([
${logoinfo.alphabet.map(x => "      " + JSON.stringify({ regex: x.regex, color: x.color })).join(",\n")}
    ]),
    yAxisMax: ${logoinfo.yAxisMax},
    negativealpha: ${logoinfo.negativealpha},
    inverted: ${logoinfo.inverted}
  };
  logojs.embedLogo${hasNegatives(logoinfo.ppm) ? "WithNegatives" : ""}(document.getElementById("logo"), logoProps);
}
`);

const UploadLogoMenu = ({ svgref, apiurl, logoinfo, hidecopy }) => (
    <LogoMenu width="100%">
      <LogoSVGDownloadButton {...ITEMSTYLE}
			     labeltext="save (SVG)" svgref={svgref.current}
			     filename="logo.svg" />
      <ImageDownloadButton {...ITEMSTYLE}
      			     labeltext="save (non-vector)" svgref={svgref.current}
      			     filename="logo" />
      {!hidecopy && (
          <LogoSVGCopyButton {...ITEMSTYLE}
                 labeltext="copy SVG code" svgref={svgref.current} />
      )}
      <PermalinkButton {...ITEMSTYLE} labeltext="permalink"
		       url={apiurl} logoinfo={logoinfo} />
      <EmbedButton {...ITEMSTYLE} labeltext="embed" js={jsCode(logoinfo)}
                   url={apiurl} react={reactCode(logoinfo)} />
    </LogoMenu>
);
export default UploadLogoMenu;
