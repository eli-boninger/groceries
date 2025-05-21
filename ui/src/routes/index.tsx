import { createFileRoute } from "@tanstack/react-router";
import Input from "../components/form/input";
import Button from "../components/form/button";
import InputBase from "../components/form/inputBase";
import Alert from "../components/feedback/alert";
import { signIn } from "../services/AuthService";
import { useEffect, useState } from "react";
import { getLists } from "../services/ListsService";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    getLists();
  }, []);
  return <div>Home</div>;
}
