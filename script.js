const PASSWORD = "UtkarshIsKing";

// LOGIN FUNCTION
function login() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("panel").classList.remove("hidden");
  } else {
    alert("Wrong password");
  }
}

// IMAGE ADD FUNCTION
const gallery = document.getElementById("gallery");

function addImage() {
  const title = document.getElementById("title").value;
  const id = document.getElementById("fileid").value;

  if (!title || !id) {
    alert("Fill all fields");
    return;
  }

  const imgURL = `https://drive.google.com/uc?id=${id}`;
  const viewURL = `https://drive.google.com/file/d/${id}/view`;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <a href="${viewURL}" target="_blank">
      <img src="${imgURL}">
      <div class="title">${title}</div>
    </a>
  `;

  gallery.appendChild(card);

  document.getElementById("title").value = "";
  document.getElementById("fileid").value = "";
}
