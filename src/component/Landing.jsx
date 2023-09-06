import NavbarLogin from "./NavbarLogin";

function Landing() {
  return (
    <>
      <NavbarLogin />

      <div
        className="container-fluid mt-5 ms-4"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="presentation"
          style={{ maxWidth: 500, marginTop: 100, fontSize: 18 }}
        >
          <p>
            Welcome to our website, your ultimate destination for a vast archive
            of films, TV shows, and anime! Discover an extensive collection of
            captivating content and immerse yourself in the world of
            entertainment. What sets us apart is our interactive
            community-driven features.
            <br />
            <br />
            Sign up today and create your personalized profile, where you can
            keep track of the shows and movies you've watched. Our intuitive
            tracking system allows you to easily mark the ones you've seen,
            helping you curate your own personal library..
          </p>
        </div>

        <div className="icon-list ms-0 me-5" style={{ marginTop: 100 }}>
          <div className="icon-item">
            <img src="/arrow-down-thin-svgrepo-com.svg" alt="arrow-down" />
            <p>TRACK shows and movies that you love</p>
          </div>

          <div className="icon-item">
            <img src="/search-svgrepo-com.svg" alt="search" />
            <p>DISCOVER what to watch next</p>
          </div>

          <div className="icon-item">
            <img src="/chat-svgrepo-com.svg" alt="chat" />
            <p>COMMENT on shows with other members</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
