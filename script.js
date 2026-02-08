// ✅ Update these with your real details
const PHONE_DISPLAY = "+92 333 3161273";
const PHONE_TEL = "+923333161273";
const WHATSAPP_NUMBER = "923333161273"; // no + sign
const EMAIL = "rabeel_siddiqui@outlook.com";
const CITY = "Karachi, Pakistan";

const waMsg = encodeURIComponent(
  "Assalam o Alaikum, I need a quotation for janitorial/housekeeping supplies. Please guide me on required details (items + quantities + delivery location)."
);
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

function setText(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = value;
}
function setHref(id, value){
  const el = document.getElementById(id);
  if(el) el.href = value;
}

document.addEventListener("DOMContentLoaded", () => {
  setText("year", new Date().getFullYear());
  setText("phoneText", PHONE_DISPLAY);
  setText("emailText", EMAIL);
  setText("cityText", CITY);

  ["waBtn","waBtn2","waBtn3"].forEach(id => setHref(id, waLink));
  setHref("callBtn", `tel:${PHONE_TEL}`);
  setHref("mailBtn", `mailto:${EMAIL}`);

  // Contact form -> opens WhatsApp with message
  const form = document.getElementById("quoteForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("fName")?.value || "").trim();
      const company = (document.getElementById("fCompany")?.value || "").trim();
      const items = (document.getElementById("fItems")?.value || "").trim();
      const loc = (document.getElementById("fLoc")?.value || "").trim();

      const msg = encodeURIComponent(
        `Assalam o Alaikum,\n\nName: ${name}\nCompany: ${company}\nLocation: ${loc}\n\nRequirement:\n${items}\n\nPlease share quotation and delivery timeline.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    });
  }
});

