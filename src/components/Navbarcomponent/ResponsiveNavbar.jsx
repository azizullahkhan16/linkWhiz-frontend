

function ResponsiveNavbar() {
  return (
    <div className="flex items-center justify-between absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
      {/* Logo on the Left */}
      <img className="w-[190px]" src="/images/logo.svg" alt="Logo" />

      {/* Hamburger Icon on the Right */}
      <div className="flex flex-col justify-between h-6 w-12 px-2 cursor-pointer">
        <span className="block h-1 w-full bg-white rounded"></span>
        <span className="block h-1 w-full bg-white rounded"></span>
        <span className="block h-1 w-full bg-white rounded"></span>
      </div>
    </div>

  )
}

export default ResponsiveNavbar