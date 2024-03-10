import { Box, Text, Image, Button, ButtonText, Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@gluestack-ui/themed';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigateProps } from '../types/navigationType';
const logo = require('../assets/logo2.png')
const diamond = require('../assets/diamond.png')
const avatar = require('../assets/avatar.png')

const Home = ({ navigation }: NavigateProps) => {
    return ( 
        <LinearGradient
            colors={['#48B8E9', '#48B8E9', '#BDCDD4']}
            style={styles.container} 
        >
            <Box width='100%' px={30} position='absolute' display='flex' flexDirection='row' justifyContent='space-between' top={70} >
                <Image source={logo} alt={"teka"} width={50} height={20} objectFit={'contain'} />

                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Image source={diamond} position='relative' zIndex={10} alt={"teka"} width={20} height={20} objectFit={'contain'} marginRight={-10} />

                    <Box width={100} height={20} bg='#ffffffce' display='flex' justifyContent='center' alignItems='center'>
                        <ButtonText color='$black' fontWeight={'bold'}>50</ButtonText>
                    </Box>

                    <Button size={'xs'} height={28} display='flex' bg='#0ACF83' borderWidth={1} borderColor={'#018b56'}>
                        <ButtonText color='$black' fontWeight={'semibold'} size='xl'>+</ButtonText>
                    </Button>
                </Box>
            </Box>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    bg={'$white'}
                    borderRadius={'$full'}
                    h={150}
                    w={150}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Avatar>
                        <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
                        <AvatarImage
                            source={avatar}
                            alt={"avatar user"}
                            w={140}
                            h={140}
                            objectFit="cover"
                        />
                    </Avatar>
                </Button>

                <Text size='xl' color='$white' marginTop={5}>
                    Spideysheree
                </Text>

                <Button bg={'#0ACF83'} borderWidth={1} borderColor={'#018b56'} marginTop={100} marginBottom={-80}>
                    <ButtonText textTransform='uppercase' size='xl'>
                        start game
                    </ButtonText>
                </Button>
            </View>
        </LinearGradient>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
