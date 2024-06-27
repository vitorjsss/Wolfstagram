import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppInputField from './AppInputField';
import DatePickerField from './DatePickerField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export const AppForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [breed, setBreed] = useState('');
    const [favoriteToy, setFavoriteToy] = useState('');

    return (
        <Formik
            initialValues={{ email: '', password: '', confirmPassword: '', name: '', birthday: '', breed: '', favoriteToy: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
                <View>
                    <AppInputField
                        label='Email: '
                        value={email}
                        placeholder='Insira o seu email'
                        onChangeText={text => {
                            setEmail(text);
                            handleChange('email')(text);
                        }}
                        secure={false}
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <AppInputField
                        label='Senha: '
                        value={password}
                        placeholder='Insira sua senha' onChangeText={text => {
                            setPassword(text);
                            handleChange('password')(text);
                        }}
                        secure={true}
                    />
                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <AppInputField
                        label='Confirmar Senha: '
                        value={confirmPassword}
                        placeholder='Insira sua senha novamente'
                        onChangeText={text => {
                            setConfirmPassword(text);
                            (text);
                        }}
                        onSubmitEditing={(e) => {
                            confirmPasswordsMatch(e.nativeEvent.text, password);
                        }}
                        secure={true}
                    />

                    <AppInputField
                        label='Nome: '
                        value={name}
                        placeholder='Insira o nome do seu cachorro'
                        onChangeText={text => {
                            setName(text);
                            handleChange('name')(text);
                        }}
                        secure={false}
                    />

                    <DatePickerField
                        label='Aniversário do seu pet: '
                        value={birthday}
                        onChangeText={date => {
                            setBirthday(date);
                            setFieldValue('birthday', date);
                        }}
                    />

                    <AppInputField
                        label='Raça: '
                        value={breed}
                        placeholder='Insira a raça do seu cachorro'
                        onChangeText={text => {
                            setBreed(text);
                            handleChange('breed')(text);
                        }}
                        secure={false}
                    />

                    <AppInputField
                        label='Brinquedo Favorito: '
                        value={favoriteToy}
                        placeholder='Insira o brinquedo favorito do seu cachorro'
                        onChangeText={text => {
                            setFavoriteToy(text);
                            handleChange('favoriteToy')(text);
                        }}
                        secure={false}
                    />

                    <Button onPress={handleSubmit} title="ENVIAR" />
                </View>
            )}
        </Formik>
    );
};

function confirmPasswordsMatch(confirmation, original) {
    if (confirmation !== original) {
        alert('Passwords do not match, please try again.');
    }
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default AppForm;