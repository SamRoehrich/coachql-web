import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";

export default function Dropdown() {
  return (
    <div className="w-56 text-right fixed top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div></div>
      </Menu>
    </div>
  );
}
