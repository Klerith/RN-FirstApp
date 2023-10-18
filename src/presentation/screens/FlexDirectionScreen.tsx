import { StyleSheet, View } from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container }>

      <View style={[ styles.box, styles.box1 ]} />
      <View style={[ styles.box, styles.box2 ]} />
      <View style={[ styles.box, styles.box3 ]} />

    </View>
  );
};


const styles = StyleSheet.create( {
  container: {
    flex: 1, 
    backgroundColor: '#d1d1d1',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
    top: -100,
  },
  box2: {
    backgroundColor: '#4240a2',
  },
  box3: {
    backgroundColor: '#2e2d71',
    top: 100
  },
} );