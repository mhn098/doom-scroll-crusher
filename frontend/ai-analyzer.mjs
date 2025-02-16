
import { GoogleGenerativeAI } from "https://cdn.skypack.dev/@google/generative-ai";

const genAI = new GoogleGenerativeAI("API Key");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const videos = "Video 1: a bartender is talking about rude customers, Video 2: a compelation of short cat videos, Video 3: some one reads a story about a red flag boyfriend.";

document.getElementById("myButton").onclick = function () {
  getOutput();
};

async function getOutput() {
  const textarea = document.getElementById('myTextarea');
  const content = textarea.value;
  let aiVideoSugg = await getAiVideo(content);
  let aiVideo = await getVideoLink(content);
  let aiSuggestion = document.getElementById('aiSuggestion');
  let video = document.getElementById('video');
  aiSuggestion.innerHTML = aiVideoSugg
  video.innerHTML = aiVideo
}

async function getAiVideo(videos) {
  let prompt = "Analyze the descriptions of these videos that I have watched and suggest a video that would help me stop watching short videos. " + videos + " Now create a video that helps me stop watchign short form videos."
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}

async function getVideoLink(videos) {
  let prompt = "Analyze the descriptions of these videos that I have watched and return a link to a video that would help me stop watching short videos. " + videos + " Now return a link to a video that helps me stop watchign short form videos."
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}

// getAiVideo(videos);
// getVideoLink(videos);
