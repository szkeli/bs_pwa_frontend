import {
  Search as SearchBase,
  SearchIconWrapper,
  StyledInputBase,
} from "./components/SearchBar";
import { Search as SearchIcon } from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";

export default function Search() {
  return (
    <>
      <SearchBar />
    </>
  );
}

function SearchBar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <SearchBase>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="search..."
            inputProps={{ "aria-label": "search" }}
          />
        </SearchBase>
      </Toolbar>
    </AppBar>
  );
}
