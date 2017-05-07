import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export default class extends Component {
    render() {
        const Column = styled(Col)`
            padding-left: 0;
            padding-right: 0;
        `;
        const Wrapper = styled.div`
            flex: 1;
            height: 0;
            padding-bottom: 100%;
            position: relative;
        `;
        const Box = styled.div`
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(${this.props.url});
            position: absolute;
            top: 8px;
            left: 8px;
            right: 8px;
            bottom: 8px;
        `;
        const {xs, sm, md, lg} = this.props;
        return (
            <Column xs={xs} sm={sm} md={md} lg={lg}>
                <Wrapper>
                    <Box />
                </Wrapper>
            </Column>
        );
    }
}
