import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaDetalle from './components/PantallaDetalle';
import PantallaInicio from './components/PantallaInicio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={PantallaInicio} />
        <Stack.Screen name='Detalles' component={PantallaDetalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
