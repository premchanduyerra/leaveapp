

// Chakra imports
import {
    Box,
    SimpleGrid,
   } from "@chakra-ui/react";
  // Assets
  // Custom components
  import React from "react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import { columnsDataDevelopment } from "views/admin/dataTables/variables/columnsData";
  import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
   export default function UserReports() {
    // Chakra Color Mode
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb='20px'
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}>
          <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={tableDataDevelopment}
          />
            
        </SimpleGrid>
      </Box>
    );
  }
  