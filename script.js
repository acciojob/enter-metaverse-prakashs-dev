//your JS code here. If required.
function btn() {
  let updatePtag = document.querySelector('#status');
  let head = document.createElement("h1");
  head.innerHTML = updatePtag.innerHTML;
  head.id = updatePtag.id;
  head.innerText = "Entered Metaverse";
  updatePtag.parentNode.replaceChild(head, updatePtag);
  console.log(updatePtag);
}
