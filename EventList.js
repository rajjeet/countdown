import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import EventCard from "./EventCard";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

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
                style={styles.list}
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