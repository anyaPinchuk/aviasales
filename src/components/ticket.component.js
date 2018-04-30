import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Button, Icon, Card} from "react-materialize";

class Ticket extends Component {

    componentDidMount(){
    }

    render() {
        let ticket = this.props.ticket;
        return (
            <Card className='blue-grey darken-1' textClassName='white-text' title='Turkish airline' actions={[<h1>click</h1>]}>
                {ticket.origin}
                <Button waves='light'>
                    <Icon>thumb_up</Icon>
                </Button>
            </Card>
        );
    }
}


Ticket.propTypes = {
    ticket: PropTypes.object.isRequired
};

let mapStateToProps = function (state) {
    return {

    };
};

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);