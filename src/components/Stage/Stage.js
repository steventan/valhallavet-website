import React, { Component } from 'react';
import styled from 'styled-components';
import Parallax from 'parallax-js';

import city from './stage.png';

import { 
  Clouds, 
  Stars, 
  Moon, 
  Sun, 
  Space,
  Lightning,
} from '../Scenes';

const Wrapper = styled.div`
  position: relative;
  display: block;
  height: auto;
  margin-top: -50px;
  width: 60vw;
`;

class Stage extends Component {
  constructor() {
    super();

    this.state = {
      parentRef: undefined,
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.parallax = new Parallax(this.ref.current, {
      relativeInput: true
    });
  }

  componentWillUnmount() {
    this.parallax.disable()
  }
  render() {
    return (
      <Wrapper innerRef={this.ref}>
        <img src={city} data-depth="0" alt="Stage" />
        <Space depth="-0.01" />
        <Moon depth="-0.03" />
        <Clouds depth="0.08" />
        <Sun depth="-0.03" />
        <Lightning depth="0.02" />
        <Stars depth="-0.01" />
      </Wrapper>
    )
  }
}

export default Stage;
