import { Box, Button, Grid, styled } from "@mui/material";
import { getClassroomList } from "api/classroom"
import FlexBox from "components/FlexBox";
import SearchInput from "components/SearchInput";
import ClassroomCard from "components/ClassroomCard";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15,
    },
  },
}));

const ClassroomGrid: FC = () => {
  const navigate = useNavigate();
  const handleAddClass = () => navigate("/account/add");
  const [listClass, setListClass] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getClassroomList(0, 20)
      if (response) {
        setListClass(response.data)
      }
    }
    fetchData()
  }, [])

  return (
    <Box pt={2} pb={4}>
      <StyledFlexBox>
        <SearchInput placeholder="Search classroom..." />

        <Button variant="contained" onClick={handleAddClass}>
          Add New Classroom
        </Button>
      </StyledFlexBox>

      <Grid container spacing={3}>
        {listClass.map((classroom, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <ClassroomCard classroom={classroom} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClassroomGrid;