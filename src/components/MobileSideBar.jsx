import { X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const MobileSidebar = ({ isOpen, onClose, navItems }) => {
  const [expanded, setExpanded] = useState({});

  const toggleSubmenu = (name) => {
    setExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-slate-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-out border-l border-gray-800 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <ThemeToggle />
          <button onClick={onClose} className="p-2 text-gray-300 hover:text-red-500 hover:rotate-90 transition-all duration-300">
            <X size={32} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-6 space-y-2 overflow-y-auto h-[calc(100vh-100px)]">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-800 pb-2">
              <div className="flex items-center justify-between py-2">
                <a
                  href={item.href}
                  onClick={!item.subItems ? onClose : undefined}
                  className="text-lg font-medium text-gray-200 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>

                {/* + / - Button */}
                {item.subItems && (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                  >
                    {expanded[item.name] ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                )}
              </div>

              {/* Accordion Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[item.name] ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col space-y-2 pl-4 border-l-2 border-blue-500/30 ml-2">
                  {item.subItems?.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-2 py-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors text-sm"
                    >
                      {/* Render the icon if it exists */}
                      {sub.icon && <sub.icon size={16} className="text-blue-500" />}
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};