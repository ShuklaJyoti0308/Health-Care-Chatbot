import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    incomingMsgBox: {
        backgroundColor: '#ffe7ec',
        maxHeight: '85%',
        borderRadius: 10,
        padding: 8,
        alignSelf: 'flex-start',
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'crimson',
    },
    incomingMsgText: {
        color: 'black',
        fontSize: 16,
    },

    sentMsgBox: {
        backgroundColor: '#DC143C',
        maxHeight: '85%',
        borderRadius: 10,
        padding: 8,
        alignSelf: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 10
    },
    sentMsgText: {
        color: 'white',
        fontSize: 16
    },  
    
    typeMsgContainer: {
        flexDirection:'row',
        marginHorizontal:5,
        bottom: 5
    },
    typeMsgBox: {
        borderWidth: 0.8,
        borderColor: 'grey',
        padding: 10,
        width: '80%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginHorizontal:5
    },
    sendBtn: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendTxt: {
        color: 'black',
        fontWeight:'bold'
    }
});

export default styles;