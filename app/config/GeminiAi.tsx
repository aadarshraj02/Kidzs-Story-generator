/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 4-7 years kids, Educational story and all images in papwr cut style: sttory of boy and Magic Scool, give me 5 chapter, whith detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story_name": "The Boy and the Magic School",\n  "cover_image": {\n    "description": "A paper cut style image of a boy, wide-eyed with wonder, standing in front of a brightly colored, whimsical school building. The school is bursting with magical elements like swirling stars, rainbow-colored windows, and a floating door.",\n    "elements": ["boy", "school building", "stars", "rainbow windows", "floating door"],\n    "colors": ["bright blue", "yellow", "pink", "green", "purple"]\n  },\n  "chapters": [\n    {\n      "chapter_title": "The Boy Who Loved Stars",\n      "description": "A young boy named Leo, with messy brown hair and sparkling eyes, loves to gaze at the stars every night. He dreams of learning their secrets and exploring the vast universe.",\n      "image": {\n        "description": "A paper cut style image of Leo, lying in a field under a night sky full of stars. He has a telescope pointed at the sky, his face filled with wonder. ",\n        "elements": ["Leo", "field", "stars", "telescope"],\n        "colors": ["dark blue", "black", "yellow", "white"]\n      }\n    },\n    {\n      "chapter_title": "The Mysterious Invitation",\n      "description": "One day, Leo receives a strange, shimmering letter that seems to float through the air. It invites him to a magical school for star explorers. He can\'t believe his eyes!",\n      "image": {\n        "description": "A paper cut style image of Leo excitedly holding the shimmering letter. The letter glows with stardust and has a magical seal with a star on it.",\n        "elements": ["Leo", "letter", "stardust", "star seal"],\n        "colors": ["gold", "blue", "purple", "white"]\n      }\n    },\n    {\n      "chapter_title": "A Journey Through the Clouds",\n      "description": "Leo follows the letter\'s instructions and climbs a beanstalk that magically grows towards the clouds. He travels through the sky, past fluffy cotton clouds, and finally reaches the magical school.",\n      "image": {\n        "description": "A paper cut style image of Leo climbing a beanstalk that stretches into the clouds. He sees fluffy cotton clouds and a bright, colorful school building in the distance.",\n        "elements": ["Leo", "beanstalk", "clouds", "school building"],\n        "colors": ["green", "white", "pink", "blue"]\n      }\n    },\n    {\n      "chapter_title": "Adventures in the Magic School",\n      "description": "Leo meets other students who are also star enthusiasts. Together, they learn about constellations, explore planets, and even fly on magical, star-shaped spaceships.",\n      "image": {\n        "description": "A paper cut style image of Leo and other students in a classroom with a giant star chart on the wall. They are learning about constellations, surrounded by glowing stars and planets.",\n        "elements": ["Leo", "students", "star chart", "stars", "planets"],\n        "colors": ["blue", "yellow", "green", "purple"]\n      }\n    },\n    {\n      "chapter_title": "The Secret of the Stars",\n      "description": "Leo discovers that the stars hold a secret message about kindness and friendship. He shares this message with his new friends and they all promise to spread the message throughout the universe.",\n      "image": {\n        "description": "A paper cut style image of Leo and his friends standing on a star-shaped platform, holding hands and looking up at the night sky. The stars twinkle and form the words \'Kindness\' and \'Friendship\' in the sky.",\n        "elements": ["Leo", "friends", "star platform", "stars", "words \'Kindness\' and \'Friendship\'"],\n        "colors": ["blue", "white", "yellow", "orange"]\n      }\n    }\n  ]\n}\n``` \n',
        },
      ],
    },
  ],
});
