const Header = () => {
  return (
    <header className="bg-white text-gray-900 py-12 shadow-sm border-b border-gray-100">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Password Generator
        </h1>
        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Create strong, secure passwords effortlessly with our advanced
          password generation tool
        </p>
      </div>
    </header>
  );
};

export default Header;
