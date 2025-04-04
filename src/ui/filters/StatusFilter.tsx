import { setStatus } from "@/redux/slices/filtersSlice";
import style from "./statusFilter.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

const StatusFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.filters.status);

  const handleChange = (value: string) => {
    dispatch(setStatus(value));
  };

  return (
    <div className={style["status-filter"]}>
      <p>Filter by:</p>
      <select value={status} onChange={e => handleChange(e.target.value)}>
        <option value="2">All</option>
        <option value="1">Complete</option>
        <option value="0">Incomplete</option>
      </select>
    </div>
  );
};

export default StatusFilter;
