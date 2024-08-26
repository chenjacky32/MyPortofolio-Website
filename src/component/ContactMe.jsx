function ContactMe() {
  return (
    <>
      <section className="contact-me" id="contact">
        <h4>Contact Me</h4>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3528596447124!2d101.42691875188693!3d0.5328933327647898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5abf340b0b041%3A0xf87ce6c83ba59ff7!2sAmi%20Kopi%20Tiam!5e0!3m2!1sid!2sid!4v1705722683440!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="maps"
          ></iframe>
          <div className="sosmed">
            <div className="contact-detail">
              <h2>Email</h2>
              <div className="detail-icon">
                <img src="/src/icon/gmail.png" alt="" />
                <a href="#">Chenjacky32@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail">
              <h2>Call Me</h2>
              <div className="detail-icon">
                <img src="/src/icon/telephone-call.png" alt="" />
                <a href="#">0813-8159-2832</a>
              </div>
            </div>
            <div className="contact-detail">
              <h2>My Address</h2>
              <div className="detail-icon">
                <img src="/src/icon/map.png" alt="" />
                <a href="">JL. Haji Guru sulaiman Gg. Marbun No 18N </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
