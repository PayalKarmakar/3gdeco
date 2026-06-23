import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/images/3GDecoLogo-2.png";
import privacyLock from "../assets/images/lock.png";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-[#F5F1EA] overflow-x-hidden">

        <motion.nav
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              className="relative z-50 bg-[#F5F1EA]"
              style={{ height: "92px" }}
            >
              <div className="max-w-[1720px] mx-auto h-full px-8">
                <div className="flex items-center justify-between h-full">
                  {/* LEFT LOGO */}
                  <div className="flex items-center min-w-[240px]">
                    <motion.img
                      whileHover={{ scale: 1.03 }}
                      src={logo}
                      alt="3G Decorative Group"
                      className="w-auto object-contain"
                      style={{
                        height: "105px",
                        marginTop: "8px",
                        marginLeft: "-72px",
                        filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.16))",
                      }}
                    />
                  </div>
      
                  {/* CENTER MENU */}
                  <div className="hidden lg:flex items-center gap-16">
                    {[
                      { id: "home", label: "HOME" },
                      { id: "features", label: "EXPERTISE" },
                      { id: "about", label: "ABOUT" },
                      { id: "services", label: "SERVICES" },
                      { id: "projects", label: "PROJECTS" },
                      { id: "contact", label: "CONTACT" },
                    ].map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="
                          relative
                          uppercase
                          transition-all
                          duration-500
                          text-[#332C26]
                          hover:text-[#ea7a12]
                          "
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontSize: "14px",
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                        }}
                      >
                        {item.label}
      
                        {/* Animated underline */}                     
                      </a>
                    ))}
                  </div>
      
                  {/* RIGHT CTA */}
                  <div className="flex justify-end min-w-[260px]">
                    <motion.button
                      whileHover={{
                        scale: 1.04,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="relative overflow-hidden px-10 py-4 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg, #f4b223 0%, #ea7a12 100%)",
                        boxShadow: "0 16px 40px rgba(234,122,18,0.24)",
                      }}
                    >
                      {/* Shine Animation */}
                      <motion.div
                        animate={{
                          x: ["-150%", "250%"],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 w-1/3 bg-white/20 skew-x-[-20deg]"
                      />
      
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-50" />
      
                      <span
                        className="relative z-10 text-white"
                        style={{
                          fontFamily: "'Parkinsans', sans-serif",
                          fontSize: "15px",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                        }}
                      >
                        Book Consultation
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
        </motion.nav>
        
        {/* HERO SECTION */}

       <section
            className="
            relative
            overflow-hidden
            bg-[#1F1713]            
            min-h-[780px]
            sm:min-h-[850px]
            md:min-h-[700px]
            lg:h-[650px]
            "
            >       
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Main Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

            {/* Left Dark Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(24,15,10,.95) 0%, rgba(24,15,10,.88) 25%, rgba(24,15,10,.45) 60%, rgba(24,15,10,.15) 100%)"
              }}
            />

            {/* Top Band */}
              <div
                className="
                  absolute
                  top-[90px]
                  lg:top-[125px]
                  left-0
                  lg:left-[200px]
                  h-[18px]
                  w-[90%]
                  lg:w-[720px]
                "
                style={{
                  background: "rgba(0,0,0,.18)",
                  backdropFilter: "blur(12px)"
                }}
              />   
                    

           <div
            className="
              relative z-30
              max-w-[1280px]
              mx-auto
              px-6

              h-full

              flex
              flex-col
              lg:flex-row

              justify-center
              items-center

              gap-16
              lg:gap-24
            "
          >
              {/* LEFT CONTENT */}
                  
              <div
                className="
                  order-2
                  lg:order-2
                  flex flex-col
                  items-center lg:items-start
                  text-center lg:text-left
                  max-w-[720px]
                  mt-8
                  lg:mt-0
                  "
              >

                {/* Label */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    lg:justify-start
                    gap-3
                    mb-8
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-[#D89A2D]" />

                  <span
                    className="uppercase text-[#D89A2D]"
                    style={{
                      fontFamily: "Parkinsans",
                      letterSpacing: ".38em",
                      fontSize: "14px"
                    }}
                  >
                    Privacy Policy
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="
                    text-white
                    leading-[1.08]

                    text-[44px]
                    sm:text-[58px]
                    md:text-[70px]
                    lg:text-[82px]
                  "
                  style={{
                    fontFamily: "Parkinsans",
                    fontWeight: 500,
                    letterSpacing: "-0.03em"
                  }}
                >
                  Your Privacy
                  <br />
                  Matters to Us
                </h1>

                {/* Description */}
                <p
                  className="
                    text-[#F0ECE6]
                    mt-10

                    text-[16px]
                    lg:text-[18px]

                    leading-9

                    max-w-[560px]
                    mx-auto
                    lg:mx-0
                  "
                  style={{
                    fontFamily: "Parkinsans"
                  }}
                >
                  We are committed to protecting your personal information
                  and your right to privacy.
                </p>

              </div>
            
            {/* RIGHT SHIELD */}
            

            <motion.div
              className="
              order-1 lg:order-1

              relative
              flex
              items-center
              justify-center

               mt-24
              sm:mt-28
              md:mt-16
              lg:mt-0

              lg:-translate-x-44
              xl:-translate-x-52

              w-[140px]
              h-[140px]

              sm:w-[180px]
              sm:h-[180px]

              md:w-[220px]
              md:h-[220px]

              lg:w-[250px]
              lg:h-[250px]
              "
              animate={{
              y:[0,-12,0]
              }}
              transition={{
              duration:4,
              repeat:Infinity,
              ease:"easeInOut"
              }}
              >

              {/* BIG INNER GOLD GLOW */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,162,76,.55) 0%, rgba(212,162,76,.25) 40%, transparent 75%)",
                  filter: "blur(80px)",
                  animation: "pulseGlow 4s ease-in-out infinite"
                }}
              />

              {/* OUTER CIRCLE */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border border-[#D89A2D]/40

                  w-[220px]
                  h-[220px]

                  sm:w-[280px]
                  sm:h-[280px]

                  lg:w-[380px]
                  lg:h-[380px]
                  "
                // style={{
                //   width: "380px",
                //   height: "380px"
                // }}
              />

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border border-[#D89A2D]/20
                  w-[180px]
                  h-[180px]

                  sm:w-[240px]
                  sm:h-[240px]

                  lg:w-[320px]
                  lg:h-[320px]
                "
                // style={{
                //   width: "320px",
                //   height: "320px"
                // }}
              />

              {/* SECOND RING */}
              {/* <div
                className="absolute -top-[20px] -left-[20px] w-[290px] h-[290px] rounded-full border border-[#D89A2D]/15"
                style={{
                  animation: "spiralRotate 12s linear infinite reverse"
                }}
              /> */}

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border border-[#D89A2D]/15
                  w-[160px]
                  h-[160px]

                  sm:w-[210px]
                  sm:h-[210px]

                  lg:w-[290px]
                  lg:h-[290px]
                "
                // style={{
                //   width: "290px",
                //   height: "290px"
                // }}
              />

              {/* SHIELD SVG */}
              <svg
                viewBox="0 0 250 260"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  z-20
                "
              >

                <defs>

                  <filter
                    id="shieldGlow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <radialGradient id="innerGlow">
                    <stop offset="0%" stopColor="#D89A2D" stopOpacity=".65"/>
                    <stop offset="50%" stopColor="#D89A2D" stopOpacity=".25"/>
                    <stop offset="100%" stopColor="#D89A2D" stopOpacity="0"/>
                  </radialGradient>

                </defs>

                {/* INNER GLOW */}
                <ellipse
                  cx="125"
                  cy="130"
                  rx="95"
                  ry="105"
                  fill="url(#innerGlow)"
                />

                {/* GOLD SHIELD GLOW */}
                <path
                  d="
                    M125 20
                    C160 45 195 55 215 60
                    V120
                    C215 185 175 225 125 245
                    C75 225 35 185 35 120
                    V60
                    C55 55 90 45 125 20
                  "
                  stroke="#D89A2D"
                  strokeWidth="15"
                  opacity=".45"
                  fill="none"
                  filter="url(#shieldGlow)"
                />

                {/* WHITE SHIELD */}
                <path
                  d="
                    M125 20
                    C160 45 195 55 215 60
                    V120
                    C215 185 175 225 125 245
                    C75 225 35 185 35 120
                    V60
                    C55 55 90 45 125 20
                  "
                  stroke="white"
                  strokeWidth="5"
                  fill="none"
                />

              </svg>

              {/* LOCK IMAGE */}
              <img
                src={privacyLock}
                alt=""
                className="
                  absolute z-30
                  w-[90%]
                  sm:w-[100%]
                  "
                style={{
                  top:"18%",
                  left:"50%",
                  transform:"translateX(-50%)",
                  filter:"drop-shadow(0 0 20px rgba(255,255,255,.35))"
                  }}
              />

          
            </motion.div>
           

          </div>

        </section>
      
      </div>
    </>
  );
}