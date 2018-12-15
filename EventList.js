import React from 'react';
import {FlatList, Text} from 'react-native';

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <FlatList
                data={[{name: 'a'}, {name: 'b'}]}
                keyExtractor={(item, index) => item.name}
                renderItem={
                    ({item}) => <Text>{item.name}</Text>
                }
            />
        );
    }
}

export default EventList;