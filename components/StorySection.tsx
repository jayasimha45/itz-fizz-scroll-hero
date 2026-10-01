export function StorySection() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="story-content">
        <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" /> THE SPARK BEHIND THE WHEEL</p>
        <h2 id="story-title">Not just a way<br />to get <em>there.</em></h2>
        <p className="story-text">
          A little electricity. A lot of personality. Itz Fizz is made for the moments that happen between here and wherever you’re going.
        </p>
        <a className="story-link" href="#top">MEET YOUR NEW FAVORITE ROAD <span aria-hidden="true">↗</span></a>
      </div>
      <p className="story-index" aria-hidden="true">01 <span>/</span> THE FEELING</p>
    </section>
  );
}
