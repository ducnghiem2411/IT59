
import { PersonAdd, Login, People } from "@mui/icons-material";
import ClassIcon from '@mui/icons-material/Class';
import HomeIcon from '@mui/icons-material/Home';

const index = [
  {
    title: "Homepage",
    Icon: HomeIcon,
    path: "/",
  },
  {
    title: "Classroom List",
    Icon: ClassIcon,
    path: "/classroom",
  },
  {
    title: "Account List",
    Icon: People,
    path: "/account",
  },
  {
    title: "Create account",
    Icon: PersonAdd,
    path: "/dashboard/add-user",
  },
  {
    title: "Login",
    Icon: Login,
    path: "/login",
  }
];

export default index;
