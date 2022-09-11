const params = new URLSearchParams(document.location.search);
const id = params.get("id");
const sa = fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then((response) => response.json())
  .then((data) => addData(data));

function addData(information) {
  information.forEach((info) => {
    const ul = document.querySelector("ul");
    const li0 = document.createElement("li");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    li1.classList.add("li1");
    li2.classList.add("li1");
    li3.classList.add("li1");
    li4.classList.add("li1");
    li0.innerHTML = "{\n";
    li5.innerHTML = "}";
    li1.innerHTML = "postId: " + info.postId;
    li2.innerHTML = "id: " + info.id;
    li3.innerHTML = "title: " + info.title;
    li4.innerHTML = "body:" + info.body;
    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
  });
}
