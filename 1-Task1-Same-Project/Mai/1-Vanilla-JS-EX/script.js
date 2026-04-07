function changeContent(section) {
  const content = document.getElementById("content");

  if (section === "home") {
    content.innerHTML = "<h2>Home</h2><p>This is home page</p>";
  } else if (section === "about") {
    content.innerHTML = "<h2>About</h2><p>About us content</p>";
  } else if (section === "contact") {
    content.innerHTML = "<h2>Contact</h2><p>Contact us here</p>";
  }
}