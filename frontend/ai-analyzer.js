
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("YOUR TOKEN");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "Analyze the descriptions of these videos that I have watched and suggest a video that would help me stop watching short videos. Video 1: a bartender is talking about rude customers, Video 2: a compelation of short cat videos, Video 3: some one reads a story about a red flag boyfriend. Now create a video that helps me stop watchign short form videos.";

async function callAi(p) {
  const result = await model.generateContent(p);
  // console.log(result.response.text());
  return result.response.text();
}

callAi(prompt);
