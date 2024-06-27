import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function DatePickerField({ label, value, handleFunction }) {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(value ? new Date(value) : new Date()); // Valor inicial como a data atual

    const showDatePicker = () => {
        setShow(true);
    };

    const hideDatePicker = () => {
        setShow(false);
    };

    const handleConfirm = selectedDate => {
        if (isAfter(selectedDate, new Date())) {
            // Se a data selecionada for depois de hoje, não faz nada
            return;
        }
        setDate(selectedDate);
        handleFunction(format(selectedDate, 'dd-MM-yyyy', { locale: ptBR }));
        hideDatePicker();
    };

    return (
        <View style={styles.datePickerContainer}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity onPress={showDatePicker} style={styles.datePickerButton}>
                <Text style={styles.datePickerButtonText}>{format(date, 'dd-MM-yyyy', { locale: ptBR })}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={show}
                mode="date"
                date={date}
                maximumDate={new Date()} // Define a data máxima como hoje
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    datePickerContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    datePickerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#fff',
    },
    datePickerButtonText: {
        fontSize: 16,
    },
});

export default DatePickerField;