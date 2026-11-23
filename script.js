// UNIVERSAL CLUB — Telegram arizasi
// Arizalar shu Telegram username'ga yo'naltiriladi:
const TELEGRAM_USERNAME = "isroil_ck";

const groupDetails = {
  "Boks Kids": "Dushanba, Chorshanba, Juma | 18:00–19:30",
  "Boks katta guruh": "Dushanba, Chorshanba, Juma | 20:00–21:30",
  "Turon katta guruh": "Seshanba, Payshanba, Shanba | 16:30–18:00",
  "Turon Kids": "Seshanba, Payshanba, Shanba | 18:00–19:30"
};

const ageSelect = document.getElementById("age");
for (let age = 7; age <= 17; age++) {
  const option = document.createElement("option");
  option.value = `${age} yosh`;
  option.textContent = `${age} yosh`;
  ageSelect.appendChild(option);
}
const adult = document.createElement("option");
adult.value = "18+";
adult.textContent = "18+";
ageSelect.appendChild(adult);

document.getElementById("year").textContent = new Date().getFullYear();

const groupSelect = document.getElementById("group");
const groupHint = document.getElementById("groupHint");
groupSelect.addEventListener("change", () => {
  const group = groupSelect.value;
  groupHint.textContent = groupDetails[group] || "";
});

document.getElementById("registrationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const group = groupSelect.value;
  const age = ageSelect.value;
  const phone = document.getElementById("phone").value.trim();
  const error = document.getElementById("errorMessage");
  error.textContent = "";

  if (!group || !age || !phone) {
    error.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
    return;
  }

  const message = [
    "Assalomu alaykum! UNIVERSAL CLUB mashg‘ulotiga yozilmoqchiman.",
    "",
    `Guruh: ${group}`,
    `Jadval: ${groupDetails[group]}`,
    `Yosh: ${age}`,
    `Telefon: ${phone}`
  ].join("\n");

  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.location.href = telegramUrl;
});
