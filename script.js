function volverInicio() {
    document.getElementById("contenido-servicio").classList.add("d-none");
    document.getElementById("pantalla-inicial").classList.remove("d-none");
}


let servicioActual = "";

function mostrarServicio(servicio) {
    servicioActual = servicio;
    const contenedor = document.getElementById("contenido-servicio");
    const pantallaInicial = document.getElementById("pantalla-inicial");

    pantallaInicial.classList.add("d-none");
    contenedor.classList.remove("d-none");

    let contenido = "";
    let titulo = "";
    let descripcion = "";
    let imagen = "";
    let items = [];

    switch (servicio) {
        case "contabilidad":
            titulo = "Contabilidad";
            descripcion = "para tu negocio!";
            imagen = "img/primer-plano-de-mujer-de-negocios-ocupada.jpg";
            items = [
                "Asesoría sobre manejo de ingresos y egresos.",
                "Ayuda con registros contables básicos.",
                "Capacitación en herramientas como Excel o software gratuito.",
                "Preparación para obligaciones fiscales."
            ];
            break;

        case "marketing":
            titulo = "Marketing";
            descripcion = "para hacer crecer tu negocio!";
            imagen = "img/manos-sosteniendo-el-concepto-de-redes-sociales-de-telefonos-inteligentes.jpg"; 
            items = [
                "Diseño de estrategias de marketing digital.",
                "Gestión de redes sociales y contenido.",
                "Publicidad en Google y redes sociales.",
                "Análisis de mercado y competencia.",
                "Desarrollo de marca e identidad visual."
            ];
            break;

        case "inventarios":
            titulo = "Inventarios";
            descripcion = "para optimizar tu negocio!";
            imagen = "img/d1.png"; 
            items = [
                "Sistemas de control de inventario.",
                "Optimización de almacenamiento.",
                "Reducción de pérdidas y faltantes.",
                "Implementación de software gratuito.",
                "Procesos de compra y reabastecimiento."
            ];
            break;

        case "auditorias":
            titulo = "Auditorías";
            descripcion = "para la tranquilidad de tu negocio!";
            imagen = "img/d2.png"; 
            items = [
                "Revisión de procesos internos.",
                "Evaluación de controles financieros.",
                "Detección de riesgos operativos.",
                "Optimización de procesos administrativos.",
                "Preparación para auditorías externas."
            ];
            break;
    }

    contenido = `
    <div class="row w-100 g-0">
        <!-- Columna izquierda -->
        <div class="col-12 col-md-6 bg-dark text-white p-4 d-flex flex-column justify-content-center">
            <button class="btn text-white mb-3" onclick="volverInicio()">← Volver</button>
            <h5>Encuentra aquí soluciones de</h5>
            <h2 class="fw-bold text-warning">${titulo}</h2>
            <p class="mb-4">${descripcion}</p>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>

        <!-- Columna derecha -->
        <div class="col-12 col-md-6 bg-light p-4 d-flex flex-column align-items-center justify-content-center text-center">
            <img src="img/logo.png" alt="Logo Jump" class="mb-3" style="width: 80px;">
            <img src="${imagen}" alt="Servicio ${titulo}" class="img-fluid rounded mb-4" style="max-width: 90%;">
            <button class="btn btn-warning fw-bold px-4 py-2" onclick="mostrarProfesionales('${servicio}')">Ver profesionales</button>
        </div>
    </div>
    `;

    contenedor.innerHTML = contenido;
}


function mostrarProfesionales(servicio) {
    const contenedorServicio = document.getElementById("contenido-servicio");
    const contenedorProfesionales = document.getElementById("contenido-profesionales");
    
    contenedorServicio.classList.add("d-none");
    contenedorProfesionales.classList.remove("d-none");
    
    let profesional = {};
    let serviciosOfrecidos = [];
    
    switch(servicio) {
        case "contabilidad":
            profesional = {
                nombre: "Laura Gomez",
                titulo: "Profesional en Contabilidad",
                especialidad: "Contabilidad para emprendimientos y pequeños negocios",
                descripcion: "Contadora Pública con más de 5 años de experiencia acompañando a emprendedores en la organización financiera de sus negocios. Apasionada por hacer la contabilidad comprensible y útil desde el primer día.",
                disponibilidad: "Lunes a viernes — 4:00 p.m. a 8:00 p.m.",
                modalidad: "Consultorías virtuales de 30 minutos (gratuitas)"
            };
            serviciosOfrecidos = [
                "Registro de ingresos y gastos",
                "Organización de libros contables básicos en Excel",
                "Guía para declaración de impuestos y facturación",
                "Asesoría en flujo de caja y proyección financiera"
            ];
            break;
            
        case "marketing":
            profesional = {
                nombre: "Carlos Mendez",
                titulo: "Especialista en Marketing Digital",
                especialidad: "Estrategias de crecimiento para pequeños negocios",
                descripcion: "Marketing digital con 7 años de experiencia ayudando a emprendedores a posicionar sus marcas en línea. Especializado en estrategias de bajo presupuesto con alto impacto.",
                disponibilidad: "Martes a jueves — 9:00 a.m. a 6:00 p.m.",
                modalidad: "Primera consultoría gratuita de 45 minutos"
            };
            serviciosOfrecidos = [
                "Diseño de estrategias de redes sociales",
                "Publicidad en Facebook e Instagram",
                "SEO básico para emprendedores",
                "Creación de contenido efectivo",
                "Análisis de competencia"
            ];
            break;
            
        case "inventarios":
            profesional = {
                nombre: "Ana Torres",
                titulo: "Experta en Gestión de Inventarios",
                especialidad: "Sistemas de inventario para pequeños comercios",
                descripcion: "Ingeniera industrial con especialización en logística y más de 8 años implementando sistemas de inventario eficientes para pequeños negocios.",
                disponibilidad: "Lunes a miércoles — 10:00 a.m. a 4:00 p.m.",
                modalidad: "Asesoría inicial gratuita de 1 hora"
            };
            serviciosOfrecidos = [
                "Implementación de sistemas de control",
                "Reducción de faltantes y pérdidas",
                "Software gratuito para inventarios",
                "Procesos de compra y reabastecimiento",
                "Organización de almacén"
            ];
            break;
            
        case "auditorias":
            profesional = {
                nombre: "Roberto Sánchez",
                titulo: "Auditor Financiero",
                especialidad: "Procesos internos y controles para pequeños negocios",
                descripcion: "Contador Público con maestría en auditoría y 10 años de experiencia ayudando a negocios a implementar controles internos efectivos.",
                disponibilidad: "Miércoles a viernes — 2:00 p.m. a 7:00 p.m.",
                modalidad: "Evaluación inicial gratuita de 30 minutos"
            };
            serviciosOfrecidos = [
                "Revisión de procesos internos",
                "Detección de riesgos operativos",
                "Optimización de controles financieros",
                "Preparación para auditorías externas",
                "Mejora de procesos administrativos"
            ];
            break;
    }
    
    const contenido = `
    <div class="row w-100 g-0">
        <!-- Columna izquierda -->
        <div class="col-12 col-md-4 bg-dark text-white p-4 d-flex flex-column">
            <button class="btn text-white mb-3" onclick="volverAServicio()">← Volver</button>
            <h5 class="mb-4">Profesionales en</h5>
            <h2 class="fw-bold text-warning mb-4">${servicio.charAt(0).toUpperCase() + servicio.slice(1)}</h2>
            
            <div class="mb-4">
                <h6 class="text-warning">Filtrar por:</h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filtro-disponibilidad">
                    <label class="form-check-label" for="filtro-disponibilidad">Disponibilidad inmediata</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="filtro-consultoria">
                    <label class="form-check-label" for="filtro-consultoria">Consultoría gratuita</label>
                </div>
            </div>
            
            <div class="mt-auto">
                <button class="btn btn-outline-warning w-100">Jump Consultorías</button>
            </div>
        </div>

        <!-- Columna derecha -->
        <div class="col-12 col-md-8 bg-light p-4">
            <div class="card mb-4">
                <div class="card-body">
                    <h4 class="card-title text-warning">${profesional.titulo}</h4>
                    <h5 class="card-subtitle mb-3">${profesional.nombre}</h5>
                    
                    <div class="mb-3">
                        <h6 class="text-warning">Especialidad:</h6>
                        <p>${profesional.especialidad}</p>
                        <p>${profesional.descripcion}</p>
                    </div>
                    
                    <div class="mb-3">
                        <h6 class="text-warning">Servicios que ofrece:</h6>
                        <ul>
                            ${serviciosOfrecidos.map(servicio => `<li>${servicio}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="mb-3">
                        <h6 class="text-warning">Disponibilidad:</h6>
                        <p>${profesional.disponibilidad}</p>
                        <p>Modalidad: ${profesional.modalidad}</p>
                    </div>
                    
                    <button class="btn btn-warning" onclick="mostrarFormularioContacto('${servicio}')">Contactar</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    contenedorProfesionales.innerHTML = contenido;
}

// FUNCIÓN PARA VOLVER AL SERVICIO DESDE PROFESIONALES
function volverAServicio() {
    document.getElementById("contenido-profesionales").classList.add("d-none");
    document.getElementById("contenido-servicio").classList.remove("d-none");
}

// Función para mostrar el formulario de contacto (actualizada)
function mostrarFormularioContacto(servicio) {
    const contenedorProfesionales = document.getElementById("contenido-profesionales");
    const formularioContacto = document.getElementById("formulario-contacto");
    
    contenedorProfesionales.classList.add("d-none");
    formularioContacto.classList.remove("d-none");
    
    const contenido = `
    <div class="row w-100 g-0 min-vh-100">
        <!-- Columna izquierda -->
        <div class="col-12 col-md-4 bg-dark text-white p-4 d-flex flex-column">
            <button class="btn text-white mb-3" onclick="volverAProfesionales()">← Volver</button>
            <h5 class="mb-4">Aquí podrás</h5>
            <h2 class="fw-bold text-warning mb-4">Solicitar Consultoría</h2>
            <p class="mb-4">Completa este formulario y un profesional se pondrá en contacto contigo para agendar tu asesoría!</p>
        </div>

        <!-- Columna derecha -->
        <div class="col-12 col-md-8 bg-light p-4 d-flex align-items-center">
            <div class="w-100" style="max-width: 600px;">
                <form id="form-contacto">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre completo</label>
                        <input type="text" class="form-control" id="nombre" required>
                    </div>
                    
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Teléfono de contacto</label>
                        <input type="tel" class="form-control" id="telefono">
                    </div>
                    
                    <div class="mb-3">
                        <label for="categoria" class="form-label">Categoría de consultoría</label>
                        <select class="form-select" id="categoria" required>
                            <option selected disabled value="">Elige una...</option>
                            <option value="contabilidad" ${servicio === 'contabilidad' ? 'selected' : ''}>Contabilidad</option>
                            <option value="marketing" ${servicio === 'marketing' ? 'selected' : ''}>Marketing</option>
                            <option value="inventarios" ${servicio === 'inventarios' ? 'selected' : ''}>Inventarios</option>
                            <option value="auditorias" ${servicio === 'auditorias' ? 'selected' : ''}>Auditorías</option>
                        </select>
                    </div>
                    
                    <div class="mb-4">
                        <label for="descripcion" class="form-label">Breve descripción de tu necesidad</label>
                        <textarea class="form-control" id="descripcion" rows="3" placeholder='ejemplo: "Necesito ayuda para organizar mis ingresos y egresos mensuales."'></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-warning w-100 py-2">Enviar solicitud</button>
                </form>
            </div>
        </div>
    </div>
    `;
    
    formularioContacto.innerHTML = contenido;
    
    // Agregar evento al formulario
    document.getElementById("form-contacto").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("¡Solicitud enviada con éxito! Un profesional se pondrá en contacto contigo pronto.");
        volverAProfesionales();
    });
}

// Función para volver a profesionales desde el formulario
function volverAProfesionales() {
    document.getElementById("formulario-contacto").classList.add("d-none");
    document.getElementById("contenido-profesionales").classList.remove("d-none");
}