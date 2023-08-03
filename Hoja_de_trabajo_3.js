// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//Validación del campo teléfono para llevar sólo números.
    // Obtener el campo de entrada y el elemento del mensaje de error
  const inputField = document.getElementById("telefono");
  const errorElement = document.querySelector("#telefono + .invalid-feedback");

  // Agregar un evento de escucha para la entrada de teclado
  inputField.addEventListener("keyup", function() {
    // Obtener el valor del campo de entrada
    const inputValue = inputField.value.trim();
    
    // Expresión regular para verificar si solo contiene números
    const regex = /^[0-9]+$/;
    
    // Verificar si el valor coincide con la expresión regular
    if (regex.test(inputValue) && inputValue.length >= 8) {
      // El valor es válido, quitar el mensaje de error y cambiar el estilo
      inputField.classList.remove("is-invalid");
      errorElement.style.display = "none";
    } else {
      // El valor no es válido, mostrar el mensaje de error y cambiar el estilo
      inputField.classList.add("is-invalid");
      errorElement.style.display = "block";
    }
  });

 //validar formato de correo electrónico
  // Obtener el campo de entrada y el elemento del mensaje de error
  const inputField_correo = document.getElementById("correo");
  const errorElement_correo = document.querySelector("#correo + .invalid-feedback");

  // Agregar un evento de escucha para la entrada de teclado
  inputField_correo.addEventListener("keyup", function() {
    // Obtener el valor del campo de entrada
    const inputValue = inputField_correo.value.trim();
    
    // Expresión regular para verificar si el formato del correo es válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar si el valor coincide con la expresión regular
    if (emailRegex.test(inputValue)) {
      // El valor es un correo válido, quitar el mensaje de error y cambiar el estilo
      inputField_correo.classList.remove("is-invalid");
      errorElement_correo.style.display = "none";
    } else {
      // El valor no es un correo válido, mostrar el mensaje de error y cambiar el estilo
      inputField_correo.classList.add("is-invalid");
      errorElement_correo.style.display = "block";
    }
  });

//MOstrar formulario

  // Capturar el formulario y el recuadro de información
  const formulario = document.querySelector('.needs-validation');
  const recuadroInfo = document.getElementById('infoRecuadro');

  // Agregar el evento de envío del formulario
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validar el formulario
    if (formulario.checkValidity() === false) {
      event.stopPropagation();
      formulario.classList.add('was-validated');
      return;
    }

    // Capturar los valores de los campos del formulario
    const nombres = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellido').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const noDocu = document.getElementById('numeroDocumento').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const pertenencia = document.getElementById('pertenencia').value;
    const solicitud = document.getElementById('solicitud').value;

    // Mostrar la información en el recuadro al final del formulario
    recuadroInfo.innerHTML = `
      <h3>Información ingresada:</h3>
      <p><strong>Nombre(s):</strong> ${nombres}</p>
      <p><strong>Apellido(s):</strong> ${apellidos}</p>
      <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
      <p><strong>Documento:</strong> ${noDocu}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Pertenencia Sociolingüistica:</strong> ${pertenencia}</p>
      <p><strong>Solicitud:</strong> ${solicitud}</p>
    `;
  });



