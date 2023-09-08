import { Fragment, useRef, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { CaretDown } from "@phosphor-icons/react";
import { MenuOption, CTA } from "@/data/navbar";

type FlyoutMenuItemProps = {
  name: string;
  options: MenuOption[];
  callsToAction?: CTA[];
};

export default function FlyoutMenuItem({
  name,
  options,
  callsToAction,
}: FlyoutMenuItemProps) {
  let timeout: any; // NodeJS.Timeout
  const timeoutDuration = 100;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open: boolean) => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open: boolean, action: any) => {
 
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  const handleClick = (open: any) => {
    setOpenState(!open);
    clearTimeout(timeout); 
  };

  const handleClickOutside = (event: any) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
          className="flex flex-col"
          onClick={() => handleClick(open)}
        >
          <Popover.Button
            ref={buttonRef}
            className="text-md inline-flex items-center gap-x-1 rounded-full px-4 py-2 leading-6 text-gray-300 ring-0 hover:text-opacity-75 focus:outline-none focus-visible:ring-gray-900 focus-visible:ring-opacity-75"
          >
            <span className="">{name}</span>
            <CaretDown
              className={`h-5 w-5 rotate-0 ${open} ? roate-180 : '' `}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-8 flex w-screen max-w-max -translate-x-1/2 px-2">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-900 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {options.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-2xl p-4 hover:bg-gray-800"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-gray-700">
                        <item.icon
                          className="h-6 w-6 text-gray-400 group-hover:text-brand-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <a
                          href={item.href}
                          className="font-semibold text-gray-100"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-0 text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-700">
                  {callsToAction &&
                    callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-md flex items-center justify-center gap-x-2.5 p-3  text-brand-400 hover:text-opacity-75"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-primary-200 "
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
