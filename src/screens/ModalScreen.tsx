import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, Text } from 'react-native';
import { HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={appTheme.appContainer}>
            <HeaderTitle title="Modal" />

            <Button
                title="Abrir modal"
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent
            >
                {/* Background negro */}
                <View style={styles.modalBackground}>

                    {/* Contenido del modal */}
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Modal</Text>
                        <Text style={styles.modalDescription}>Cuerpo del modal</Text>
                        <Button title="Cerrar" onPress={() => setIsVisible(false)} />
                    </View>

                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 5,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
});
