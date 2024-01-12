import React from "react";
import { SelectedPage } from "./types";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, }: Props) => {
  return (
    <Link
      to={"blank"}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </Link>
  );
};

export default ActionButton;
