import FlexBox from "components/FlexBox";
import { H6, Small, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";

const UserListColumnShape = [
  {
    Header: "Name",
    minWidth: 200,
    Cell: ({ row }: any) => {
      const { image, fullName, email } = row.original;
      return (
        <FlexBox alignItems="center">
          <UkoAvatar src={image} />
          <FlexBox flexDirection="column" ml={1}>
            <H6 color="text.primary">{fullName}</H6>
            <Tiny color="text.disabled">{email}</Tiny>
          </FlexBox>
        </FlexBox>
      );
    },
  },
  {
    Header: "Role",
    minWidth: 200,
    Cell: ({ row }: any) => {
      const { accountType } = row.original;
      let backgroundColor;
      switch (accountType) {
        case 'teacher':
          backgroundColor = '#ff9933'
          break;
        case 'admin':
          backgroundColor = '#588be8'
          break;
        default:
          backgroundColor = '#A798FF';
      }
      if (accountType === 'teacher') {
      }
      return <Small
        sx={{
          borderRadius: 10,
          padding: ".2rem 1rem",
          color: "background.paper",
          backgroundColor: backgroundColor,
        }}
      >
        {accountType}
      </Small>
    },
  },
  {
    Header: "Classroom",
    minWidth: 150,
    Cell: ({ row }: any) => {
      const { classroomId } = row.original;
      return (
        <Small>
          {classroomId ? classroomId : 'Chưa tham gia'}
        </Small>
      )
    }
  },
  {
    Header: "Join Date",
    minWidth: 100,
    Cell: ({ row }: any) => {
      const { createdAt } = row.original;
      return (
        <Small>
          {new Date(createdAt).toISOString().slice(0,10)}
        </Small>
      )
    }
  },
];

export default UserListColumnShape;
