export default function CatEntry({ img, name, phoneNumber, email }) {
  return (
    <article className="contact-card">
      <img src={img} alt=" Photo of a cat" />
      <h3>{name}</h3>
      <div className="info-group">
        <p>📞{phoneNumber}</p>
      </div>
      <div className="info-group">
        <p>📧{email}</p>
      </div>
    </article>
  );
}
