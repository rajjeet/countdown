import React from 'react';
import {FlatList, Text} from 'react-native';

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        const events = require('./db.json').events;
        this.setState({events});

    }

    render() {
        console.log(this.state.events);
        const {events} = this.state;
        return (
            <FlatList
                data={events}
                keyExtractor={item => item.id}
                renderItem={
                    ({item}) => <Text>{item.title}</Text>
                }
            />
        );
    }
}

export default EventList;