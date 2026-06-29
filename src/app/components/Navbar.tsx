import { motion } from "motion/react";
import logo from "../../assets/images/3GDecoLogo-2.png";

interface NavbarProps {
  activeNav?: string;
  scrolled?: boolean;
}

export default function Navbar({
  activeNav = "",
  scrolled = false,
}: NavbarProps) {
  const menu = [
    { id: "home", label: "HOME", link: "/" },
    { id: "features", label: "EXPERTISE", link: "/#features" },
    { id: "about", label: "ABOUT", link: "?page=aboutus" },
    { id: "services", label: "SERVICES", link: "?page=services" },
    { id: "projects", label: "PROJECTS", link: "/#projects" },
    { id: "contact", label: "CONTACT", link: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1EA]"
      style={{ height: "92px" }}
    >
      <div className="max-w-[1720px] mx-auto h-full px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center min-w-[240px]">
            <img
              src={logo}
              alt="3G Decorative Group"
              className="w-auto object-contain"
              style={{
                height: "105px",
                marginTop: "8px",
                marginLeft: "-72px",
              }}
            />
          </div>

          {/* Menu */}

          <div className="hidden lg:flex items-center gap-16">
            {menu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`relative uppercase transition-all duration-500 ${
                  activeNav === item.id
                    ? "text-[#ea7a12]"
                    : "text-[#332C26] hover:text-[#ea7a12]"
                }`}
                style={{
                  fontFamily: "'Parkinsans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}

          <button
            className="px-10 py-4 rounded-full text-white"
            style={{
              background: "linear-gradient(135deg,#f4b223 0%,#ea7a12 100%)",
            }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
