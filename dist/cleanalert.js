/*!
 * Bootstrap Clean Alert Vanilla -http://felipetravassos.com/
 * Version - 0.8
 * by Felipe Travassos
 */

var jsUrl = document.currentScript ? document.currentScript.src : "";
var libUrl = jsUrl.substring(0, jsUrl.lastIndexOf("/") + 1);

function callalert(title, text, type, btntext, btntype, size, bg) {
  var typeprit = type;

  var html = '<div class="modal-dialog modal-' + size + '">';
  html += '<div class="modal-content">';
  var timestamp = new Date().getTime();
  html += '<div class="modal-body text-center ">';
  html +=
    '<div class="animation" style="background-image: url(' +
    libUrl +
    "animations/" +
    type +
    ".svg?v=" +
    timestamp +
    ')"></div>';

  html += '<h5 class="na-title text-' + typeprit + '">' + title + "</h5>";
  html += '<div class="na-text text-' + textcolor + '">' + text + "</div>";

  html += "</div>";
  html += '<div class="modal-footer d-block text-center">';

  html += '<span data-bs-dismiss="modal" class="btn px-3 btn-' + btntype + '"';
  html += " >" + btntext;
  html += "</span>";

  html += "</div>"; // footer
  html += "</div>"; // content
  html += "</div>"; // dialog

  document.getElementById("modalWindow").innerHTML = html;

  var bgclean = "";
  var textcolor = "secondary";

  var myModal = new bootstrap.Modal(document.getElementById("modalWindow"), {});
  myModal.show(document.getElementById("modalWindow"));
}

window.onload = function () {
  // modalWindow

  var modalWindow = document.createElement("div");

  modalWindow.setAttribute("id", "modalWindow");
  modalWindow.setAttribute("role", "dialog");
  modalWindow.setAttribute("aria-labelledby", "confirm-modal");
  modalWindow.setAttribute("aria-hidden", "true");
  modalWindow.setAttribute("tabindex", "-1");
  modalWindow.setAttribute("class", "modal fade");

  document.body.appendChild(modalWindow);

  document.getElementById("modalWindow").innerHTML = "modalWindow";

  var clenalertbtn = document.querySelectorAll(".clenalertbtn");

  for (var z = 0; z < clenalertbtn.length; z++) {
    var elem = clenalertbtn[z];
    elem.onclick = function () {
      var title = this.dataset.title,
        text = this.dataset.text,
        type = this.dataset.type,
        btntext = this.dataset.btntext,
        btntype = this.dataset.btntype,
        size = this.dataset.size,
        bg = this.dataset.bg;

      if (!type) {
        type = "info";
      }

      if (!title) {
        title = "";
      }

      if (!text) {
        text = "";
      }

      if (!btntext) {
        btntext = "OK";
      }
      if (!btntype) {
        btntype = type;
      }

      if (!size) {
        size = "md";
      }

      if (!bg) {
        bg = "white";
      }

      callalert(title, text, type, btntext, btntype, size, bg);

      return false;
    };
  }
};
