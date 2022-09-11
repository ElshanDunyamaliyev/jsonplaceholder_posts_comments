const params = new URLSearchParams(document.location.search);
const id = params.get("id");
const sa = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((data) => addData(data));

function addData(data) {
  const ul = document.querySelector("ul");
  const li0 = document.createElement("li");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  const a = document.createElement("a");

  li1.classList.add("li1");
  li2.classList.add("li1");
  li3.classList.add("li1");
  li4.classList.add("li1");
  li0.innerHTML = "{\n";
  li5.innerHTML = "}";
  li1.innerHTML = "userId: " + data.userId;
  li2.innerHTML = "id: " + data.id;
  li3.innerHTML = "title: " + data.title;
  li4.innerHTML = "body:" + data.body;
  a.setAttribute("href", `http://127.0.0.1:5500/comments/?id=${id}`);
  a.appendChild(li1);
  ul.appendChild(li0);
  ul.appendChild(a);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(li5);
}
