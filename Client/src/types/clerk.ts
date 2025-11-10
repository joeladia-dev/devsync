export interface AppUser {
  id: string;
  fullName?: string;
  email?: string;
  imageUrl?: string;
}

/**
 * Map a Clerk user-like object to AppUser.
 * Use with useUser().user (may be null until loaded).
 */
export function mapClerkUser(user: any): AppUser | null {
  if (!user) return null;
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ') || undefined;
  const email =
    user?.emailAddresses?.[0]?.emailAddress || user?.primaryEmailAddress || user?.email || undefined;
  const imageUrl = user?.profileImageUrl || user?.imageUrl || undefined;

  return {
    id: user.id,
    fullName,
    email,
    imageUrl,
  };
}