import { Text, View} from 'react-native';
import { Link } from 'expo-router';



export default function Page(){
return (
<View>
    <Text>This is the taco page </Text>
    <Link href="/sandwich">Take me to the sandwich page</Link>
</View>
)
}