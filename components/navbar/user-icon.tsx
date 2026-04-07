import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

function UserIcon({ profileImage }: { profileImage: string | null }) {
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile"
        width={24}
        height={24}
        className="h-6 w-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="h-6 w-6 rounded-full bg-primary text-white" />;
}
export default UserIcon;
