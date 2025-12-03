document.getElementById("formRegister").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({name, email, password})
    });
    const data = await response.json();
    if(response.ok){
        alert(data.message); // mensaje exitoso CUANDO REGISTRO UN USUARIO
        document.getElementById("formRegister").reset();// LIMPIA EL FORMULARIO 
        window.location.href = "/pages/login.html"; //REDIRIGE A LA PAGINA DE LOGIN 
    } else {
        alert(data.message || "Error al registrar");
    }
});
