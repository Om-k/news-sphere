import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import SearchInput from "../components/ui/searchInput";
import { FiFilter } from "react-icons/fi";
import ToggleDarkModeButton from "../components/custom/ToggleDarkModeButton";
import Button from "../components/ui/Button";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>(""); // State for search input
  const navigate = useNavigate();

  const handleFilterToggle = () => {
    console.log("Filter toggled");
  };

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); 
  };

  const handleSearchSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchValue.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`); // Navigate to search
    }
  };

  return (
    <section className="pb-6 mb-6 border-b border-b-secondary">
      <div className="mx-6">
        <div className="flex justify-between my-4 items-center">
          <div></div>
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="mr-5 h-11 w-11" />
            <h1>NewsSphere</h1>
          </div>
          <ToggleDarkModeButton />
        </div>
        <div className="flex items-center w-full">
          <Button
            variant="iconed"
            icon={<FiFilter />}
            onClick={handleFilterToggle}
          />
          <SearchInput
            placeholder="Search..."
            onInputChange={handleInputChange}
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
