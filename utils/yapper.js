let interval = null;

const messages = [
  "Yappity yap yap!",
  "YOU CANNOT OUT YAP ME 😤",
  "No way you just said that....💀",
  "Hold on lemme cook...",
  "6 7",
  "Real ones know.",
  "Certified yappin moment.",
  "Shadow Wizard Money Gang, we make it look eazzyy",
  "REAL TRAPAHOLICS",
  "Yapper bot is life.",
  "Stay yappin my friends.",
    "Yap yap yap!",
    "ILATM",
    "Yapper in the house!",
    "Keep calm and yap on.",
    "Yapping all day, every day.",
    "Yapper vibes only.",
    "Yapper bot is life.",
    "Stay yappin my friends.",
    "I vibe coded this bot",
    "Yapper unleashed!",
    "Yapper on the loose!",
    "Yapper mode: activated.",
    "Yapper squad assemble!",
    "Yapper takeover in progress.",
    "Yapper energy detected.",
    "Yapper alert!",
    "Yapper vibes only.",
    "Yapper power engaged.",
"Something came in the mail today.... DEEZ NUTS!",
"Yapper bot at your service!",
"But im not a rapper",
"私はアナが一番好きです",
];

export function startYapping(channel) {
  if (interval) return; // already running

  interval = setInterval(() => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    channel.send(msg);
  }, 5000); // every 2.5 seconds
}

export function stopYapping() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}
