import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppInputField from '../components/AppInputField';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const SignInScreen = () => {
    const navigation = useNavigation();

    const goToSignUpScreen = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Login</Text>
            </View>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formContainer}>
                        <AppInputField
                            label='Email'
                            value={values.email}
                            placeholder='Insira o seu email'
                            onChangeText={handleChange('email')}
                            secure={false}
                        />
                        {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                        <AppInputField
                            label='Senha'
                            value={values.password}
                            placeholder='Insira sua senha'
                            onChangeText={handleChange('password')}
                            secure={true}
                        />
                        {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <Button onPress={handleSubmit} title="ENTRAR" />
                        <View style={styles.buttonSpacer} />
                        <Button title='Cadastre-se' onPress={goToSignUpScreen} />
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginTop: -10,
    },
    buttonSpacer: {
        marginVertical: 10,
    },
});

export default SignInScreen;