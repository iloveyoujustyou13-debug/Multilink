// 25 CATEGORY DATA (SHORT CLEAN VERSION)
const data = {

gov: ["https://india.gov.in","https://pmindia.gov.in","https://uidai.gov.in","https://incometax.gov.in","https://rbi.org.in"],
edu: ["https://ugc.ac.in","https://cbse.gov.in","https://ncert.nic.in","https://ssc.nic.in","https://upsc.gov.in"],
bank: ["https://sbi.co.in","https://hdfcbank.com","https://icicibank.com","https://paytm.com","https://phonepe.com"],
global: ["https://google.com","https://youtube.com","https://facebook.com","https://instagram.com","https://github.com"],
news: ["https://bbc.com","https://cnn.com","https://reuters.com","https://thehindu.com","https://ndtv.com"],
tools: ["https://translate.google.com","https://drive.google.com","https://docs.google.com","https://ilovepdf.com","https://smallpdf.com"],
health: ["https://who.int","https://mayoclinic.org","https://webmd.com","https://1mg.com","https://practo.com"],
travel: ["https://irctc.co.in","https://makemytrip.com","https://booking.com","https://goibibo.com","https://redbus.in"],
jobs: ["https://naukri.com","https://indeed.com","https://linkedin.com/jobs","https://internshala.com","https://shine.com"],
shopping: ["https://amazon.in","https://flipkart.com","https://myntra.com","https://meesho.com","https://ajio.com"],
social: ["https://facebook.com","https://instagram.com","https://twitter.com","https://linkedin.com","https://telegram.org"],
entertainment: ["https://youtube.com","https://netflix.com","https://hotstar.com","https://spotify.com","https://zee5.com"],
tech: ["https://github.com","https://stackoverflow.com","https://openai.com","https://canva.com","https://figma.com"],
science: ["https://nasa.gov","https://nature.com","https://arxiv.org","https://ieee.org","https://nationalgeographic.com"],
sports: ["https://espn.com","https://cricbuzz.com","https://icc-cricket.com","https://fifa.com","https://nba.com"],
finance: ["https://moneycontrol.com","https://zerodha.com","https://groww.in","https://coinmarketcap.com","https://nseindia.com"],
ai: ["https://openai.com","https://chatgpt.com","https://claude.ai","https://gemini.google.com","https://perplexity.ai"],
coding: ["https://github.com","https://leetcode.com","https://geeksforgeeks.org","https://hackerrank.com","https://codeforces.com"],
email: ["https://gmail.com","https://outlook.com","https://yahoo.com","https://protonmail.com","https://zoho.com"],
productivity: ["https://notion.so","https://trello.com","https://asana.com","https://slack.com","https://zoom.us"],
legal: ["https://supremecourtofindia.nic.in","https://indiankanoon.org","https://lawmin.gov.in","https://ecourts.gov.in","https://rti.gov.in"],
utilities: ["https://weather.com","https://speedtest.net","https://qr-code-generator.com","https://convertio.co","https://calculator.net"]

};

let current = "all";

// create buttons
const catBox = document.getElementById("categories");

const categories = Object.keys(data);

categories.forEach(cat=>{
  let btn = document.createElement("button");
  btn.innerText = cat.toUpperCase();
  btn.onclick = ()=>show(cat);
  catBox.appendChild(btn);
});

// show links
function show(cat){
  current = cat;
  render(data[cat]);
}

// render function
function render(list){
  const box = document.getElementById("links");
  box.innerHTML = "";

  list.forEach(l=>{
    let a = document.createElement("a");
    a.href = l;
    a.target = "_blank";
    a.innerText = l;
    box.appendChild(a);
  });
}

// search
function searchLinks(){
  let val = document.getElementById("search").value.toLowerCase();

  let list = [];

  if(current === "all"){
    Object.values(data).forEach(arr=>list.push(...arr));
  } else {
    list = data[current];
  }

  let filtered = list.filter(l=>l.toLowerCase().includes(val));

  render(filtered);
}

// default load
let all = [];
Object.values(data).forEach(arr=>all.push(...arr));
render(all);
