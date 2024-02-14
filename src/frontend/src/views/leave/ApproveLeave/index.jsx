

// Chakra imports
import {
    Box,
    SimpleGrid,
   } from "@chakra-ui/react";
import MiniCalendar from "components/calendar/MiniCalendar";
  // Assets
  // Custom components
  import React from "react";
import { Calendar } from "react-calendar";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import { columnsDataDevelopment } from "views/admin/dataTables/variables/columnsData";
  import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
  import Tasks from "views/admin/default/components/Tasks";

   export default function ApproveLeave() {
    // Chakra Color Mode
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
           <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap='20px'>
          <Tasks />
         </SimpleGrid>  
      </Box>
    );
  }
  