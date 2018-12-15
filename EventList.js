import React from 'react';
import {FlatList, Text} from 'react-native';
import EventCard from "./EventCard";

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({events});

    }

    render() {
        const {events} = this.state;
        return (
            <FlatList
                data={events}
                keyExtractor={item => item.id}
                renderItem={
                    ({item}) => <EventCard event={item} />
                }
            />
        );
    }
}

export default EventList;