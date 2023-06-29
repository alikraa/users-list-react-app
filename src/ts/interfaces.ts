interface UserData {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  onClickInvite: (id: number) => void;
  isInvited: boolean;
}

interface UsersProps {
  items: UserData[];
  isLoading: boolean;
  searchValue: string;
  onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invites: number[];
  onClickInvite: (id: number) => void;
  onClickSendInvites: () => void;
}

interface SuccessProps {
  count: number;
}

export type { UserProps, UsersProps, SuccessProps };
