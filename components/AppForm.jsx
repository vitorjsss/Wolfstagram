import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppInputField from './AppInputField';
import DatePickerField from './DatePickerField';

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

export const AppForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
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
                        label='Email: '
                        value={values.email}
                        placeholder='Insira o seu email'
                        onChangeText={handleChange('email')}
                        secure={false}
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                    <AppInputField
                        label='Senha: '
                        value={values.password}
                        placeholder='Insira sua senha'
                        onChangeText={handleChange('password')}
                        secure={true}
                    />
                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                    <AppInputField
                        label='Confirmar Senha: '
                        placeholder='Insira sua senha novamente'
                        onChangeText={handleChange('confirmPassword')}
                        secure={true}
                    />
                    {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

                    <AppInputField
                        label='Nome: '
                        value={values.name}
                        placeholder='Insira o nome do seu cachorro'
                        onChangeText={handleChange('name')}
                        secure={false}
                    />

                    <DatePickerField
                        label='Aniversário do seu pet: '
                        value={values.birthday}
                        onChangeText={date => setFieldValue('birthday', date)}
                    />

                    <AppInputField
                        label='Raça: '
                        value={values.breed}
                        placeholder='Insira a raça do seu cachorro'
                        onChangeText={handleChange('breed')}
                        secure={false}
                    />

                    <AppInputField
                        label='Brinquedo Favorito: '
                        value={values.favoriteToy}
                        placeholder='Insira o brinquedo favorito do seu cachorro'
                        onChangeText={handleChange('favoriteToy')}
                        secure={false}
                    />

                    <Button onPress={handleSubmit} title="ENVIAR" />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default AppForm;