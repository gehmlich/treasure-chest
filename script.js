window.onload = function () {
  ["x", "y"].forEach(function (axis) {
    var axis_value = getComputedStyle(
      document.documentElement
    ).getPropertyValue(`--rotate-${axis}`);

    document.getElementById(`${axis}-deg`).innerText = axis_value;

    document
      .getElementById(`${axis}-slider`)
      .addEventListener("input", function (ev) {
        var new_val = ev.target.value + "deg";
        document.getElementById(`${axis}-deg`).innerText = new_val;
        document.documentElement.style.setProperty(`--rotate-${axis}`, new_val);
      });
  });

  Array.prototype.forEach.call(
    document.querySelectorAll("#laptop label"),
    function (elm) {
      elm.addEventListener("keypress", function (ev) {
        if (ev.keyCode === 32) {
          var relative_input = document.getElementById(elm.getAttribute("for"));
          relative_input.checked = !relative_input.checked;
        }
      });
    }
  );
};
