//your JS code here. If required.
function btn() {
  let updatePtag = document.getElementById("status");
  let head = document.createElement("h1");
  updatePtag.innerText = "Entered Metaverse";
  head.innerHTML = updatePtag.innerHTML;
  updatePtag.parentNode.replaceChild(head, updatePtag);
  console.log(updatePtag);
}
