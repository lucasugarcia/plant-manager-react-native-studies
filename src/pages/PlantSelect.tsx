import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <Text>Selecione sua planta</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});