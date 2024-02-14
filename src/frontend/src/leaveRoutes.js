import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdLock,
} from "react-icons/md";

// Admin Imports
import LeaveDashboard from "views/leave/Employees";
import ApproveLeave from "views/leave/ApproveLeave";

// Auth Imports

const routes = [
  
    {
    name: "Employees",
    layout: "/leave",
    path: "/employees",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: LeaveDashboard,
  },    {
    name: "Approve Leave",
    layout: "/leave",
    path: "/approve",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: ApproveLeave,
  },
];

export default routes;
