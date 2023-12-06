import React from "react";

const DashboardWelcome = ({ name }: { name: string }) => {
  return <h1 className="text-4xl">Hello {name}!</h1>;
};

export default DashboardWelcome;
