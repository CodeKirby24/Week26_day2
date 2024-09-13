import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect } from 'react';

export default function TabTwoScreen() {;
    let Games = [];
    let names = [];
    let wins = [];
    let losses = [];

    async function Gather(){
      try{
        await fetch('http://localhost:3000/test/teams')
        .then(response => {
          // console.log(response.json());
          return response.json();
        })
        .then((data) => {
          Games = data;
          for(let i = 0; i < Games.length; i++){
            let nameData = Games[i].name;
            names.push(nameData);
            console.log(names);
          }
    
          for(let i = 0; i < Games.length; i++){
            let winData = Games[i].wins;
            wins.push(winData);
            console.log(wins);
          }
    
          for(let i = 0; i < Games.length; i++){
            let lossData = Games[i].losses;
            losses.push(lossData);
            console.log(losses);
          }
        })
          }catch(e){
            console.error(e)
          }finally{
            console.log("Done")
          }
    }
    useEffect(() => {
      Gather();
    })
    
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="flashlight" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore the Nba teams</ThemedText>
      </ThemedView>
      <Collapsible title="Teams">
        <ThemedText>Here's a list of teams!</ThemedText>
        <ThemedText>{names}</ThemedText>
      </Collapsible>
      <Collapsible title="Wins">
      <ThemedText> Here's the list of Wins</ThemedText>
      <ThemedText>{wins}</ThemedText>
      </Collapsible>
      <Collapsible title="Losses">
      <ThemedText> Here's the list of Losses</ThemedText>
      <ThemedText>{losses}</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
