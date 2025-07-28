import React from 'react';
import Quotes from './Quotes';
import { useHistory } from "react-router-dom";
import {
  Title,
  Text,
  HomeContainer,
  FooterContainer,
  FooterLink,
  Row,
  Col,
  Container
} from './HomeStyles';

const Home: React.FC<{}> = () => {
   return (
      <>
      <HomeContainer>
          <Container>
            <Row className="align-items-center">
              <Col>
                <Row className="justify-content-center">
                  <Col xs={12}>
                      <Title>PokeApp</Title>
                  </Col>
                  <Col xs={12}>
                      <Text>{Quotes[0]}</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      </HomeContainer>
      <FooterContainer>
        <div className="full-height container-fluid">
          <Row className="align-items-center">
            <Col>
            </Col>
          </Row>
        </div>
      </FooterContainer>
    </>
    );
}

export default Home;