import {Text, View} from 'react-native';

import colors from './src/theme/colors';
import font from './src/theme/fonts';

import Entypo from 'react-native-vector-icons/Entypo';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.tertiary}}>
      <Text style={{color: colors.highlight, fontSize: font.size.heading20, fontWeight: font.weight.bold }}>Enterface, LLC || Topeka KS</Text>
      <Entypo name="game-controller" size={100} color={colors.primary}/>
    </View>
  );
};

export default App;
