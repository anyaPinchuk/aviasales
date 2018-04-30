import React, {Component} from 'react';
import '../../styles/App.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button, Col, Card, Row} from "react-materialize";

class Ticket extends Component {

    componentDidMount() {
    }

    render() {
        let ticket = this.props.ticket;
        return (
            <Col s={12} m={12} l={12}>
                <Card className='white' textClassName='black-text'>
                    <Row className="center">
                        <Col s={3}>
                            <h4>Turkish airline</h4>
                            <Button waves='light'>Buy for {ticket.price}</Button>
                        </Col>
                        <Col s={3}>
                            {ticket.departure_time}<br/>
                            {ticket.origin}, {ticket.origin_name} <br/>
                            {ticket.departure_date}
                        </Col>
                        <Col s={3}>
                            {ticket.stops} {ticket.stops === 1 ? "stop" : "stops"}
                        </Col>
                        <Col s={3}>
                            {ticket.arrival_time}<br/>
                            {ticket.destination}, {ticket.destination_name} <br/>
                            {ticket.arrival_date}
                        </Col>
                    </Row>
                </Card>
            </Col>
        );
    }
}


Ticket.propTypes = {
    ticket: PropTypes.object.isRequired
};

let mapStateToProps = function (state) {
    return {};
};

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);