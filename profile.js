// ============================================================
//  EDIT ONLY THIS FILE. Your whole website is built from it.
//  Replace every [BRACKETED] prompt with your own words, or delete that line.
//  A bracketed link hides its button until you fix it.
//  Only list what is true and what you can explain in an interview.
// ============================================================
window.PROFILE = {
  // ---- COLORS: the site is black and white until you change these four codes ----
  // Each code is a hex color. Keep the # and the quotation marks.
  theme: {
    dark: "#000000",    // dark sections and main text
    light: "#FFFFFF",   // light sections, and text on dark sections
    soft: "#F2F2F2",    // light panels and the contact section
    accent: "#FFFFFF"   // highlights on dark sections: buttons, labels, borders
  },

  name: "[Your Full Name]",
  title: "[Target Job Title] | [Niche]",
  location: "[City, State]",
  tagline: "",                      // optional: one sentence under your title. Empty hides it.
  links: {
    email: "",                      // leave empty to hide your email (recommended)
    github: "",                     // optional: https://github.com/your-username
    linkedin: "https://www.linkedin.com/in/[your-profile]"   // powers the Connect button
  },

  aboutHeadline: "[A short headline about your focus.]",
  about: [
    "[Paragraph 1: your current role, and one result you achieved in it.]",
    "[Paragraph 2: what else you do, and what you are working toward.]"
  ],

  // ---- PROOF OF SKILL: one card per project. Three strong projects beat ten weak ones.
  // To add a project, copy a whole block from { to }, and paste it below with a comma.
  // Under "files", add share links to your assignments from Google Drive or OneDrive.
  // Every link must be set to "Anyone with the link" and "Viewer". Test it in a private window.
  // "lane", "tools" and "result" are optional. Delete a line you have nothing real for.
  projects: [
    {
      name: "[Lab Title]",
      lane: "",
      summary: "[One or two sentences: what you built or wrote, and what it covers.]",
      tools: ["[Tool(s) you used]"],
      files: [
        { label: "[Lab Report]", url: "https://[your-google-drive-or-onedrive-link]" }
      ]
    }
  ],

  experience: [
    {
      role: "[Job Title]",
      org: "[Employer]",
      dates: "[Years]",
      points: ["[List the task(s) you did]"]
    }
  ],
  certifications: [
    { name: "[Certification Name | Year]" }
  ],
  skills: [
    {
      group: "Areas of expertise",
      items: ["[Skill]", "[Skill]", "[Skill]", "[Skill]", "[Skill]", "[Skill]"]
    }
  ]
};
