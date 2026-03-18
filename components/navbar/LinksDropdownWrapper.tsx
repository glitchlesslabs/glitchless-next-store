import { currentUser } from '@clerk/nextjs/server';
import LinksDropdown from './LinksDropdown';

async function LinksDropdownWrapper() {
  const user = await currentUser();
  const isAdmin = user?.id === process.env.ADMIN_USER_ID;
  const profileImage = user?.imageUrl ?? null;

  return <LinksDropdown isAdmin={isAdmin} profileImage={profileImage} />;
}
export default LinksDropdownWrapper;
