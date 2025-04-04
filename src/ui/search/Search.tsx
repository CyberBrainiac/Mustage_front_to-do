import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import style from "./search.module.scss";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { setSearchStr } from "@/redux/slices/filtersSlice";

export const SearchField: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchStr = useAppSelector(state => state.filters.searchStr);

  const handleChange = (value: string) => {
    dispatch(setSearchStr(value));
  };

  return (
    <div className={style["search-field"]}>
      <FaSearch className={style["icon"]} size={16} />
      <input
        type="text"
        placeholder="Search by title or description"
        value={searchStr}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
