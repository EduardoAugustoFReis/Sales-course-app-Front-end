import UserActions from "@/components/admin/Users/UserActions";
import styles from "./styles.module.css";

import RoleLayout from "@/app/(private)/RoleLayout";
import UserBasicInfo from "@/components/admin/Users/UserBasicInfo";
import UserHeader from "@/components/admin/Users/UserHeader";
import { getUsersById } from "@/services/users/users";

type UserDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;
  const user = await getUsersById(id);

  return (
    <RoleLayout allowedRole="ADMIN">
      <div className={styles['user-details-page']}>
        <UserHeader user={user} />
        <UserBasicInfo user={user} />
        <UserActions user={user} />
      </div>
    </RoleLayout>
  );
}
