import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import { RNALogo, Logo } from 'logojs-react';

import { RNA_PPM, METHYL_PPM, METHYL_ALPHABET, HEX_ALPHABET, HEX_PPM } from './constants';

const ExtendedAlphabetPreview = () => (
    <Segment.Group>
      <Segment style={{ backgroundColor: "#f8f8f8" }}>
        <Header as="h2" style={{ marginBottom: "0em" }}>Extended Alphabets</Header>
      </Segment>
      <Segment>
        <Grid style={{ textAlign: "center" }}>
          <Grid.Row>
            <Grid.Column width={16}>
              Logos using custom extended alphabets.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={3} style={{ textAlign: "center" }}>
              <div style={{ fontStyle: "italic", marginBottom: "0.7em" }}>
                RNA logo
              </div>
              <RNALogo ppm={RNA_PPM} startpos={1} />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={3} style={{ textAlign: "center" }}>
              <div style={{ fontStyle: "italic", marginBottom: "0.7em" }}>
                CpG methylation
              </div>
              <Logo alphabet={METHYL_ALPHABET} ppm={METHYL_PPM} startpos={1} />
            </Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={3} style={{ textAlign: "center" }}>
              <div style={{ fontStyle: "italic", marginBottom: "0.7em" }}>
                digits and lower case
              </div>
              <Logo alphabet={HEX_ALPHABET} ppm={HEX_PPM()} startpos={1} mode="FREQUENCY" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ textAlign: "center" }}>
            <Grid.Column width={16}>
              <Button as={Link} to="/gallery/extended">See More</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Segment.Group>
);
export default ExtendedAlphabetPreview;
