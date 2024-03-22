import { Avatar, AvatarImage } from "@gluestack-ui/themed";
import { useUserStore } from "../../store/useUserStore";

interface AvatarCardProps {
  avatar: string;
}

const AvatarCard: React.FC = () => {
  const avatar = useUserStore((state) => state.avatar);

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
