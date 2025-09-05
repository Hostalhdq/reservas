# Hostal HDQ - Sitio Web Oficial

[![Deploy Status](https://img.shields.io/badge/Deploy-Active-success)](https://hostalhdq.cl)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://pages.github.com/)
[![Website](https://img.shields.io/website?url=https%3A//hostalhdq.cl)](https://hostalhdq.cl)

## 🏨 Sobre Nosotros

**Hostal HDQ** es tu mejor opción de alojamiento cómodo en Concepción, ubicado estratégicamente en el sector Collao. Ofrecemos habitaciones cómodas y modernas para empresas, familias, parejas y estudiantes.

### 📍 Ubicación
- **Dirección:** Chiloé 1130, Sector Collao, Concepción
- **Distancias:**
  - Universidad del Bío-Bío (UBB): 350m
  - Terminal Collao: cercano
  - Estadio Ester Roa: 850m

### 📞 Contacto
- **Teléfono/WhatsApp:** +56 9 8775 2280
- **Email:** hostalhdq@gmail.com
- **Sitio Web:** [hostalhdq.cl](https://hostalhdq.cl)

## 🌐 Este Repositorio

Este repositorio contiene el código fuente del sitio web oficial de Hostal HDQ, que se despliega automáticamente en **hostalhdq.cl** usando GitHub Pages.

### 🎯 Objetivos del Sitio
- Mostrar información completa sobre nuestras habitaciones y servicios
- Facilitar el contacto y reservas
- Posicionar el hostal en búsquedas locales de Concepción
- Atraer empresas, familias y estudiantes

## 🏗️ Estructura del Proyecto

```
hostalhdq.github.io/
├── index.html              # Página principal
├── css/
│   ├── styles.css         # Estilos principales
│   └── responsive.css     # Estilos responsivos
├── js/
│   ├── main.js           # JavaScript principal
│   └── contact.js        # Funcionalidad de contacto
├── images/
│   ├── habitaciones/     # Fotos de habitaciones
│   ├── exterior/         # Fotos exteriores
│   └── logo/            # Logos y branding
├── pages/
│   ├── habitaciones.html
│   ├── contacto.html
│   └── ubicacion.html
├── CNAME                 # Configuración dominio personalizado
├── robots.txt           # SEO - instrucciones para bots
├── sitemap.xml          # SEO - mapa del sitio
└── README.md            # Este archivo
```

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y diseño responsivo
- **JavaScript** - Interactividad y funcionalidades
- **GitHub Pages** - Hosting gratuito y confiable
- **Google Fonts** - Tipografías optimizadas
- **Font Awesome** - Iconografía

## 📱 Características

- ✅ **Diseño Responsivo** - Optimizado para móviles, tablets y desktop
- ✅ **SEO Optimizado** - Meta tags, sitemap, robots.txt
- ✅ **Velocidad Optimizada** - Imágenes comprimidas, CSS/JS minificado
- ✅ **Accesibilidad** - Cumple estándares WCAG
- ✅ **Formulario de Contacto** - Integración con WhatsApp y email
- ✅ **Google Maps** - Ubicación interactiva
- ✅ **SSL Seguro** - Certificado HTTPS automático

## 🛏️ Servicios Destacados

| Tipo de Habitación | Precio | Características |
|-------------------|---------|-----------------|
| Doble | $40.000 | Ideal para parejas |
| Matrimonial | Consultar | Cama matrimonial, más espacio |
| Triple | Consultar | Para familias pequeñas |
| Grupal | $80.000 | Para grupos y delegaciones |

### 🎯 Especializaciones
- **Empresas:** Telecomunicaciones, construcción, servicios técnicos
- **Deportes:** Delegaciones deportivas (cerca del Estadio Ester Roa)
- **Educación:** Estudiantes y familias visitantes (cerca de UBB)
- **Turismo:** Familias que visitan Concepción

## ⚙️ Configuración y Deployment

### Dominio Personalizado
Este sitio se despliega automáticamente en **hostalhdq.cl** mediante GitHub Pages.

**Configuración DNS requerida:**
```
# Registros A para el dominio raíz
hostalhdq.cl → 185.199.108.153
hostalhdq.cl → 185.199.109.153  
hostalhdq.cl → 185.199.110.153
hostalhdq.cl → 185.199.111.153

# Registro CNAME para www
www.hostalhdq.cl → hostalhdq.github.io
```

### Archivo CNAME
El archivo `CNAME` en la raíz del proyecto debe contener:
```
hostalhdq.cl
```

## 🔧 Desarrollo Local

### Clonar el Repositorio
```bash
git clone https://github.com/hostalhdq/hostalhdq.github.io.git
cd hostalhdq.github.io
```

### Ejecutar Localmente
```bash
# Opción 1: Servidor Python (Python 3)
python -m http.server 8000

# Opción 2: Servidor Node.js
npx http-server -p 8000

# Opción 3: Servidor PHP
php -S localhost:8000

# Opción 4: Live Server (VS Code Extension)
# Instalar Live Server y hacer clic derecho → "Open with Live Server"
```

Visita `http://localhost:8000` en tu navegador.

## 📝 Cómo Actualizar el Sitio

1. **Hacer cambios localmente** y probar
2. **Commit y push a GitHub:**
   ```bash
   git add .
   git commit -m "Actualización: descripción de cambios"
   git push origin main
   ```
3. **Despliegue automático:** GitHub Pages actualizará hostalhdq.cl en 1-5 minutos

### 🔄 Flujo de Trabajo Recomendado
1. Crear rama para cambios: `git checkout -b mejora/nueva-funcionalidad`
2. Hacer cambios y commits
3. Push de la rama: `git push origin mejora/nueva-funcionalidad`
4. Crear Pull Request
5. Revisar y merge a `main`

## 📊 SEO y Analytics

### Optimizaciones SEO Implementadas
- Meta tags optimizados para búsquedas locales
- Schema.org markup para hoteles
- Sitemap XML automático
- URLs amigables
- Imágenes optimizadas con alt text
- Tiempo de carga < 3 segundos

### Keywords Objetivo
- "hostal concepción"
- "alojamiento collao"
- "hotel cerca ubb"
- "hospedaje concepción"
- "hostal empresas concepción"

## 🛠️ Mantenimiento

### Tareas Regulares
- [ ] Actualizar precios de habitaciones
- [ ] Renovar fotos de habitaciones
- [ ] Verificar links y formularios
- [ ] Optimizar nuevas imágenes
- [ ] Revisar métricas de Google Analytics

### Monitoreo
- **Google Analytics 4** - Seguimiento de visitantes
- **Google Search Console** - SEO y indexación
- **PageSpeed Insights** - Rendimiento
- **GTmetrix** - Velocidad de carga

## 🤝 Contribuir

### Para el Equipo de Hostal HDQ
1. Crear issue describiendo el cambio necesario
2. Asignar responsable
3. Crear rama desde `main`
4. Implementar cambios
5. Crear Pull Request
6. Revisar y aprobar
7. Merge a `main`

### Reportar Problemas
- Crear un [issue](../../issues) en GitHub
- Enviar email a hostalhdq@gmail.com
- Contactar por WhatsApp: +56 9 8775 2280

## 📄 Licencia

© 2025 Hostal HDQ. Todos los derechos reservados.

Este código es propiedad de Hostal HDQ y está destinado exclusivamente para el sitio web oficial.

---

## 🔗 Enlaces Útiles

- **Sitio Web:** [hostalhdq.cl](https://hostalhdq.cl)
- **WhatsApp:** [wa.me/56987752280](https://wa.me/56987752280)
- **Email:** [hostalhdq@gmail.com](mailto:hostalhdq@gmail.com)
- **Google Maps:** [Ver Ubicación](https://maps.google.com/?q=Chiloé+1130,+Concepción)

---

**📅 Última actualización:** Septiembre 2025  
**🏷️ Versión:** 2.0  
**🚀 Estado:** Activo en hostalhdq.cl  
**👥 Mantenido por:** Equipo Hostal HDQ
