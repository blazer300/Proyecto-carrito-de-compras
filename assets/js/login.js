//Datos de inicio de sesion
//user= Ariel
//pass=1234

function login(){
      let user , pass
    user = document.getElementById("usuario").value
    pass = document.getElementById("contraseña").value

   if(user == "Ariel" && pass == "1234"){

        window.location = "index.html"
        alert("Bienvenido a Joyeria Avant Ariel Santos")
   }
   else{
    alert("Usuario incorrecto")

   }

}