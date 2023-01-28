const Header = () => {
  return (
    <header>
      <h1 className="text--center">Currency Exchange</h1>

      <div className="container-md text-center">
        <div className="row">
          <div className="col-3 app__logo">
            <img src="./budget.png" alt="Logo" />
          </div>
          <div className="col-sm-9">
            <h2>Wymiana Walut</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
