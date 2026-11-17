// Reads profile.js and builds the page. You do not need to edit this file.
(function () {
  var P = window.PROFILE;
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // Anything still in [BRACKETS], or left empty, is treated as "not filled in yet".
  function ok(v) { return !!v && v.indexOf("[") === -1; }
  function web(v) { return ok(v) && /^https:\/\//i.test(v); }
  function link(id, href, test) {
    var a = $(id);
    if (!a) return;
    if ((test || ok)(href)) a.href = href; else a.style.display = "none";
  }

  // Colors: copy your four color codes from the theme block in profile.js.
  var map = { dark: "--ink", light: "--paper", soft: "--soft", accent: "--accent" };
  Object.keys(map).forEach(function (k) {
    var v = P.theme && P.theme[k];
    if (/^#[0-9a-fA-F]{3,8}$/.test(v || "")) {
      document.documentElement.style.setProperty(map[k], v);
    }
  });

  document.title = P.name + " | Cybersecurity Portfolio";
  var parts = P.name.split(" ");
  $("brand").innerHTML = "<b></b>";
  $("brand").firstChild.textContent = parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
  $("brand").appendChild(document.createTextNode(" | " + P.name));
  $("name").textContent = P.name;
  $("title").textContent = P.title;
  $("tagline").textContent = P.tagline;
  $("location").textContent = P.location;

  var mail = ok(P.links.email) ? "mailto:" + P.links.email : "";

  link("btn-github", P.links.github, web);
  link("btn-email", mail);
  link("c-linkedin", P.links.linkedin, web);

  $("about-h").textContent = P.aboutHeadline;
  (P.about || []).forEach(function (t) { $("about-p").appendChild(el("p", "", t)); });

  (P.projects || []).forEach(function (p) {
    var c = el("article", "card");
    if (ok(p.lane)) c.appendChild(el("div", "lane", p.lane));
    c.appendChild(el("h3", "", p.name));
    c.appendChild(el("p", "", p.summary));
    // Tools and result are optional. Leave them out if you have nothing real to say.
    if (p.tools && p.tools.length) {
      var chips = el("div", "chips");
      p.tools.forEach(function (t) { chips.appendChild(el("span", "chip", t)); });
      c.appendChild(chips);
    }
    if (p.result) c.appendChild(el("p", "", "Result: " + p.result));
    var good = (p.files || []).filter(function (f) { return web(f.url); });
    if (good.length) {
      var box = el("div", "files"), row = el("div", "files-row");
      box.appendChild(el("div", "files-label", "Project files"));
      good.forEach(function (f) {
        var a = el("a", "file", f.label || "Open file");
        a.href = f.url; a.target = "_blank"; a.rel = "noopener";
        row.appendChild(a);
      });
      box.appendChild(row);
      c.appendChild(box);
    }
    $("projects-list").appendChild(c);
  });

  (P.experience || []).forEach(function (j) {
    var d = el("article", "job"), left = el("div");
    left.appendChild(el("h3", "", j.role));
    left.appendChild(el("div", "org", j.org));
    d.appendChild(left);
    d.appendChild(el("div", "dates", j.dates));
    var u = el("ul");
    (j.points || []).forEach(function (x) { u.appendChild(el("li", "", x)); });
    d.appendChild(u);
    $("jobs").appendChild(d);
  });

  (P.certifications || []).forEach(function (c) {
    var li = el("li", "", c.name);
    li.appendChild(el("small", "", c.detail || ""));
    $("certs").appendChild(li);
  });
  (P.education || []).forEach(function (c) {
    var li = el("li", "", c.name + ", " + c.org);
    li.appendChild(el("small", "", c.dates || ""));
    $("edu").appendChild(li);
  });
  (P.skills || []).forEach(function (g) {
    var d = el("div", "skillgroup");
    d.appendChild(el("b", "", g.group));
    d.appendChild(el("span", "", g.items.join(", ")));
    $("skills").appendChild(d);
  });

  // Hide any credentials column you left empty.
  ["certs", "edu", "skills"].forEach(function (id) {
    if (!$(id).children.length) $(id).parentNode.style.display = "none";
  });
})();
