import React,{useState} from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import Message from './message'
//import {data} from './data'
import styles from './styles';
import Voice from 'react-native-voice';
import axios from 'axios';

let chats = [];
const ChatBot = () => {
    const [msg, setMsg] = useState('');
    const [chatList, setChatList] = useState([])

    const getAnswer = q => {
        console.log("call :",q);
        axios.get("http://10.0.2.2/api/fetch.php?q="+q)
            .then((response) => {
                //console.log(response.data);
                let reply=response.data.result[0];
                console.log("res:",reply.replies);
                if(reply.replies!='' && reply.replies!=null){
                    chats = [...chats, {msg: reply.replies, incomingMsg: true}];
                    setChatList([...chats].reverse());
                    return;
                }
                
                chats = [...chats, {msg: "Did not recognise your question", incomingMsg: true}];
                setChatList([...chats].reverse());
                return;
            })
            .catch((error) => {
                console.log(error);
            }) 
    };    

       
    

    const onSendMessage = () => {
        chats = [...chats,{msg: msg, sentMsg : true}];
        setChatList([...chats].reverse());
        setTimeout(()=>{
            let r = getAnswer(msg);
            console.log("return:",r);
        },1000)
        setMsg('');
    }
    return (
        <View>
        <FlatList 
            style={{height: '87%', bottom: '3%'}}
            data={chatList}
            inverted={true}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item}) => (
                <Message 
                    incomingMsg={item.incomingMsg} 
                    msg={item.msg} 
                    sentMsg={item.sentMsg} 
                />
            )}
        />
            <View style={styles.typeMsgContainer}>
              
                <TextInput style={styles.typeMsgBox}
                    value={msg}
                    placeholder="Type Here..."
                    onChangeText={(val)=>setMsg(val)}
                />
                <TouchableOpacity 
                    style={[styles.sendBtn, {backgroundColor: msg ? '#7ed93f' : '#b7ea94' }]}
                    disabled={msg ? false : true}
                    onPress={()=> onSendMessage()}
                >
                    <Text style={styles.sendTxt}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatBot;