import React from 'react';
import { CompleteGlyphmap, DNAGlyphmap } from 'logos-to-go-react';

import SyntaxHighlighter from '../syntax';
import { INTRON_PWM, CAP_PWM, CTCF_PWM } from '../constants';

export const CAP_CODESTRING_REACT = `
import { DNALogo } from 'logosj-react';
const CAP_PWM = [
    [ 0.36, 0.08, 0.18, 0.36 ], [ 0, 0.16, 0.04, 0.79 ], [ 0.04, 0.02, 0.81, 0.12 ],
    [ 0.02, 0.16, 0, 0.81 ], [ 0.08, 0, 0.83, 0.08 ], [ 0.87, 0.06, 0.06, 0 ],
    [ 0.12, 0.20, 0.18, 0.48 ], [ 0.18, 0.34, 0.20, 0.26 ], [ 0.18, 0.30, 0.10, 0.40 ],
    [ 0.30, 0.14, 0.34, 0.20 ], [ 0.20, 0.16, 0.42, 0.20 ], [ 0.32, 0.22, 0.14, 0.30 ],
    [ 0.12, 0.06, 0.14, 0.67 ], [ 0.14, 0.79, 0, 0.06 ], [ 0.71, 0.02, 0.20, 0.06 ],
    [ 0.20, 0.65, 0, 0.14 ], [ 0.67, 0.08, 0.12, 0.12 ], [ 0.24, 0.18, 0.14, 0.42 ],
    [ 0.36, 0.02, 0, 0.61 ]
];

export const CAPLogo = props => (
    <DNALogo pwm={CAP_PWM} />
);
`;

export const CTCF_CODESTRING_REACT = `
import { DNALogo } from 'logosj-react';
const CTCF_PWM = [
  [0.09, 0.31, 0.08, 0.50], [0.18, 0.15, 0.45, 0.20], [0.30, 0.05, 0.49, 0.14],
  [0.06, 0.87, 0.02, 0.03], [0.00, 0.98, 0.00, 0.02], [0.81, 0.01, 0.07, 0.09], 
  [0.04, 0.57, 0.36, 0.01], [0.11, 0.47, 0.05, 0.35], [0.93, 0.01, 0.03, 0.01],
  [0.00, 0.00, 0.99, 0.01], [0.36, 0.00, 0.64, 0.00], [0.05, 0.01, 0.55, 0.37], 
  [0.03, 0.00, 0.97, 0.00], [0.06, 0.00, 0.85, 0.07], [0.11, 0.80, 0.00, 0.07],
  [0.40, 0.01, 0.55, 0.01], [0.09, 0.53, 0.33, 0.04], [0.12, 0.35, 0.08, 0.43], 
  [0.44, 0.19, 0.29, 0.06]
];

export const CTCFLogo = props => (
    <DNALogo pwm={CTCF_PWM} mode="FREQUENCY" />
);
`;

export const INTRON_CODESTRING_REACT = `
import { DNALogo } from 'logosj-react';
const INTRON_PWM = [
  [ 0.06, 0.46, 0.10, 0.37 ], [ 0.16, 0.22, 0.22, 0.40 ], [ 0.09, 0.26, 0.16, 0.48 ],
  [ 0.08, 0.31, 0.20, 0.41 ], [ 0.16, 0.20, 0.10, 0.53 ], [ 0.03, 0.24, 0.10, 0.62 ],
  [ 0.07, 0.24, 0.13, 0.55 ], [ 0.02, 0.43, 0.09, 0.46 ], [ 0.07, 0.35, 0.20, 0.38 ],
  [ 0.10, 0.34, 0.10, 0.44 ], [ 0.04, 0.33, 0.17, 0.46 ], [ 0.06, 0.38, 0.15, 0.41 ],
  [ 0.05, 0.29, 0.08, 0.58 ], [ 0.05, 0.38, 0.04, 0.53 ], [ 0.29, 0.18, 0.17, 0.36 ],
  [ 0.02, 0.71, 0.00, 0.27 ], [ 1.00, 0.00, 0.00, 0.00 ], [ 0.00, 0.00, 1.00, 0.00 ],
  [ 0.16, 0.23, 0.56, 0.05 ]
];

export const IntronLogo = props => (
    <DNALogo pwm={INTRON_PWM} startpos={-18} />
);
`;

export const LOWERCASE_CODESTRING_REACT = `
import { Logo } from 'logosj-react';
const LOWERCASE_PWM = [
  [0.09, 0.31, 0.08, 0.50], [0.18, 0.15, 0.45, 0.20], [0.30, 0.05, 0.49, 0.14],
  [0.06, 0.87, 0.02, 0.03], [0.00, 0.98, 0.00, 0.02], [0.81, 0.01, 0.07, 0.09], 
  [0.04, 0.57, 0.36, 0.01], [0.11, 0.47, 0.05, 0.35], [0.93, 0.01, 0.03, 0.01],
  [0.00, 0.00, 0.99, 0.01], [0.36, 0.00, 0.64, 0.00], [0.05, 0.01, 0.55, 0.37], 
  [0.03, 0.00, 0.97, 0.00], [0.06, 0.00, 0.85, 0.07], [0.11, 0.80, 0.00, 0.07],
  [0.40, 0.01, 0.55, 0.01], [0.09, 0.53, 0.33, 0.04], [0.12, 0.35, 0.08, 0.43], 
  [0.44, 0.19, 0.29, 0.06]
];
const LOWERCASE_GLYPHMAP = [
    { color: "#880000", component: CompleteGlyphmap[26].component, regex: "a" },
    { color: "#008800", component: CompleteGlyphmap[28].component, regex: "c" },
    { color: "#000088", component: CompleteGlyphmap[32].component, regex: "g" },
    { color: "#880088", component: CompleteGlyphmap[45].component, regex: "t" }
];

export const LowercaseLogo = props => (
    <Logo glyphmap={LOWERCASE_GLYPHMAP} pwm={LOWERCASE_PWM} />
);
`;

export const CAP_LONG_DESCRIPTION = `
This logo shows the consensus DNA binding motif for catabolite activating protein (CAP).
By default, a DNA logo scales its letters using information content, such that the most
important bases in the logo appear the most important.
`;

export const CTCF_LONG_DESCRIPTION = `
This logo shows the consensus DNA binding motif for CTCF. Here, the letter heights are
determined by the frequency of each nucleotide at each position rather than by information
content.
`;

export const INTRON_LONG_DESCRIPTION = `
This logo shows an intron-exon splice boundary. Base number 0 is the first base in the exon,
with bases in the preceding intron labeled -18 to -1.
`;

export const LOWERCASE_LONG_DESCRIPTION = `
This logo shows the consensus DNA binding motif for CTCF, but uses lower case letters and a
custom color scheme.
`;

export const INFORMATION_CONTENT_DEMO = {
    reactCodestring: CAP_CODESTRING_REACT,
    jsCodestring: "",
    logoProps: {
        pwm: CAP_PWM
    },
    description: "A DNA logo can use information content to scale its letters.",
    header: "Information Content",
    longDescription: CAP_LONG_DESCRIPTION
};

export const FREQUENCY_DEMO = {
    reactCodestring: CTCF_CODESTRING_REACT,
    jsCodestring: "",
    logoProps: {
        pwm: CTCF_PWM,
        mode: "FREQUENCY"
    },
    description: "A DNA logo can use frequency to scale its letters.",
    header: "Frequency",
    longDescription: CTCF_LONG_DESCRIPTION
};

export const STARTPOS_DEMO = {
    reactCodestring: INTRON_CODESTRING_REACT,
    jsCodestring: "",
    logoProps: {
        pwm: INTRON_PWM,
        startpos: -18
    },
    description: "A DNA logo can use a custom number for the first base.",
    header: "Custom starting base",
    longDescription: INTRON_LONG_DESCRIPTION
};

const NOAXIS_LONG_DESCRIPTION = `
This logo shows the consensus DNA binding motif for CTCF, rendered without an x-axis
or y-axis.
`;

export const NOAXIS_CODESTRING_REACT = `
import { RawLogo, DNAGlyphmap } from 'logosj-react';
const PWM = [
  [0.09, 0.31, 0.08, 0.50], [0.18, 0.15, 0.45, 0.20], [0.30, 0.05, 0.49, 0.14],
  [0.06, 0.87, 0.02, 0.03], [0.00, 0.98, 0.00, 0.02], [0.81, 0.01, 0.07, 0.09], 
  [0.04, 0.57, 0.36, 0.01], [0.11, 0.47, 0.05, 0.35], [0.93, 0.01, 0.03, 0.01],
  [0.00, 0.00, 0.99, 0.01], [0.36, 0.00, 0.64, 0.00], [0.05, 0.01, 0.55, 0.37], 
  [0.03, 0.00, 0.97, 0.00], [0.06, 0.00, 0.85, 0.07], [0.11, 0.80, 0.00, 0.07],
  [0.40, 0.01, 0.55, 0.01], [0.09, 0.53, 0.33, 0.04], [0.12, 0.35, 0.08, 0.43], 
  [0.44, 0.19, 0.29, 0.06]
];

export const NoAxisLogo = props => (
    <RawLogo glyphmap={DNAGlyphmap} pwm={PWM} glyphWidth={100} stackHeight={100} />
);
`;

export const NOAXIS_DEMO = {
    reactCodestring: NOAXIS_CODESTRING_REACT,
    jsCodestring: "",
    logoProps: {
        pwm: CTCF_PWM,
        glyphmap: DNAGlyphmap,
        raw: true,
        glyphWidth: 100,
        stackHeight: 100
    },
    description: "A DNA logo can be rendered without axes or labels.",
    header: "Without axes and labels",
    longDescription: NOAXIS_LONG_DESCRIPTION
};

const LOWERCASE_GLYPHMAP = [
    { color: "#880000", component: CompleteGlyphmap[26].component, regex: "a" },
    { color: "#008800", component: CompleteGlyphmap[28].component, regex: "c" },
    { color: "#000088", component: CompleteGlyphmap[32].component, regex: "g" },
    { color: "#880088", component: CompleteGlyphmap[45].component, regex: "t" }
];

export const LOWERCASE_DEMO = {
    reactCodestring: LOWERCASE_CODESTRING_REACT,
    jsCodestring: "",
    logoProps: {
        pwm: CTCF_PWM,
        glyphmap: LOWERCASE_GLYPHMAP,
        custom: true
    },
    description: "A DNA logo can use lowercase letters and custom colors.",
    header: "Custom letters and colors",
    longDescription: LOWERCASE_LONG_DESCRIPTION
};

export const CAPExample = props => (
    <SyntaxHighlighter language="jsx">
      {CAP_CODESTRING_REACT}
    </SyntaxHighlighter>
);