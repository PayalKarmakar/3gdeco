import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";
import logo from "../../assets/images/3GDecoLogo-2.png";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#2A211C] text-[#F5F1EA] pt-28"
    >
      {/* Luxury background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#2A211C]/90 to-[#17110D]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Top Footer */}
        <div className="grid lg:grid-cols-4 gap-16 pb-20 border-b border-[#D4A24C]/20">
          {/* Logo */}
          <div>
            <motion.img
              src={logo}
              alt="3G Decorative Group"
              className="w-44 lg:w-52 mb-8"
              animate={{
                filter: [
                  "drop-shadow(0 0 0px #D4A24C)",
                  "drop-shadow(0 0 12px #D4A24C)",
                  "drop-shadow(0 0 0px #D4A24C)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <p
              className="text-[#D7D0C7] leading-8 text-sm"
              style={{
                fontFamily: "'Parkinsans',sans-serif",
              }}
            >
              Crafting luxurious interiors that blend elegance, innovation and
              timeless sophistication.
            </p>

            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.12,
                    boxShadow: "0 0 20px rgba(212,162,76,.35)",
                  }}
                  className="
                  size-12
                  rounded-full
                  border
                  border-[#D4A24C]
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:bg-[#D4A24C]
                  hover:text-black
                  transition-all
                  "
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className="
              text-[#D4A24C]
              mb-8
              tracking-[0.2em]
              "
            >
              QUICK LINKS
            </h3>

            {[
              "Home",
              "About Us",
              "Services",
              "Projects",
              "Our Process",
              "Testimonials",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 8 }}
                className="
                group
                flex
                justify-between
                items-center
                mb-5
                cursor-pointer
                border-b
                border-[#D4A24C]/10
                pb-3
                "
                style={{
                  fontFamily: "'Parkinsans',sans-serif",
                  fontSize: "15px",
                }}
              >
                <span
                  className="
                group-hover:text-[#D4A24C]
                transition-all
                "
                >
                  {item}
                </span>

                <ChevronRight
                  size={16}
                  className="
                text-[#D4A24C]
                group-hover:translate-x-1
                transition-all
                "
                />
              </motion.div>
            ))}
          </div>

          {/* Services */}

          <div>
            <h3
              className="
            text-[#D4A24C]
            mb-8
            tracking-[0.2em]
            "
            >
              SERVICES
            </h3>

            {[
              "Interior Design",
              "Architecture",
              "Space Planning",
              "Furniture Design",
              "Luxury Living",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 8 }}
                className="
            group
            flex
            justify-between
            items-center
            mb-5
            border-b
            border-[#D4A24C]/10
            pb-3
            cursor-pointer
            "
                style={{
                  fontFamily: "'Parkinsans',sans-serif",
                  fontSize: "15px",
                }}
              >
                <span
                  className="
            group-hover:text-[#D4A24C]
            transition-all
            "
                >
                  {item}
                </span>

                <ChevronRight
                  size={16}
                  className="
            text-[#D4A24C]
            group-hover:translate-x-1
            transition-all
            "
                />
              </motion.div>
            ))}
          </div>

          {/* Contact */}

          <div>
            <h3
              className="
            text-[#D4A24C]
            mb-8
            tracking-[0.2em]
            "
            >
              CONTACT
            </h3>

            <div
              className="space-y-6"
              style={{
                fontFamily: "'Parkinsans',sans-serif",
                fontSize: "15px",
              }}
            >
              {[
                {
                  icon: MapPin,
                  title: "Kolkata, West Bengal",
                  sub: "India",
                },

                {
                  icon: Phone,
                  title: "+91 XXXXX XXXXX",
                },

                {
                  icon: Mail,
                  title: "info@3gdecorativegroup.com",
                },

                {
                  icon: Clock,
                  title: "Mon - Sat : 10 AM - 7 PM",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 10,
                    }}
                    className="
              group
              flex
              items-center
              gap-5
              cursor-pointer
              "
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 18px rgba(212,162,76,.35)",
                      }}
                      className="
              w-14
              h-14
              min-w-[56px]
              rounded-full
              border
              border-[#D4A24C]/40
              flex
              items-center
              justify-center
              text-[#D4A24C]
              transition-all
              duration-500
              "
                    >
                      <Icon size={20} />
                    </motion.div>

                    <div>
                      <p
                        className="
              text-[#F5F1EA]
              group-hover:text-[#D4A24C]
              transition-all
              "
                      >
                        {item.title}
                      </p>

                      {item.sub && (
                        <p
                          className="
              text-sm
              text-[#B7ADA0]
              "
                        >
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter */}

        <div
          className="
            mt-20
            border
            border-[#D4A24C]/20
            rounded-[28px]
            bg-gradient-to-r
            from-[#2A1E16]/90
            to-[#32241B]/70
            backdrop-blur-md
            px-10
            py-10
            "
        >
          <div
            className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            "
          >
            {/* LEFT */}

            <div
              className="
            flex
            items-center
            gap-8
            flex-1
            "
            >
              <div
                className="
            w-20
            h-20
            rounded-full
            border
            border-dashed
            border-[#D4A24C]/35
            flex
            items-center
            justify-center
            text-[#D4A24C]
            "
              >
                <Mail size={34} />
              </div>

              <div
                className="
            hidden
            lg:block
            w-[1px]
            h-20
            bg-[#D4A24C]/20
            "
              />

              <div>
                <h3
                  className="
            text-[#E8DED0]
            tracking-[0.08em]
            mb-3
            "
                  style={{
                    fontFamily: "'Parkinsans',sans-serif",
                    fontSize: "42px",
                    fontWeight: 500,
                  }}
                >
                  STAY INSPIRED
                </h3>

                <p
                  className="
            text-[#B9ADA0]
            max-w-md
            leading-8
            "
                  style={{
                    fontFamily: "'Parkinsans',sans-serif",
                  }}
                >
                  Subscribe to our newsletter and be the first to know about our
                  latest projects and ideas.
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
            flex-1
            "
            >
              <div
                className="
            flex
            h-[88px]
            overflow-hidden
            border
            border-[#D4A24C]/25
            rounded-[18px]
            "
              >
                <input
                  placeholder="Enter your email address"
                  className="
            flex-1
            bg-transparent
            outline-none
            px-8
            text-[#F5F1EA]
            placeholder:text-[#8A7E72]
            "
                  style={{
                    fontFamily: "'Parkinsans',sans-serif",
                    fontSize: "18px",
                  }}
                />

                <motion.button
                  whileHover={{
                    background: "#E3B75D",
                  }}
                  className="
            w-[230px]
            bg-gradient-to-r
            from-[#C89A44]
            to-[#DDAF56]
            text-black
            tracking-[0.18em]
            font-medium
            "
                  style={{
                    fontFamily: "'Parkinsans',sans-serif",
                  }}
                >
                  SUBSCRIBE →
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
      mt-10
      pt-8
      border-t
      border-[#D4A24C]/20
      relative
      "
        >
          {/* Center ornament */}

          <div
            className="
      absolute
      left-1/2
      -top-[13px]
      -translate-x-1/2
      bg-[#1F1713]
      px-5
      text-[#D4A24C]
      text-[14px]
      "
          >
            ✧
          </div>

          <div
            className="
      flex
      flex-col
      lg:flex-row
      justify-between
      items-center
      gap-4
      text-[#A89E92]
      "
            style={{
              paddingBottom: "15px",
              fontFamily: "'Parkinsans',sans-serif",
              fontSize: "13px",
            }}
          >
            <p
              className="
      tracking-[0.03em]
      "
            >
              © 2025 3G Decorative Group. All Rights Reserved.
            </p>

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
      flex
      items-center
      gap-2
      "
            >
              <span>Designed & Developed By</span>

              <span
                className="
      text-[#D4A24C]
      font-medium
      hover:text-[#E3B75D]
      transition-all
      cursor-pointer
      "
              >
                CodeInQ
              </span>
            </motion.div>

            <div
              className="
      flex
      items-center
      gap-5
      "
            >
              <span
                className="
      hover:text-[#D4A24C]
      cursor-pointer
      transition-all
      "
              >
                Privacy Policy
              </span>

              <span
                className="
      text-[#5A4B40]
      "
              >
                |
              </span>

              <span
                className="
      hover:text-[#D4A24C]
      cursor-pointer
      transition-all
      "
              >
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
