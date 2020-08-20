import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import * as Styled from './styles';

import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Forwardslash Development" />
      <Hero />
      <CardGroup className="m-8">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Title>About</Card.Title>
              <Card.Text>
                Ladder up / ladder back to the strategy. Pre launch proceduralize, and pulling teeth. Turd polishing
                build on a culture of contribution and inclusion. This is meaningless back of the net prethink, yet
                baseline the procedure and samepage your department can you send me an invite?. Wiggle room you gotta
                smoke test your hypothesis or drill down game-plan, but move the needle, yet those options are already
                baked in with this model, or future-proof. Globalize cross functional teams enable out of the box
                brainstorming so this is meaningless Bob called an all-hands this afternoon productize pig in a python.
                Old boys club cloud strategy for show pony customer centric globalize, nor pixel pushing make it a
                priority. Peel the onion knowledge process outsourcing due diligence, yet rehydrate the team wiggle
                room. Draft policy ppml proposal groom the backlog can you send me an invite?.
              </Card.Text>
              <Link to="/about">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Forwardslash Development provides progressive web application and API development services.
              </Card.Text>
              <Link to="/services">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Apollonius of Perga dispassionate extraterrestrial observer cosmic ocean a very small stage in a vast
                cosmic arena encyclopaedia galactica dream of the mind's eye? Concept of the number one emerged into
                consciousness hearts of the stars network of wormholes finite but unbounded quasar? Are creatures of the
                cosmos great turbulent clouds kindling the energy hidden in matter extraplanetary stirred by starlight
                the only home we've ever known. The only home we've ever known invent the universe vastness is bearable
                only through love citizens of distant epochs are creatures of the cosmos with pretty stories for which
                there's little good evidence and billions upon billions upon billions upon billions upon billions upon
                billions upon billions.
              </Card.Text>
              <Link to="/Blog">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src="https://picsum.photos/100/100" />
              <Card.Title>Connect</Card.Title>
              <Card.Text>
                Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme
                executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.{' '}
              </Card.Text>
              <Link to="/connect">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </CardGroup>
    </Layout>
  );
};

export default IndexPage;
