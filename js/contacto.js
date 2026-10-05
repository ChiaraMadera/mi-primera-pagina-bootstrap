
const obtenerFeedback = (input) => {
  return input.parentElement.querySelector(".invalid-feedback");
};

/*Muestra error */
const mostrarError = (input, mensaje) => {
  const feedback = obtenerFeedback(input);
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");

  if (feedback) {
    feedback.textContent = mensaje;
  }
};

const limpiarError = (input) => {
  const feedback = obtenerFeedback(input);
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");

  if (feedback) {
    feedback.textContent = "";
  }
};

/* Validar vacio*/
const isEmpty = (value) => value.trim() === "";

/*Validar email */
const isNotEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return !regex.test(value);
};

/*Validad solo letras */
const soloLetras = (value) => {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
  return !regex.test(value);
};


const validarCampo = (input, tipo, minLen) => {
  const value = input.value;

  if (isEmpty(value)) {
    mostrarError(input, "Campo requerido");
    return false;
  }

  if (minLen && value.trim().length < minLen) {
    mostrarError(input, `Debe tener al menos ${minLen} caracteres`);
    return false;
  }

  if (tipo === "texto" && soloLetras(value)) {
    mostrarError(input, "Este campo solo puede contener letras");
    return false;
  }

  if (tipo === "email" && isNotEmail(value)) {
    mostrarError(input, "Email inválido");
    return false;
  }

  limpiarError(input);
  return true;
};

const validarInicio = () => {
  const form = document.querySelector("form");
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const mensaje = document.querySelector("#mensaje");

  if (!form || !nombre || !apellido || !email || !mensaje) {
    return;
  }

  const campos = [
    { input: nombre, tipo: "texto", minLen: 3 },
    { input: apellido, tipo: "texto", minLen: 3 },
    { input: email, tipo: "email" },
    { input: mensaje, tipo: "mensaje", minLen: 10 }
  ];

  campos.forEach(({ input, tipo, minLen}) => {
    input.addEventListener("change", () => {
      validarCampo(input, tipo, minLen);
    });

    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        validarCampo(input, tipo, minLen);
      }
    });
  });

  /*Validar envio */
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitMessageElement = document.querySelector("#submitMessage");

    const resultados = campos.map(({ input, tipo, minLen }) => validarCampo(input, tipo, minLen));
    const formularioValido = resultados.every(Boolean);

    if (!formularioValido) {
      form.classList.add("was-validated");
      return;
    }

    form.classList.remove("was-validated");

    if (submitMessageElement) {
      submitMessageElement.textContent = "¡El formulario de contacto se ha enviado correctamente!";
      submitMessageElement.className = "alert alert-success mt-3 text-center";
    } else {
      alert("¡El formulario de contacto se ha enviado correctamente!");
    }

    form.reset();
    campos.forEach(({ input }) => input.classList.remove("is-valid", "is-invalid"));
  });
};

document.addEventListener("DOMContentLoaded", validarInicio);