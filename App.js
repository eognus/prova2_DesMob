import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from './src/pages/CadastroPage';
import Dashboard from './src/pages/DashboardPage';
import ForgotPassword from './src/pages/ForgotPasswordPage';
import Login from './src/pages/LoginPage';


export default function MyStack() {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" >
        
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ 
          headerShown: false
        }}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Login' component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}