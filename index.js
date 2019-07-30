var STEM_MESSAGES = ["Mae Jemison is an American engineer, physician and former NASA astronaut. She became the first black woman to travel in space when she served as a mission specialist aboard the Space Shuttle Endeavour.",
"Rosalind Franklin was an English chemist and X-ray crystallographer whose work was central to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite.",
"Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine.",
"Saba Mehrzad came to Kode With Klossy with no coding experience... she was building websites in HTML, CSS, and JavaScript in a week!"];
var HUMAN_RIGHTS_MESSAGES = ["Malala Yousafzai, also known mononymously as Malala, is a Pakistani activist for female education and the youngest Nobel Prize laureate.",
"Maria da Penha is a Brazilian biopharmacist and women human rights defender. She advocates for women rights, particularly against domestic violence. ",
"Gloria Steinem is an American feminist, journalist, and social political activist who became nationally recognized as a leader and a spokeswoman for the American feminist movement in the late 1960s and early 1970s. Steinem was a columnist for New York magazine, and a co-founder of Ms. magazine.",
"Sridula Kunamneni helped convince her principal to allow her school to participate in the National School Walkout. The walkout protested against gun violence in the wake of the Stoneman Douglas High School shooting in February 2018."];
var ARTS_MESSAGES = ["Maya Angelou was an American poet, singer, memoirist, and civil rights activist. She published seven autobiographies, three books of essays, several books of poetry, and is credited with a list of plays, movies, and television shows spanning over 50 years.",
"Frida Kahlo was a Mexican painter known for her many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
"Beyoncé Knowles-Carter is an American singer, actress, songwriter, record producer, director, model, dancer, fashion designer and businesswoman. With the release of Lemonade, Beyoncé became the first and only musical act in Billboard chart history to debut at number one with their first six solo studio albums.",
"Allie Feldman has night rehearsals every day this week from 6:15-9:45!! And that's AFTER she comes home from KWK. Her opening night is this Friday! "];
var COMBINED_MESSAGES = STEM_MESSAGES.concat(HUMAN_RIGHTS_MESSAGES, ARTS_MESSAGES);

var stemButton = $("#stem");
var humanRightsButton = $("#humanRights");
var artsButton = $("#arts");
var randomButton = $("#combined");
var messageText = $("#messageOutput");

stemButton.click(main);
humanRightsButton.click(main);
artsButton.click(main);
randomButton.click(main);

function start() {
  var pressed =
  main(pressed)
}

function selectTopic(topic) {
  if (topic == "stem") {
    var messageArray = STEM_MESSAGES;
  } else if (topic == "humanRights") {
    var messageArray = HUMAN_RIGHTS_MESSAGES;
  } else if (topic == "arts") {
    var messageArray = ARTS_MESSAGES;
  } else if (topic == "combined") {
    var messageArray = COMBINED_MESSAGES;
  }
  return messageArray;
}

function generateMessage(messageArray) {
  var randNum = Math.floor(Math.random() * messageArray.length);
  var message = messageArray[randNum];
  return message;
}

function main() {
  var topic = this.id;
  console.log(topic);
  var messageArray = selectTopic(topic);
  var message = generateMessage(messageArray);
  messageText.text(message);
  console.log(message);
}
