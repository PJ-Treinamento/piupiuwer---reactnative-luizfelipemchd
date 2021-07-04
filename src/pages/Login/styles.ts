import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },

    bird: {
        marginTop: 40,
    },

    text: {
        marginTop: 25,
        alignSelf: 'flex-start',
        marginLeft: 16,
    },

    innerText: {
        fontSize: 20,
        marginBottom: 8,
    },


    inputs: {
        marginTop: 25,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    emailInput: {
        backgroundColor: '#e5e5e5',
        width: '75%',
        height: 50,
        fontSize: 16,
        padding: 8,
        borderRadius: 8,
    },

    passwordWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
        
        width: '100%',
        height: 50,
        
        marginTop: 8,

    },

    passwordInput: {
        backgroundColor: '#e5e5e5',
        fontSize: 16,
        width: '75%',
        height: 50,
        padding: 8,
        borderRadius: 8,
    },

    eye: {
        marginLeft: -38,
    },

    button: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        
        marginTop: 40,
        backgroundColor: '#000',
        width: '50%',
        height: 50,
        borderRadius: 8,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default styles;