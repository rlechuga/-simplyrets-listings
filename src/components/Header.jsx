const Header = ({ pageTitle }) => {
  return (
    <header className="sticky w-full top-0 z-10 p-2 sm:p-4 bg-[#F4F4F4]">
      <div className="container mx-auto">
        <h1 className="text-sm font-semibold sm:text-3xl">{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Header;