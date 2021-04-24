import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View, Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleSubmit() {
        if (isFilled)
            navigation.navigate('Confirmation');
        else
            alert('Por favor, preencha o seu nome!');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😄' : '😃'}
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                chamar você?
                            </Text>
                            </View>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }
                                ]}
                                placeholder='Digite um nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <View style={styles.footer}>
                                <Button
                                    title='Confirmar'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 34
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    },
    header: {
        alignItems: 'center'
    }
});