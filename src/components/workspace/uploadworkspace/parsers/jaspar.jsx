import { DNAAlphabet } from 'logojs-react';
import { glyphsymbols } from '../../../../common/utils';

let GLYPHSYMBOLS = glyphsymbols();

export const parseJaspar = text => {
    try {
        return parseJasparUnsafe(text);
    } catch (e) {
        return { logos: [] };
    }
};

export const parseJasparUnsafe = text => {
    let results = [], cppm = [], cmotifname = null;
    let motifnames = [];
    let lines = text.split('\n');
    let alphabets = [], alphabet = [];
    lines.forEach( (line, i) => {
        if (line.startsWith('>')) {
            if (cppm.length > 0) {
                results.push(cppm);
                motifnames.push(cmotifname);
                alphabets.push(alphabet);
                alphabet = [];
            };
            cppm = [];
            cmotifname = line.replace(/>/, "").replace(/\s+/g, "_");
        } else if (line.includes('[') && line.split('[')[1].includes(']')) {
            alphabet.push(line.trim().split(/\s+/g)[0]);
            cppm.push(line.split('[')[1].split(']')[0].trim().split(/\s+/g));
        }
        if (i === lines.length - 1) {
            results.push(cppm);
            motifnames.push(cmotifname);
            alphabets.push(alphabet);
        }
    });
    let sum = x => {
        let v = 0.0;
        x.forEach( xx => v += xx );
        return v;
    };
    results = results.map(ppm => {
        if (ppm.length === 0) { return []; }
        let totals = ppm[0].map( (_, i) => sum(ppm.map(x => +x[i])) );
        let toutput = [];
        ppm[0].forEach( (_, j) => {
            toutput.push([]);
            ppm.forEach( () => {
                toutput[j].push(0.0);
            });
        });
        ppm.forEach( (_, i) => {
            ppm[i].forEach( (_, j) => {
                toutput[j][i] = +ppm[i][j] / totals[j];
            });
        });
        return toutput;
    });
    return {
        logos: results.filter(x => x.length > 0).map( (ppm, i) => ({
            ppm,
            name: motifnames[i],
            alphabet: alphabets[i].length === 4 && alphabets[i][0] === 'A' && alphabets[i][1] === 'C' && alphabets[i][2] === 'G' && alphabets[i][3] === 'T' ? DNAAlphabet : alphabets[i].map( x => GLYPHSYMBOLS[x] || { regex: x, color: "#000000" } )
        }) ),
        name: null
    };
};
