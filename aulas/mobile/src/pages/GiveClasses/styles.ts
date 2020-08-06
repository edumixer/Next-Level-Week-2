import { StyleSheet } from 'react-native';


// Styles Components = var(colors)

const styles =  StyleSheet.create({
    container : {
        flex: 1,        // ocupa a tela inteira
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#d3c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold',
    }
});
export default styles;