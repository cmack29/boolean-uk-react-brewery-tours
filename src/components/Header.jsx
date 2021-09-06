export default function Header(props) {
  return (
    <header className="main-header">
      <section className="select-state-section">
        <h2>Welcome to Brewery Tours</h2>
        <form
          onSubmit={props.handleStateSubmit}
          id="select-state-form"
          autoComplete="off"
        >
          <label htmlFor="select-state">Which state are you visiting?</label>
          <input
            id="select-state"
            name="select-state"
            type="text"
            onChange={props.handleUserInput}
            value={props.userInput}
          />
        </form>
      </section>
    </header>
  );
}
