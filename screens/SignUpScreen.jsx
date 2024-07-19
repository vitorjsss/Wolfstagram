import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppInputField from '../components/AppInputField';
import DatePickerField from '../components/DatePickerField';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
        .required('O preenchimento deste campo é obrigatório')
        .label("Confirm Password"),
    name: Yup.string().required().label("Name"),
    birthday: Yup.string().required().label("Birthday"),
    breed: Yup.string().required().label("Breed"),
    favoriteToy: Yup.string().required().label("Favorite Toy")
});

const SignUpScreen = () => {
    const navigation = useNavigation();

    const goToSignInScreen = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cadastro</Text>
            </View>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                    birthday: '',
                    breed: '',
                    favoriteToy: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm();
                }}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
                    <View>
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

                        <AppInputField
                            label='Confirmar Senha'
                            placeholder='Insira sua senha novamente'
                            onChangeText={handleChange('confirmPassword')}
                            secure={true}
                        />
                        {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

                        <AppInputField
                            label='Nome'
                            value={values.name}
                            placeholder='Insira o nome do seu cachorro'
                            onChangeText={handleChange('name')}
                            secure={false}
                        />

                        <DatePickerField
                            label='Aniversário do seu pet'
                            value={values.birthday}
                            onChangeText={date => setFieldValue('birthday', date)}
                        />

                        <AppInputField
                            label='Raça'
                            value={values.breed}
                            placeholder='Insira a raça do seu cachorro'
                            onChangeText={handleChange('breed')}
                            secure={false}
                        />

                        <AppInputField
                            label='Brinquedo Favorito'
                            value={values.favoriteToy}
                            placeholder='Insira o brinquedo favorito do seu cachorro'
                            onChangeText={handleChange('favoriteToy')}
                            secure={false}
                        />

                        <Button onPress={handleSubmit} title="ENVIAR" />
                    </View>
                )}
            </Formik>
            <View style={styles.buttonContainer}>
                <Button title='Login' onPress={goToSignInScreen} />
            </View>
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
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginTop: -10,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default SignUpScreen;
