// ✅ EDIT THESE VALUES
const PHONE_DISPLAY = "+92-XXX-XXXXXXX";
const PHONE_TEL = "+92XXXXXXXXXXX";
const WHATSAPP_NUMBER = "92XXXXXXXXXXX"; // countrycode+number, no + sign
const EMAIL = "your.email@domain.com";

const msg = encodeURIComponent(
  "Assalam o Alaikum, I need a monthly supply quote for housekeeping/general items. Please guide on required details."
);

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("phoneText").textContent = PHONE_DISPLAY;

["whatsappBtn","whatsappBtn2","whatsappBtn3"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = waLink;
});

const callBtn = document.getElementById("callBtn");
if(callBtn) callBtn.href = `tel:${PHONE_TEL}`;

const emailBtn = document.getElementById("emailBtn");
if(emailBtn) emailBtn.href = `mailto:${EMAIL}`;
