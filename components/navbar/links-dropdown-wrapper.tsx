import { currentUser } from '@clerk/nextjs/server';
import { LinksDropdown } from './links-dropdown';

export const LinksDropdownWrapper = async () => {
  const user = await currentUser();
  const isAdmin = user?.id === process.env.ADMIN_USER_ID;
  const profileImage = user?.imageUrl ?? null;

  return <LinksDropdown isAdmin={isAdmin} profileImage={profileImage} />;
};
