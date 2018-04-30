import React, {Component} from 'react';
import Ticket from './ticket.component';
import '../../styles/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {load_tickets} from "../../actions/tickets.action";
import {Row} from "react-materialize";

class Tickets extends Component {

    componentDidMount() {
        this.props.loadTickets();
    }

    render() {
        let tickets;
        if (this.props.tickets) {
            tickets = this.props.tickets.map((ticket, i) => {
                return (<Ticket key={i} ticket={ticket}/>)
            });
        }

        return (
            <div className="container">
                <Row>
                    {tickets}
                </Row>
            </div>
        );
    }
}


Tickets.propTypes = {
    tickets: PropTypes.array
};

let mapStateToProps = function (state) {
    return {
        tickets: state.tickets.tickets.tickets
    };
};

function mapDispatchToProps(dispatch) {
    return {
        loadTickets: bindActionCreators(load_tickets, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);