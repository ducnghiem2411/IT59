import GuestGuard from "components/authentication/GuestGuard";
import DashboardLayout from "components/Layouts/DashboardLayout";
import LoadingScreen from "components/LoadingScreen";
import AccountSettings from "pages/AccountSettings";
import { FC, lazy, LazyExoticComponent, Suspense } from "react";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// authentication pages
const Login = Loadable(lazy(() => import("./pages/authentication/Login")));

const ForgetPassword = Loadable(
  lazy(() => import("./pages/authentication/ForgetPassword"))
);

// Home pages
const Homepage = Loadable(lazy(() => import("./pages/home/Homepage")));

// user profile
const UserProfile = Loadable(lazy(() => import("./pages/AccountDetails")));

// user management
const UserList = Loadable(
  lazy(() => import("./pages/userManagement/UserList"))
);
const ClassroomGrid = Loadable(
  lazy(() => import("./pages/classroomManagement/ClassroomGrid"))
);
const AddNewUser = Loadable(
  lazy(() => import("./pages/userManagement/AddNewUser"))
);

// error
const Error = Loadable(lazy(() => import("./pages/404")));

// routes
const routes = [
  {
    path: "/",
    element: (
      <DashboardLayout title="Trang chủ">
        <Homepage />
      </DashboardLayout>
    )
  },
  {
    path: "/login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "/forget-password",
    element: (
      <GuestGuard>
        <ForgetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "account",
    children: [
      {
        path: "",
        element: (
          <DashboardLayout title="Danh sách tài khoản">
            <UserList />
          </DashboardLayout>
        ) 
      },
      {
        path: ":id",
        element: (
          <DashboardLayout title="Thông tin tài khoản">
            <UserProfile />
          </DashboardLayout>
        ) 
      },
      {
        path: "add-account",
        element: (
          <DashboardLayout title="Tạo tài khoản">
            <AddNewUser />,
          </DashboardLayout>
        )
      },
      {
        path: "settings",
        element: (
          <DashboardLayout title="Cài đặt tài khoản">
            <AccountSettings/>
          </DashboardLayout>
        )
      }
    ]
  },
  {
    path: "/classroom",
    element: (
      <DashboardLayout title="Lớp học">
        <ClassroomGrid />
      </DashboardLayout>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
