
        function AccionMenu() {

            const menuLateral = document.getElementById("menu-lateral");
            menuLateral.classList.toggle("Oculto");
            menuLateral.classList.toggle("Abierto");

            const iconoMenu = document.getElementsByClassName("boton-menu")[0];
            iconoMenu.classList.toggle("ocultoB");
            iconoMenu.classList.toggle("abiertoB");
            
            const contenidoPrincipal = document.getElementById("contenido-principal");
            contenidoPrincipal.classList.toggle("normal");
            contenidoPrincipal.classList.toggle("expandido");





        }
        const contenedor = document.querySelector(".contenedor");
        const inputArchivos = document.getElementById("inputArchivos");


        let contadorArchivos = 0;


        inputArchivos.addEventListener("change", function () {

            const archivos = Array.from(inputArchivos.files);

            archivos.forEach(function (archivo) {

                contadorArchivos++;
   
                const bloque = document.createElement("div");

                bloque.id = `archivo_id${contadorArchivos}`;
                bloque.classList.add("item_archivo");
                bloque.classList.add("item");

                const titulo = document.createElement("h1");

                titulo.textContent = archivo.name;

                const etiquetaNit = document.createElement("label");

                etiquetaNit.textContent = "Nit: ";
                etiquetaNit.id = "etiquetaNit";

                etiquetaNit.htmlFor =
                    `nit_id${contadorArchivos}`;

                const nit = document.createElement("input");

                nit.type = "text";
                nit.id = `nit_id${contadorArchivos}`;
                nit.placeholder = "Escribe el Nit";


                const etiquetaTipo = document.createElement("label");
                etiquetaTipo.textContent = "Tipo Donante: ";
                etiquetaTipo.id = "etiquetaTipo";



                const tipo = document.createElement("select");
                tipo.id = "tipo_id";

                const opciones = [
                {texto:"Beneficiarios", valor:"Beneficiarios"},
                {texto:"Donantes", valor:"Donantes"}
                ];

                opciones.forEach(opcion => {
                    const Elemento = document.createElement("option");

                    Elemento.textContent = opcion.texto;
                    Elemento.value = opcion.valor;

                    tipo.appendChild(Elemento);
                });


                const etiquetaProceso = document.createElement("label");

                etiquetaProceso.textContent = "Proceso: ";
                etiquetaProceso.id = "etiquetaProceso";

                const proceso = document.createElement("select");
                proceso.id = "proceso_id";
                const opcionesProceso = [
                {texto:"Actualización", valor:"Actualización"},
                {texto:"Ingreso", valor:"Ingreso"}
                ];

                 opcionesProceso.forEach(opcion => {
                    const ElementoP = document.createElement("option");

                    ElementoP.textContent = opcion.texto;
                    ElementoP.value = opcion.valor;

                    proceso.appendChild(ElementoP);
                });

                
                const botonEliminar = document.createElement("button");
                const icono= document.createElement("i");

                icono.classList.add("fas");
                icono.classList.add("fa-trash");

                botonEliminar.type = "button";
                botonEliminar.appendChild(icono);
                botonEliminar.classList.add("eliminar");
                botonEliminar.addEventListener("click", function () {

                    
                    bloque.remove();

                });

                const botonGuardar = document.createElement("button");
                
                botonGuardar.type = "button";
                botonGuardar.textContent = "Guardar";
                botonGuardar.classList.add("guardar");

                botonGuardar.addEventListener("click", function () {

                    bloque.remove();
                    alert("Archivo guardado correctamente");

                });



                bloque.appendChild(titulo);
                bloque.appendChild(document.createElement("br"));
                bloque.appendChild(etiquetaNit);
                bloque.appendChild(nit);
                bloque.appendChild(document.createElement("br"));
                bloque.appendChild(etiquetaTipo);
                bloque.appendChild(tipo);
                bloque.appendChild(etiquetaProceso);
                bloque.appendChild(proceso);
                bloque.appendChild(botonEliminar);
                bloque.appendChild(botonGuardar);

                contenedor.appendChild(bloque);

            });

            inputArchivos.value = "";

        });