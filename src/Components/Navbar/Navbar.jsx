import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarsGroup, Group } from "@mantine/core";
import dyshine from "../../photos/dyshine.jpg";
import "./Nav.css";
export default function Navbar() {
  return (
    <div className="nav-content">
      <nav>
        <Group spacing="xl" grow>
          <a href="#">About</a>
          <a href="#project-section">Projects</a>
          <a href="#contact-section">Contact</a>
        </Group>
      </nav>
      <Avatar src={dyshine} alt="Photo of Dyshine" />
    </div>
  );
}
