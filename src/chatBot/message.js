import React, {Fragment} from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
const Message = ({incomingMsg, sentMsg, msg}) => {
    return (
        <Fragment>

            {/* Incoming message */}
            {incomingMsg && (
                <View style={styles.incomingMsgBox}>
                    <Text style={styles.incomingMsgText}>{msg}</Text>
                </View>
            )}
           
            {/* Sent message */}
            {sentMsg && (
                <View style={styles.sentMsgBox}>
                    <Text style={styles.sentMsgText}>{msg}</Text>
                </View>
            )}
           
        </Fragment>
    )
}

export default Message
