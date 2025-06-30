<script src="engine.js"></script>
<script>
  const allowCheckbox = document.querySelector('input[type="checkbox"]');
  const tagsInput = document.getElementById("tags");
  const notesInput = document.getElementById("notes");
  const saveBtn = document.querySelector("button");

  const currentSource = "nasa.gov"; // You can make this dynamic later

  saveBtn.addEventListener("click", () => {
    if (allowCheckbox.checked) {
      const tags = tagsInput.value.split(",").map(t => t.trim());
      const notes = notesInput.value;
      integrityEngine.allowSource(currentSource, tags, notes);
    } else {
      integrityEngine.disallowSource(currentSource);
    }
    alert("✅ Promethius has updated this source.");
  });
</script>
