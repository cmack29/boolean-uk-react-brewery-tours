export default function BreweriesList(props) {
  return (
    <article>
      <ul className="breweries-list">
        {props.breweriesData.map((breweryData) => (
          <li>
            <h2>{breweryData.name}</h2>
            <div className="type">{breweryData.brewery_type}</div>
            <section className="address">
              <h3>Address:</h3>
              <p>{breweryData.street}</p>
              <p>
                <strong>{breweryData.city},</strong>
              </p>
              <p>
                <strong>{breweryData.postal_code}</strong>
              </p>
            </section>
            <section className="phone">
              <h3>Phone:</h3>
              <p>{breweryData.phone}</p>
            </section>
            <section className="booking">
              <button>Book a tour</button>
            </section>
            {/* <section className="link">
              <a href={breweryData.website_url} target="_blank">
                Visit Website
              </a>
            </section> */}
          </li>
        ))}
      </ul>
    </article>
  );
}
