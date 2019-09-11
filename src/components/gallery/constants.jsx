import { CompleteAlphabet, DNAAlphabet, disymbolAlphabet } from "logos-to-go-react";

export const DNA_PROTEIN_PWM = [
    [ 0.2, 0, 0, 0.2 ],
    [ 0.2, 0, 0, 0.2 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0.1, 0, 1.5 ],
    [ 0, 0, 1.5, 0.1 ],
    [ 0, 0.1, 0, 1.5 ],
    [ 0, 0, 1.5, 0.1 ],
    [ 1.7, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0.5 ],
    [ 0, 1, 0, 0 ],
    [ 0.7, 0, 0.2, 0 ],
    [ 0.05, 0.6, 0, 0 ],
    [ 0.4, 0, 0.1, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0.3, 0, 0, 0.6 ],
    [ 0, 0, 0, 0.2 ]
];

export const PROTEIN_DNA_PWM = [
    [0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0],
    [0,0,0,1.1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,2.5,0,0.5,0,0,0,0,0,0,0,0,0,0,0],
    [2.5,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0.5,0,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.5,0,0,0.5,0],
    [0,0,0,0,0,0,0,0,0.5,0,1,0,0,0,0,0,0,0,0.5,0,0,0],
    [0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0.3,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.7,3,0,0,0,0],
    [0,0,0,0,0,0,0,0,0.3,0,0,0,0,0,0,1,0,0,0.6,0,0,0],
    [0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.7,0,0,0,0],
    [0,0,0,0,0,0,0,0,0.7,0,0,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0.5,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0.5,0,0.5,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0.5,0,2.5,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0.5,0,0,0.6,0,0,0,0,0,0,0,0.5,0,0,0,0],
    [0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0.5,0.5,0,0,0,0,0,0]
];

export const CTCF_PWM = [
  [0.09, 0.31, 0.08, 0.50], [0.18, 0.15, 0.45, 0.20],
  [0.30, 0.05, 0.49, 0.14], [0.06, 0.87, 0.02, 0.03], 
  [0.00, 0.98, 0.00, 0.02], [0.81, 0.01, 0.07, 0.09], 
  [0.04, 0.57, 0.36, 0.01], [0.11, 0.47, 0.05, 0.35], 
  [0.93, 0.01, 0.03, 0.01], [0.00, 0.00, 0.99, 0.01], 
  [0.36, 0.00, 0.64, 0.00], [0.05, 0.01, 0.55, 0.37], 
  [0.03, 0.00, 0.97, 0.00], [0.06, 0.00, 0.85, 0.07], 
  [0.11, 0.80, 0.00, 0.07], [0.40, 0.01, 0.55, 0.01], 
  [0.09, 0.53, 0.33, 0.04], [0.12, 0.35, 0.08, 0.43], 
  [0.44, 0.19, 0.29, 0.06]
];

export const CAP_PWM = [
    [0.3673469387755103, 0.08163265306122448, 0.18367346938775508, 0.3673469387755103],
    [0, 0.16326530612244897, 0.04081632653061224, 0.7959183673469393],
    [0.04081632653061224, 0.02040816326530612, 0.8163265306122455, 0.12244897959183672],
    [0.02040816326530612, 0.16326530612244897, 0, 0.8163265306122455],
    [0.08163265306122448, 0, 0.8367346938775516, 0.08163265306122448],
    [0.8775510204081639, 0.061224489795918366, 0.061224489795918366, 0],
    [0.12244897959183672, 0.2040816326530612, 0.18367346938775508, 0.48979591836734715],
    [0.18367346938775508, 0.34693877551020413, 0.2040816326530612, 0.26530612244897955],
    [0.18367346938775508, 0.30612244897959184, 0.1020408163265306, 0.40816326530612257],
    [0.30612244897959184, 0.14285714285714285, 0.34693877551020413, 0.2040816326530612],
    [0.2040816326530612, 0.16326530612244897, 0.4285714285714287, 0.2040816326530612],
    [0.326530612244898, 0.22448979591836732, 0.14285714285714285, 0.30612244897959184],
    [0.12244897959183672, 0.061224489795918366, 0.14285714285714285, 0.6734693877551025],
    [0.14285714285714285, 0.7959183673469393, 0, 0.061224489795918366],
    [0.7142857142857147, 0.02040816326530612, 0.2040816326530612, 0.061224489795918366],
    [0.2040816326530612, 0.6530612244897963, 0, 0.14285714285714285],
    [0.6734693877551025, 0.08163265306122448, 0.12244897959183672, 0.12244897959183672],
    [0.24489795918367344, 0.18367346938775508, 0.14285714285714285, 0.4285714285714287],
    [0.3673469387755103, 0.02040816326530612, 0, 0.612244897959184]
];

export const INTRON_PWM = [
    [0.060000000000000005,0.46000000000000024,0.10999999999999999,0.37000000000000016],
    [0.16,0.22000000000000006,0.22000000000000006,0.4000000000000002],
    [0.09999999999999999,0.26000000000000006,0.16,0.48000000000000026],
    [0.08,0.3100000000000001,0.20000000000000004,0.4100000000000002],
    [0.16,0.20000000000000004,0.10999999999999999,0.5300000000000002],
    [0.03,0.24000000000000007,0.10999999999999999,0.6200000000000003],
    [0.07,0.24000000000000007,0.13999999999999999,0.5500000000000003],
    [0.02,0.4300000000000002,0.09,0.46000000000000024],
    [0.07,0.35000000000000014,0.20000000000000004,0.38000000000000017],
    [0.10999999999999999,0.34000000000000014,0.10999999999999999,0.4400000000000002],
    [0.04,0.3300000000000001,0.17,0.46000000000000024],
    [0.060000000000000005,0.38000000000000017,0.15,0.4100000000000002],
    [0.05,0.2900000000000001,0.08,0.5800000000000003],
    [0.05,0.38000000000000017,0.04,0.5300000000000002],
    [0.2900000000000001,0.18000000000000002,0.17,0.36000000000000015],
    [0.02,0.7100000000000004,0,0.2700000000000001],
    [1.0000000000000007,0,0,0],
    [0,0,1.0000000000000007,0],
    [0.16,0.23000000000000007,0.5600000000000003,0.05],
];

export const RNA_PWM = [
    [0.7, 0.1, 0.1, 0.1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0.3, 0.2, 0.3, 0.2]
];

export const METHYL_PWM = [
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0.3, 0, 0.3, 0.4, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0.6, 0, 0.4, 0, 0],
    [1, 0, 0, 0, 0, 0]
];

export const METHYL_ALPHABET = [
    { color: "#880088", component: CompleteAlphabet[0].component, regex: "A" },
    { color: "#880000", component: CompleteAlphabet[2].component, regex: "C" },
    { color: "#000088", component: CompleteAlphabet[6].component, regex: "G" },
    { color: "#888800", component: CompleteAlphabet[19].component, regex: "T" },
    { color: "#ff0000", component: CompleteAlphabet[12].component, regex: "M" },
    { color: "#008888", component: CompleteAlphabet[22].component, regex: "W" }
];

export const HEX_ALPHABET = [
    { color: "#880000", component: CompleteAlphabet[26].component, regex: "a" },
    { color: "#880000", component: CompleteAlphabet[27].component, regex: "b" },
    { color: "#880000", component: CompleteAlphabet[28].component, regex: "c" },
    { color: "#880000", component: CompleteAlphabet[29].component, regex: "d" },
    { color: "#880000", component: CompleteAlphabet[30].component, regex: "e" },
    { color: "#880000", component: CompleteAlphabet[31].component, regex: "f" },
    { color: "#000088", component: CompleteAlphabet[53].component, regex: "1" },
    { color: "#000088", component: CompleteAlphabet[54].component, regex: "2" },
    { color: "#000088", component: CompleteAlphabet[55].component, regex: "3" },
    { color: "#000088", component: CompleteAlphabet[56].component, regex: "4" },
    { color: "#000088", component: CompleteAlphabet[57].component, regex: "5" },
    { color: "#000088", component: CompleteAlphabet[58].component, regex: "6" },
    { color: "#000088", component: CompleteAlphabet[59].component, regex: "7" },
    { color: "#000088", component: CompleteAlphabet[60].component, regex: "8" },
    { color: "#000088", component: CompleteAlphabet[61].component, regex: "9" },
    { color: "#000088", component: CompleteAlphabet[14].component, regex: "0" }
];

export const HEX_PWM = () => {
    let r = [];
    for (let i = 0; i < 8; ++i) {
        let rr = [];
        for (let j = 0; j < 16; ++j) {
            rr.push(j % 8 === i ? 0.5 : 0);
        }
        r.push(rr);
    }
    return r;
};

export const PROTEIN_PWM = [
    [0.009900990099009901,0,0.019801980198019802,0,0,0.039603960396039604,0,0,0.20792079207920797,0,0.5544554455445547,0,0,0,0,0,0,0,0.06930693069306931,0,0,0],
    [0.0297029702970297,0,0,0.0297029702970297,0,0,0,0,0,0.18811881188118815,0,0,0.04950495049504951,0.3465346534653467,0.009900990099009901,0.1089108910891089,0.019801980198019802,0.15841584158415842,0.0297029702970297,0,0.009900990099009901,0],
    [0.009900990099009901,0,0.009900990099009901,0,0,0,0,0,0.19801980198019806,0,0.3465346534653467,0.3861386138613863,0,0,0,0,0,0,0.04950495049504951,0,0,0],
    [0.019801980198019802,0,0.009900990099009901,0,0.009900990099009901,0,0.009900990099009901,0,0,0.039603960396039604,0,0,0.009900990099009901,0.019801980198019802,0,0,0.3663366336633665,0.5148514851485151,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0.019801980198019802,0.009900990099009901,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0.019801980198019802,0,0,0,0.009900990099009901,0,0,0,0,0],
    [0.009900990099009901,0,0,0,0,0,0,0.15841584158415842,0.009900990099009901,0.019801980198019802,0.019801980198019802,0.009900990099009901,0.0297029702970297,0,0.07920792079207921,0.633663366336634,0.009900990099009901,0.009900990099009901,0,0.009900990099009901,0,0],
    [0.1287128712871287,0,0,0.009900990099009901,0.1089108910891089,0,0.17821782178217824,0.009900990099009901,0,0.039603960396039604,0.009900990099009901,0.009900990099009901,0.039603960396039604,0,0.3960396039603962,0.039603960396039604,0,0.0297029702970297,0,0,0,0],
    [0.0891089108910891,0,0,0.43564356435643586,0.3960396039603962,0,0,0,0,0,0,0.019801980198019802,0.009900990099009901,0,0.0297029702970297,0,0,0,0.009900990099009901,0,0.009900990099009901,0],
    [0,0,0,0,0,0,0,0,0.742574257425743,0,0.17821782178217824,0.05940594059405941,0,0,0,0,0,0.009900990099009901,0.009900990099009901,0,0,0],
    [0.5841584158415845,0,0,0,0,0,0.3762376237623764,0,0,0,0,0,0,0,0,0,0.039603960396039604,0,0,0,0,0],
    [0.0297029702970297,0,0,0.2673267326732674,0.1386138613861386,0,0,0.009900990099009901,0,0.039603960396039604,0,0.009900990099009901,0.2376237623762377,0,0.1485148514851485,0.039603960396039604,0.06930693069306931,0.009900990099009901,0,0,0,0],
    [0.11881188118811879,0,0,0,0,0.1485148514851485,0,0.039603960396039604,0.1089108910891089,0,0.07920792079207921,0.1089108910891089,0,0,0,0.0297029702970297,0.009900990099009901,0,0.009900990099009901,0,0.3465346534653467,0],
    [0,0,0.0297029702970297,0,0,0,0,0,0.1287128712871287,0,0.524752475247525,0,0,0,0,0,0.04950495049504951,0.039603960396039604,0.2277227722772278,0,0,0],
    [0.0297029702970297,0,0,0,0,0,0.9504950495049511,0,0,0,0,0,0,0,0,0,0.019801980198019802,0,0,0,0,0],
    [0.06930693069306931,0,0.1386138613861386,0,0,0,0,0,0,0,0.4950495049504953,0.019801980198019802,0,0,0.009900990099009901,0,0.11881188118811879,0.1287128712871287,0.019801980198019802,0,0,0],
    [0.0891089108910891,0,0.009900990099009901,0,0,0,0,0,0,0.019801980198019802,0,0,0,0,0,0.009900990099009901,0.20792079207920797,0.6633663366336637,0,0,0,0],
    [0.009900990099009901,0,0,0,0,0,0,0,0.18811881188118815,0,0.1089108910891089,0,0.009900990099009901,0.05940594059405941,0,0.40594059405940613,0,0.009900990099009901,0.20792079207920797,0,0,0],
    [0,0,0,0,0.7722772277227727,0,0,0.0297029702970297,0.009900990099009901,0,0,0,0,0,0.039603960396039604,0,0.019801980198019802,0,0.1287128712871287,0,0,0],
    [0,0,0,0,0,0,0,0.019801980198019802,0,0,0,0.0297029702970297,0,0,0,0,0.0297029702970297,0.9108910891089115,0,0.009900990099009901,0,0],
    [0.039603960396039604,0,0,0,0,0.009900990099009901,0,0,0.2376237623762377,0,0.009900990099009901,0.009900990099009901,0,0,0,0,0,0.019801980198019802,0.6732673267326736,0,0,0],
    [0.019801980198019802,0,0.009900990099009901,0,0,0,0.1386138613861386,0,0.009900990099009901,0,0,0,0.07920792079207921,0,0,0,0.5841584158415845,0.15841584158415842,0,0,0,0],
    [0.009900990099009901,0,0,0,0,0,0,0.039603960396039604,0,0.039603960396039604,0,0.009900990099009901,0,0,0,0.8910891089108917,0,0.009900990099009901,0,0,0,0],
    [0.04950495049504951,0,0.009900990099009901,0,0,0,0,0,0.1485148514851485,0.04950495049504951,0.2673267326732674,0.04950495049504951,0,0,0.099009900990099,0,0.019801980198019802,0.11881188118811879,0.1485148514851485,0,0,0],
    [0,0,0,0,0,0.0891089108910891,0,0,0.07920792079207921,0,0.6534653465346538,0.07920792079207921,0,0,0,0,0,0,0.05940594059405941,0,0,0],
    [0.039603960396039604,0,0,0,0,0,0.2772277227722773,0,0,0.21782178217821788,0,0,0.0297029702970297,0,0,0.039603960396039604,0.1386138613861386,0.21782178217821788,0,0,0,0],
    [0.07920792079207921,0,0,0.1386138613861386,0.05940594059405941,0,0.009900990099009901,0,0.009900990099009901,0.17821782178217824,0.0297029702970297,0.1089108910891089,0,0,0.0297029702970297,0.2871287128712872,0.009900990099009901,0,0.009900990099009901,0,0.009900990099009901,0],
    [0,0,0,0,0,0.2673267326732674,0,0,0,0,0.6534653465346538,0,0,0,0,0,0,0,0,0.039603960396039604,0,0],
    [0.07920792079207921,0,0,0,0.2475247524752476,0,0.009900990099009901,0.039603960396039604,0,0.07920792079207921,0,0,0,0,0.21782178217821788,0.2673267326732674,0.009900990099009901,0.009900990099009901,0,0,0,0],
    [0.06930693069306931,0,0.009900990099009901,0.1287128712871287,0.15841584158415842,0,0.009900990099009901,0.019801980198019802,0,0.2772277227722773,0,0,0.009900990099009901,0,0.1287128712871287,0.07920792079207921,0.019801980198019802,0.04950495049504951,0,0,0,0],
    [0.009900990099009901,0,0,0.11881188118811879,0.16831683168316833,0,0.019801980198019802,0.009900990099009901,0.009900990099009901,0.06930693069306931,0.039603960396039604,0.009900990099009901,0.05940594059405941,0,0.17821782178217824,0.099009900990099,0.1386138613861386,0,0.009900990099009901,0.009900990099009901,0.009900990099009901,0],
    [0,0,0,0.009900990099009901,0.05940594059405941,0,0.6237623762376241,0.0297029702970297,0,0.05940594059405941,0,0,0.1485148514851485,0,0.019801980198019802,0,0.009900990099009901,0,0,0,0,0],
    [0.019801980198019802,0,0,0,0,0.0297029702970297,0,0,0.0891089108910891,0.009900990099009901,0.40594059405940613,0.11881188118811879,0,0,0,0.009900990099009901,0,0.009900990099009901,0.20792079207920797,0.04950495049504951,0.009900990099009901,0],
    [0,0,0,0,0,0,0,0,0.6534653465346538,0,0.16831683168316833,0,0,0,0,0,0,0,0.1386138613861386,0,0,0]
];

export const ALT_PROTEIN_PWM = () => {
    let result = [];
    for (let i = 0; i < PROTEIN_PWM.length; ++i) {
        let nresult = [ ...PROTEIN_PWM[i] ];
        nresult[1] = nresult[3] + nresult[12]; nresult[3] = 0; nresult[12] = 0;
        nresult[21] = nresult[4] + nresult[14]; nresult[4] = 0; nresult[14] = 0;
        result.push(nresult);
    }
    return result;
};

export const DINUCLEOTIDE_ALPHABET = () => disymbolAlphabet(DNAAlphabet);

export const DINUCLEOTIDE_PWM = [
    [ 0, 0, 0.25, 0, 0, 0, 0, 0.25, 0.25, 0, 0, 0, 0, 0, 0.25, 0 ],
    [ 0, 0, 0, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0 ],
    [ 0, 0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0.5, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0 ],
    [ 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0.25, 0, 0.25, 0, 0.2, 0, 0, 0.1, 0, 0, 0.1, 0.1, 0, 0 ]
];

const A = CompleteAlphabet[0].component;
const C = CompleteAlphabet[2].component;
const G = CompleteAlphabet[6].component;
const T = CompleteAlphabet[19].component;

export const ANNOTATED_ALPHABET = [
    ...DNAAlphabet,
    { color: "#aaaaaa", component: A, regex: "A" },
    { color: "#aaaaaa", component: C, regex: "C" },
    { color: "#aaaaaa", component: G, regex: "G" },
    { color: "#aaaaaa", component: T, regex: "T" }
];

export const ANNOTATED_PWM = [
    [ 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 2, 0, 0, 0, 0, 0 ],
    [ 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 2, 0, 0, 0, 0, 0, 0 ],
    [ 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0.25, 0.25, 0.25, 0.25 ],
    [ 0, 0, 0, 0, 0.25, 0.25, 0.25, 0.25 ],
    [ 0, 0, 0, 0, 0.25, 0.25, 0.25, 0.25 ],
    [ 0, 0, 0, 2, 0, 0, 0, 0 ],
    [ 0, 0, 2, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 2, 0, 0, 0, 0 ],
    [ 0, 0, 0, 2, 0, 0, 0, 0 ],
    [ 0, 2, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 2, 0, 0, 0, 0 ]
];

export const SNP_PWM = [
    [ 0.05, 0.05, 0, 0 ],
    [ 0, 0, 0.3, 0.7 ],
    [ 0, 0, 0.05, 0.05 ],
    [ 0, 0, 0, 2 ],
    [ 0.6, 0, 0, 0.8 ],
    [ 0, 2, 0, 0 ],
    [ 0.8, 0.8, 0, 0 ],
    [ 0, 0, 0.1, 0 ]
];

export const SNP_REF_PWM = [
    [ 2, 0, 0, 0 ],
    [ 0, 0, 0, 2 ],
    [ 2, 0, 0, 0 ],
    [ 0, 2, 0, 0 ],
    [ 0, 0, 0, 2 ],
    [ 0, 2, 0, 0 ],
    [ 0, 2, 0, 0 ],
    [ 0, 0, 0, 2 ]
];

const N1 = CompleteAlphabet[53].component;
const N2 = CompleteAlphabet[54].component;
const N3 = CompleteAlphabet[55].component;

export const TRINUCLEOTIDE_ALPHABET = [
    { color: "#880000", component: [ A, A, A ], regex: "AAA" },
    { color: "#008800", component: [ C, A, T ], regex: "CAT" },
    { color: "#000088", component: [ T, A, G ], regex: "TAG" }
];

export const TRINUCLEOTIDE_PWM = [
    [ 0.8, 0.2, 0 ],
    [ 0, 0.8, 0.2 ],
    [ 0.2, 0, 0.8 ]
];

export const MULTINUMBER_ALPHABET = [
    { color: "#ff0000", component: [ N1, N1, N1 ], regex: "111" },
    { color: "#888800", component: [ N2, N2 ], regex: "22" },
    { color: "#0000ff", component: [ N1, N2, N3 ], regex: "123" }
];

export const AA_PWM = [
    [ 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, -4.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, -2.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3.8, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 3.8, 0, 0, 0, 0, -3.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, -1.8, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, -3.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, -5, 0, 2, 0.5, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0 ],
    [ -3.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.2, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, -1.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -2.3, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];

export const DNA_NEGATIVE_PWM = [
    [ 0, 0, 0, 0 ],
    [ -0.5, 0.5, -0.5, 0.5 ],
    [ 0.5, -2, -2, 3 ],
    [ 2.5, -2, 0.5, -0.5 ],
    [ 4.5, -1, -2, -2.5 ],
    [ -1, -1, 0, 2 ],
    [ -1.5, -0.5, 0.5, 1.5 ],
    [ 1.5, -1.5, 1, -0.5 ],
    [ -1, 1, 0, 0 ],
    [ 0, 0, 0, 0 ]
];

export const DNA_NEGATIVE_PWM2 = [
    [ 1, 0, 0, -1 ],
    [ -2, -0.7, -1, 4.1 ],
    [ -2, -0.5, -1.5, 5 ],
    [ 1, -2.5, 2, 0.5 ],
    [ -0.5, 1, -0.5, 0 ],
    [ 0, -1, 1.5, -1 ],
    [ 0.3, 1.5, -3, 1.5 ],
    [ 5, -1, -2, -1.5 ],
    [ 4.5, -2, -1, -2.5 ],
    [ -1, 0, 0, 1 ]
];
