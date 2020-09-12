import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Button, Input, Block, Text } from '../components';
import { theme, mocks } from '../constants';

const { width, height } = Dimensions.get("window");


class Explore extends Component {
    state = {
        searchFocus: new Animated.Value(0.6),
        searchString: null
    };

    handleSearchFocus(status) {
        Animated.timing(this.state.searchFocus, {
            toValue: status ? 0.8 : 0.6, // status === true, increase flex size
            duration: 150 // ms
        }).start();
    };

    renderSearch() {
        const { searchString, searchFocus } = this.state;
        const isEditing = searchFocus && searchString;

        return (
            <Block animated middle flex={searchFocus} style={styles.search}>
                <Input
                    placeholder="Search"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.searchInput}
                    onFocus={() => this.handleSearchFocus(true)}
                    onBlur={() => this.handleSearchFocus(false)}
                    onChangeText={text => this.setState({ searchString: text })}
                    value={searchString}
                    onRightPress={() =>
                        isEditing ? this.setState({ searchString: null }) : null
                    }
                    rightStyle={styles.searchRight}
                    rightLabel={
                        <Icon.FontAwesome
                            name={isEditing ? "close" : "search"}
                            size={theme.sizes.base / 1.6}
                            color={theme.colors.gray2}
                            style={styles.searchIcon}
                        />
                    }
                />
            </Block>
        );
    }
    render() {

        return (
            <Block style={styles.container}>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Explore</Text>
                    {this.renderSearch()}
                </Block>
            </Block>
        )
    }
}

Explore.defaultProps = {
    images: mocks.explore
};
export default Explore;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    header: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base * 2
    },
    search: {
        height: theme.sizes.base * 2,
        width: width - theme.sizes.base * 2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2,
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: "transparent"
    },
    searchIcon: {
        position: "absolute",
        right: theme.sizes.base / 1.333,
        top: theme.sizes.base / 1.6
    },
    explore: {
        marginHorizontal: theme.sizes.padding * 1.25
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - theme.sizes.padding * 2.5,
        marginBottom: theme.sizes.base,
        borderRadius: 4
    },
    mainImage: {
        minWidth: width - theme.sizes.padding * 2.5,
        minHeight: width - theme.sizes.padding * 2.5
    },
    footer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        overflow: "visible",
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.1,
        width,
        paddingBottom: theme.sizes.base * 4
    }
});