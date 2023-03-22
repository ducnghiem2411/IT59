
import { PersonAdd, People } from "@mui/icons-material";
import ClassIcon from '@mui/icons-material/Class';
import HomeIcon from '@mui/icons-material/Home';

const index = [
  {
    title: "Homepage",
    Icon: HomeIcon,
    path: "/",
    public: true
  },
  {
    title: "Classroom List",
    Icon: ClassIcon,
    path: "/classroom",
    public: true
  },
  {
    title: "Account List",
    Icon: People,
    path: "/account",
    public: true
  },
  {
    title: "Create account",
    Icon: PersonAdd,
    path: "/account/add-account",
    public: false
  },
];

export default index;
