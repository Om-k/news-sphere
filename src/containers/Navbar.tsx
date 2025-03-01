import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import SearchInput from "../components/ui/SearchInput";
import { FiFilter } from "react-icons/fi";
import ToggleDarkModeButton from "../components/custom/ToggleDarkModeButton";
import Button from "../components/ui/Button";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();
  
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("q");

  const handleFilterToggle = () => {
    navigate(`/filter?q=${paramValue && paramValue!=null ? paramValue : ""}`)
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchValue.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <section className="pb-6 mb-6 border-b border-b-secondary">
      <div className="mx-6">
        <div className="flex justify-between my-4 items-center">
          <div className="hidden md:block" ></div>
          <div className="flex items-center" 
          onClick={() => {navigate("/")}} >
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
            isMainSearch={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
