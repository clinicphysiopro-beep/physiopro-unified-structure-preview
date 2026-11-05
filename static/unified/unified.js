/* Progressive enhancement only. Pages are fully readable without JS. No third-party calls. */
(function () {
  document.querySelectorAll("[data-filter]").forEach(function (form) {
    var scope = form.closest("main") || document;
    var cards = Array.prototype.slice.call(scope.querySelectorAll(".card"));
    var q = form.querySelector("[data-filter-q]"), t = form.querySelector("[data-filter-t]"), status = form.querySelector("[data-filter-status]");
    function apply() {
      var term = (q && q.value || "").trim().toLowerCase(), topic = t && t.value, n = 0;
      cards.forEach(function (c) {
        var ok = (!term || (c.dataset.search || "").indexOf(term) > -1) && (!topic || (c.dataset.topics || "").split(" ").indexOf(topic) > -1);
        var li = c.closest("li") || c; li.classList.toggle("is-hidden", !ok); if (ok) n++;
      });
      if (status) status.textContent = term || topic ? n + " " + (form.dataset.resultsLabel || "results") : "";
    }
    if (q) q.addEventListener("input", apply); if (t) t.addEventListener("change", apply);
  });
})();
