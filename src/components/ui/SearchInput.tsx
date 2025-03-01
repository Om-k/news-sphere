import React, { FormEvent, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

interface ISearchInput {
  placeholder?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  formProps?: React.FormHTMLAttributes<HTMLFormElement>;
}

const SearchInput = ({
  onInputChange,
  onSubmit,
  placeholder = "Search...",
  inputProps,
  formProps,
}: ISearchInput) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      className={`flex items-center w-full ${formProps?.className || ""}`}
      {...formProps}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={onInputChange}
        className="flex-grow p-2 pl-5 border rounded-md focus:no-underline outline-none w-full bg-secondaryLight border-secondary mx-3"
        {...inputProps}
      />
      <Button
        variant="filled"
        icon={<FiSearch />}
        type="submit"
        className="hidden md:flex"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchInput;
