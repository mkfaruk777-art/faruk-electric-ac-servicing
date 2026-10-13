export default function Home() {
return (
<main style={{ fontFamily: "Arial, sans-serif", padding: "24px", maxWidth: "900px", margin: "auto" }}>
<header style={{ background: "#073b4c", color: "white", padding: "28px", borderRadius: "14px" }}>
<h1>Faruk Electric & AC Servicing</h1>
<p>বিশ্বস্ত ইলেকট্রিক, এসি ও বাসাবাড়ির মেরামত সেবা</p>
<p>Reliable Home Repair Services Across Bangladesh</p>
</header>

  <h2>আমাদের সেবাসমূহ | Our Services</h2>

  <section style={{ display: "grid", gap: "14px" }}>
    <article style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "10px" }}>
      <h3>⚡ Electric Service</h3>
      <p>বাড়ি ও অফিসের বৈদ্যুতিক মেরামত এবং নতুন সংযোগের কাজ।</p>
    </article>

    <article style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "10px" }}>
      <h3>❄️ AC Servicing</h3>
      <p>এসি সার্ভিসিং, পরিষ্কার, ইনস্টলেশন ও সমস্যা সমাধান।</p>
    </article>

    <article style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "10px" }}>
      <h3>🚰 Plumbing Service</h3>
      <p>পানির লাইন, কল ও পাইপের মেরামত।</p>
    </article>

    <article style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "10px" }}>
      <h3>🏠 Wall Repairing</h3>
      <p>দেয়ালের ফাটল, প্লাস্টার, পুটি, রং ও স্যাঁতসেঁতে দেয়াল মেরামত।</p>
    </article>
  </section>

  <section style={{ background: "#f1f5f9", padding: "20px", marginTop: "22px", borderRadius: "12px" }}>
    <h2>বুকিং করুন | Book a Service</h2>
    <p>ফোন: 01760355096</p>
    <p>
      <a href="tel:01760355096">📞 এখনই ফোন করুন</a>
      {" | "}
      <a href="https://wa.me/8801760355096">WhatsApp-এ বুকিং করুন</a>
    </p>
  </section>

  <footer style={{ marginTop: "24px", textAlign: "center" }}>
    <p>Service Area: All Bangladesh</p>
    <p>© Faruk Electric &amp; AC Servicing</p>
  </footer>
</main>

);
}