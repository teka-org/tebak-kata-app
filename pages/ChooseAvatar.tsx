import { View } from 'react-native';
import { Text, Button } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigateProps } from '../types/navigationType';
import { LinearGradientStyles } from '../styles/LinearGradientStyle';

const ChooseAvatar = ({ navigation }: NavigateProps) => {
    return ( 
        <LinearGradient
            colors={['#48B8E9', '#48B8E9', '#BDCDD4']}
            style={LinearGradientStyles.container} 
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    bg={'$white'}
                    borderRadius={50}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>
                        .
                    </Text>
                </Button>
            </View>
        </LinearGradient>
    );
}

export default ChooseAvatar;
