import {FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) =>(
          <Participant  key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false} 
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ningu�m chegou no envendo ainda? Adicione participantes a sua lista de presen�a.
          </Text>
        )}
      />
    </View>
  );
}