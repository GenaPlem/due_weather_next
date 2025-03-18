import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className="hidden_heading">Weather Forecast App</h1>
      <div className="weather glassmorphism">
        <label htmlFor="search" className="search__label">
          <input
            className="weather__search glassmorphism"
            type="text"
            name="search"
            id="search"
            placeholder="Search your location"
          />
        </label>

        <button
          type="button"
          className="search__button"
          id="search_btn"
          aria-label="Button to start searching"
        >
          <Image
            src="/assets/images/magnifying.svg"
            alt="search icon"
            width={24}
            height={24}
            priority
          />
        </button>

        <button
          className="weather__location glassmorphism"
          type="button"
          id="location"
          title="Use your current location"
        >
          <Image
            src="/assets/images/location-arrow-solid.svg"
            alt="location arrow"
            width={24}
            height={24}
            priority
          />
        </button>

        <div className="error" id="error">
          At least 3 symbols
        </div>
        <div className="response__error" id="response__error">
          Error: There is some error
        </div>
        <div className="success" id="success">
          Success: There is some success
        </div>

        <section id="main_content">
          <h2 className="hidden_heading">Current day weather</h2>
        </section>
      </div>
    </>
  );
}
