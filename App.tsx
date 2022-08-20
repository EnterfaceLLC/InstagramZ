import {StyleSheet, View} from 'react-native';

//***COMPONENT IMPORTS BELOW***//
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


//***APP CODE BELOW */
const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#D3FCD5',
  },
});

export default App;
