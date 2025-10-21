<script>
    const button = document.getElementById("letterButton");
    const letter = document.getElementById("lettera");

  button.addEventListener("click", () => {
        letter.classList.toggle("show"); // mostra/nasconde
  });
</script>