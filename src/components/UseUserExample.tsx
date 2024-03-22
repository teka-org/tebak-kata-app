import { useUser } from "@clerk/clerk-expo";
import { Text } from "react-native";
 
export default function UseUserExample({setUserEmail}: any) {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  // console.log("user :", user);
  setUserEmail(user.emailAddresses[0].emailAddress)
 
  return <Text>Hello, {user.firstName} welcome to Clerk</Text>;
}