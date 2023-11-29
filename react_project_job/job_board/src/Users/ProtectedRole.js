import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProtectedRole(props) {
  const { Component } = props;
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const userRole = userInfo.user_role;
  useEffect(() => {
    if (!userInfo && userRole !== "recruter") {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}
