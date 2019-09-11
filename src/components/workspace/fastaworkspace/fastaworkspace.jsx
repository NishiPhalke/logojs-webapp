import React from 'react';
import os from 'os';
import { DNALogo, RNALogo, ProteinLogo, Logo, CompleteLogo,
	 DNAAlphabet, RNAAlphabet, ProteinAlphabet, CompleteAlphabet,
	 INFORMATION_CONTENT, xrange } from 'logosj-react';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';

import { MainMenu, mainMenuItems } from '../../homepage';
import { FastaEditor } from '../../editor/index';
import { apiUrls, TYPEID, glyphsymbols } from '../../../common/utils';
import { inferAlphabet } from '../../../utilities/inferalphabet';

import FastaLogoMenu from './menu';
import FastaSettingsPanel from './settings';

export const lookupmap = alphabet => {
    let ret = {};
    alphabet.map( (x, i) => ret[x.regex] = i );
    return {
	raw: alphabet,
	lookup: ret
    };
};

const logotype = alphabet => {
    if (alphabet === DNAAlphabet) return "DNA";
    if (alphabet === RNAAlphabet) return "RNA";
    if (alphabet === ProteinAlphabet) return "AA";
    return "custom";
};

const smap = (s, f) => (
    xrange(s.length).map( i => f(s.charAt(i), i) )
);

const DNADEFAULT = `
>sequence 1
GATTACA
>sequence 2
GATTACA
>sequence 3
GATTACA
`.substring(1);

const RNADEFAULT = `
>sequence 1
GAUUACA
>sequence 2
GAUUACA
>sequence 3
GAUUACA
`.substring(1);

const PROTEINDEFAULT = `
>sequence 1
AMINQACID
>sequence 2
AMINQACID
>sequence 3
AMINQACID
`.substring(1);

const CUSTOMDEFAULT = `
>sequence 1
CUSTOM
`.substring(1);

let GLYPHSYMBOLS = glyphsymbols();

export const LOGOCOMPONENTS = {
    DNA: { component: DNALogo, glyphs: DNAAlphabet, defaulttext: DNADEFAULT },
    RNA: { component: RNALogo, glyphs: RNAAlphabet, defaulttext: RNADEFAULT },
    AA: { component: ProteinLogo, glyphs: ProteinAlphabet, defaulttext: PROTEINDEFAULT },
    custom: { component: CompleteLogo, glyphs: CompleteAlphabet, defaulttext: CUSTOMDEFAULT }
};

const minMax2DArray = arr => {
    let max = Number.MIN_VALUE, min = Number.MAX_VALUE;
    arr.forEach(e => {
        if (max < e) max = e;
        if (min > e) min = e;
    });
    return { max, min };
};

export const fastaToPWM = (fasta, caseinsensitive) => {
    let sequences = [], cmatches = new Set();
    if (caseinsensitive) fasta = fasta.toUpperCase();
    fasta.split(os.EOL).filter(x => x[0] !== '#').map(
        x => x[0] !== '>' && x !== '' && sequences.push(x)
    );
    if (sequences.length === 0) { return [[0.0]]; }
    let minlength = minMax2DArray(sequences.map(x => x.length)).min;
    sequences.map( s => ( smap(s, (x, j) => (
        j < minlength && x.match(/^[a-z0-9]+$/i) && cmatches.add(x)
    ))));
    const alphabet = inferAlphabet(cmatches);
    const lookupmap_ = lookupmap(alphabet).lookup;
    let pwm = xrange(minlength).map(i => Object.keys(lookupmap_).map(x => 0));
    let increment = 1.0 / sequences.length;
    sequences.map( s => ( smap(s, (x, j) => {
        if (lookupmap_[x] !== undefined || x === 'n' || x === 'N')
	    j < minlength && lookupmap_[x] && (pwm[j][lookupmap_[x]] += increment);
        else
            throw new Error("unrecognized character '" + x + "'");
    })));
    return {
        pwm,
        alphabet
    };
};

class FastaWorkspace extends React.Component {

    constructor(props) {
	super(props);
	this.logoPostUrl = apiUrls(props.apiserver).logo("");
        let { pwm, alphabet } = fastaToPWM(DNADEFAULT, true);
	this.state = {
	    fasta: DNADEFAULT,
	    logocomponent: "DNA",
	    scale: 1.0,
	    startpos: 1,
	    mode: INFORMATION_CONTENT,
	    initialized: false,
	    alphabet,
            pwm,
            caseinsensitive: true
	};
    }

    componentDidMount() {
	// force re-render after SVG DOM node is created
	this.setState({
	    initialized: true
	});
    }

    _format_logoinfo(state, pwm) {
	return {
	    pwm,
	    typeid: TYPEID[state.logocomponent],
	    scale: state.scale,
	    isfreq: state.mode !== INFORMATION_CONTENT,
	    firstbase: state.startpos,
            alphabet: state.alphabet
	};
    }
    
    _fastaChange(fasta) {
        if (fasta.trim().length === 0) return;
        let { pwm, alphabet } = fastaToPWM(fasta, this.state.caseinsensitive);
	this.setState({
	    fasta,
            pwm,
            alphabet,
            logocomponent: logotype(alphabet)
	});
    }

    _onCaseChange() {
        let { pwm, alphabet } = fastaToPWM(this.state.fasta, !this.state.caseinsensitive);
        this.setState({
            pwm,
            alphabet,
            logocomponent: logotype(alphabet),
            caseinsensitive: !this.state.caseinsensitive
        });
    }

    _logoTypeChange(e, data) {
	this.setState({
	    logocomponent: data.value,
	    fasta: LOGOCOMPONENTS[data.value].defaulttext,
	    alphabet: lookupmap(LOGOCOMPONENTS[data.value].glyphs)
	});
    }

    _alphabetUpdate(alphabet) {
	let nalphabet = [];
	alphabet.map( v => {
	    let symbol = GLYPHSYMBOLS[v.regex] && GLYPHSYMBOLS[v.regex].component;
	    return symbol && nalphabet.push({ ...v, component: GLYPHSYMBOLS[v.regex].component });
	});
	this.setState({
	    alphabet: nalphabet
	});
    }

    _scaleChange(e, data) {
	this.setState({
	    scale: +data.value
	});
    }

    _startPosChange(e, data) {
	this.setState({
	    startpos: +data.value
	});
    }

    _modeChange(e, data) {
	this.setState({
	    mode: data.value
	});
    }
    
    render() {
	return (
            <React.Fragment>
              <Segment inverted fixed="top" attached="top">
                <Container>
                  <MainMenu items={mainMenuItems.items} active="Editors" fixed={true} />
                </Container>
                <Container style={{ textAlign: "center" }}>
                  <Header as="h1" inverted style={{ fontSize: "2.5em", marginTop: "0.15em" }}>FASTA Editor</Header>
                </Container>
              </Segment>
	      <Grid className="centered" style={{ height: "100%", width: "90%", marginLeft: "5%" }}>
                <Grid.Row />
		<Grid.Row style={{ height: "100%" }}>
		  <Grid.Column width={3}>
		    <FastaSettingsPanel onLogoTypeChange={this._logoTypeChange.bind(this)}
				        onScaleChange={this._scaleChange.bind(this)}
				        onStartPosChange={this._startPosChange.bind(this)}
				        onModeChange={this._modeChange.bind(this)}
				        logodefault={this.state.logocomponent}
				        scaledefault={this.state.scale}
                                        caseInsensitive={this.state.caseinsensitive}
				        startposdefault={this.state.startpos}
				        modedefault={this.state.mode}
				        alphabet={this.state.alphabet}
	                                onAlphabetUpdate={this._alphabetUpdate.bind(this)}
                                        onCaseChange={this._onCaseChange.bind(this)} />
            	  </Grid.Column>
	          <Grid.Column width={13} style={{ height: '100%' }}>
		    <Grid style={{ height: '100%' }}>
		      <Grid.Row style={{ height: '40%' }}>
			<Grid.Column width={16}>
		          <FastaEditor
		            height="100%" width="100%"
		            text={this.state.fasta}
	                    onChange={this._fastaChange.bind(this)}
	                    id="fastamain" alphabet={this.state.alphabet} />
            		</Grid.Column>
		      </Grid.Row>
	              <Grid.Row style={{ height: '60%' }}>
			<Grid.Column width={16} style={{ height: '100%' }}>
		          <FastaLogoMenu svgref={this.logo} logoinfo={this._format_logoinfo(this.state, this.state.pwm)}
				         apiurl={this.logoPostUrl} />
		          <div ref={ c => { this.logo = c; } }
                               style={{ height: '75%', textAlign: "center" }}>
                            <Logo pwm={this.state.pwm}
			          startpos={this.state.startpos}
			          mode={this.state.mode}
                                  width="90%" height="75%"
			          alphabet={this.state.alphabet} />
	                  </div>
            		</Grid.Column>
		      </Grid.Row>
		    </Grid>
		  </Grid.Column>
		</Grid.Row>
	      </Grid>
	    </React.Fragment>
	);
    }
    
};
export default FastaWorkspace;
