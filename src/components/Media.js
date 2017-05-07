import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ImageBox from './ImageBox';

export default class extends Component {
    render() {
        const puppies = [
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170315_074622.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20170131_165348.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161206_163059.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161130_220314.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/20161005_145148.jpg',
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/tuscany-945506_1920.jpg'
        ];

        return (
            <div>
                <h2>Media</h2>
                <h3>Enjoy some pictures of puppies</h3>
                <Row>
                    { puppies.map( (url, i) => <ImageBox key={i} xs={12} sm={6} md={4} lg={3} url={url} /> )}
                </Row>
            </div>
        );
    }
}
