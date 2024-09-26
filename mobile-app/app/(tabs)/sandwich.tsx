import { Text, View} from 'react-native';
import { Link } from 'expo-router';




export default function Page(){
    return (
        <View>
            <Text>This is the taco page </Text>
            <Link href="/taco">Take me to the Taco page</Link>
        </View>
        )
        }