import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaUsuarios from './ListaUsuarios';
import CadastroUsuarios from './CadastroUsuarios';


const Stack = createStackNavigator();


export default function StackUsuarios() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="ListaUsuarios" component={ListaUsuarios} />
                <Stack.Screen name="CadastroUsuarios" component={CadastroUsuarios} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}