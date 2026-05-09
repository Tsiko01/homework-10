import React from 'react'

export default function Home() {

  const hobbies = [
  {
    name: "MMA",
    desc: "MMA საჭიროა ყველამ უნდა იცოდეს, მუღამში თუ შეხვედი მერე თავის დანებება რთულია",
    img: "https://images.wallpaperscraft.com/image/single/mixed_martial_arts_mma_wrestling_124946_3840x2400.jpg"
  },
  {
    name: "კოდირება",
    desc: "ძალიან სასიამოვნო პროცესია არ გააჩნია არანაირი საზღვარი",
    img: "https://wallpapers.com/images/featured/coding-background-9izlympnd0ovmpli.jpg"
  },
];


   return (
    <div className="page">
      <div className="container">

        {/* სახელი და ფოტო */}
        <section className="hero">
          <div className="hero-text">
            <p className="hero-label">გამარჯობა, მე ვარ</p>
            <h1 className="name">ბა<em>ჩო</em></h1>
            <p className="surname">წიკლაური</p>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, maxWidth: "380px" }}>
              პროგრამისტი და MMA-მებრძოლი. ვცხოვრობ თბილისში
              და ვცდილობ ვისწავლო react.
            </p>
          </div>
          <div className="hero-img-wrap">
            <img
              className="hero-img"
              src="photo.jpg"
              alt="პროფილი"
            />
            <div className="hero-img-deco" />
          </div>
        </section>

       {/* სამი div */}
        <div className="info-row">
          <div className="card">
            <span className="card-icon">👤</span>
            <h1 className="card-label">სახელი</h1>
            <h1 className="card-value">ბაჩო</h1>
          </div>
          <div className="card">
            <span className="card-icon">📛</span>
            <h1 className="card-label">გვარი</h1>
            <h1 className="card-value">წიკლაური</h1>
          </div>
          <div className="card">
            <span className="card-icon">🎂</span>
            <h1 className="card-label">ასაკი</h1>
            <h1 className="card-value">17</h1>
          </div>
        </div>


        {/* ჰობი აქტივობა ... */}
        <h2 className="section-title">ჩემი <span>ჰობი</span></h2>
        <div className="hobbies-grid">
          {hobbies.map((h, i) => (
            <div className="hobby-card" key={i}>{/* თითოეული ჰობისთვის იქმნება ბარათი */}
              <img className="hobby-img" src={h.img} alt={h.name} />
              <div>
                <h1 className="hobby-name">{h.name}</h1>
                <p className="hobby-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Gallery */}

        <div className="footer">
          © 2025 ყველა უფლება არ არის დაცული ბაჩო წიკლაურის მიერ
        </div>
      </div>
    </div>
  );
}
