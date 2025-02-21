import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
export default function Home(){
  const participants = ['Cesar August', 'Igor Gabriel']

  function handleParticipantAdd(){
    console.log('clicado')
  }

  function handleParticipantRemove(name: string){
    console.log(`removeu ${name}!`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento 
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder='Nome do Participante'
            placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant  key={participant} name={participant} onRemove={() => handleParticipantRemove(participant)}/>
          ))
        }
      </ScrollView>
    </View>
  );
}