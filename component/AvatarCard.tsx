import { Avatar, AvatarImage } from "@gluestack-ui/themed";

interface AvatarCardProps {
  avatar: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ avatar }) => {
  return (
    <Avatar size="2xl" bg="$white">
      <AvatarImage
        source={avatar}
        alt={"avatar user"}
        objectFit="contain"
        borderWidth={3}
        borderColor="$white"
      />
    </Avatar>
  );
};

export default AvatarCard;