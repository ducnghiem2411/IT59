import GuestGuard from "components/authentication/GuestGuard";
import DashboardLayout from "components/Layouts/DashboardLayout";
import LoadingScreen from "components/LoadingScreen";
import { AccountDetails } from "pages/accountDetails/AccountDetails"
import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";

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
const UserProfile = Loadable(lazy(() => import("./pages/UserProfile")));

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
            {/* <AccountDetails /> 
             */}
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
    path: "dashboard",
    children: [
      {
        path: "",
        element: (
          <DashboardLayout title="Trang chủ">
            <UserProfile />
          </DashboardLayout>
        ),
      },
      {
        path: "account-profile",
        element: (
          <DashboardLayout title="Trang chủ">
            <UserProfile />
          </DashboardLayout>
        ),
      },
      {
        path: "account-list",
        element: <UserList />,
      },
      {
        path: "classroom-list",
        element: <ClassroomGrid />,
      },
      {
        path: "add-account",
        element: <AddNewUser />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
